import User from "~/types/user";

export const useAuth = () => {

    const currentUserCookie = useCookie('currentUser');
    const router = useIonRouter();

    const getCurrentUser = (): User | undefined => {
        const rawJson = currentUserCookie.value;
        if (rawJson)
            return JSON.parse(rawJson);
        return undefined;
    }

    const isAuthenticated = async (): Promise<boolean> => {
        const response = await useAPI<User>("/user");
        if (response) {
            currentUserCookie.value = JSON.stringify(response._data);;
        } else {
            currentUserCookie.value = undefined;
        }
        return response.ok;
    }

    const validate = async (): Promise<boolean> => {
        if (!(await isAuthenticated())) {
            router.push("/auth/signin");
            return false;
        }
        return true;
    }

    const register = async (email: string, username: string, password: string): Promise<boolean> => {
        const formData = new FormData();
        formData.set("email", email);
        formData.set("username", username);
        formData.set("password", password);
        formData.set("g-recaptcha", "");

        const response = await useAPI<User>("/auth/register", {
            method: "POST",
            body: formData,
            server: false
        });
        if (response && response._data) {
            currentUserCookie.value = JSON.stringify(response._data);
            return true;
        }
        return false;
    }

    const login = async (username: string, password: string): Promise<boolean> => {
        const formData = new FormData();
        formData.set("username", username);
        formData.set("password", password);
        formData.set("g-recaptcha", "");

        const response = await useAPI<User>("/auth/login", {
            method: "POST",
            body: formData,
            server: false
        });
        if (response && response._data) {
            currentUserCookie.value = JSON.stringify(response._data);
            return true;
        }
        return false;
    }

    const logout = async () => {
        const response = await useAPI("/auth/logout", {
            method: "POST",
            server: false
        });
        if (response.ok) {
            currentUserCookie.value = undefined;
            return true;
        }
        return false;
    }


    return {
        getCurrentUser,
        isAuthenticated,
        validate,
        register,
        login,
        logout
    }
}