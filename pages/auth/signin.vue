<template>
  <AuthPageLayout title="Sign In">
    <form>
      <ion-item class="input" lines="none">
        <ion-input v-model="username" placeholder="Email address or username" type="text" />
      </ion-item>
      <ion-item class="input" lines="none">
        <ion-input v-model="password" placeholder="Password" type="password" />
      </ion-item>
      <span router-link="/auth/password-reset">Forgot your password?</span>
      <ion-button @click="submit">Sign In</ion-button>
      <span class="tertiary-text">Don't have an account yet? <span router-link="/auth/signup">Create one</span></span>
    </form>
  </AuthPageLayout>
</template>

<script setup lang="ts">
import AuthPageLayout from "~/layouts/auth/AuthPageLayout.vue";

const runtimeConfig = useRuntimeConfig();
const ionRouter = useIonRouter();

const username = useState("username", () => "");
const password = useState("password", () => "");

async function submit() {
  const data = new FormData();
  data.set("username", username.value);
  data.set("password", password.value);
  data.set("g-recaptcha", "");

  const {data: result, error} = await useFetch("/auth/login", {
    method: "POST",
    body: data,
    server: false,
    credentials: "include",
    headers: {
      "Accept": "application/json",
    },
    baseURL: runtimeConfig.public.apiBaseUrl
  });

  if (error)
    return;

  ionRouter.push("/");
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--large-spacing);
  width: 100%;
}
</style>