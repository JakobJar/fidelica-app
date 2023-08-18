<template>
  <AuthPageLayout title="Sign In">
    <form>
      <ion-item class="input" lines="none">
        <ion-input v-model="username" placeholder="Email address or username" type="text" />
      </ion-item>
      <ion-item class="input" lines="none">
        <ion-input v-model="password" placeholder="Password" type="password" />
      </ion-item>
      <span @click="router.push('/auth/password-reset')">Forgot your password?</span>
      <ion-button @click="submit">Sign In</ion-button>
      <span class="tertiary-text">Don't have an account yet? <span @click="router.push('/auth/signup')">Create one</span></span>
    </form>
  </AuthPageLayout>
</template>

<script setup lang="ts">
import AuthPageLayout from "~/layouts/auth/AuthPageLayout.vue";

const router = useIonRouter();
const auth = useAuth();

const username = useState("username", () => "");
const password = useState("password", () => "");

const submit = async () => {
  if (username.value === "" || password.value === "")
    return;
  if (await auth.login(username.value, password.value)) {
    router.push("/");
  }
};
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