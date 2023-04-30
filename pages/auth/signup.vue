<template>
  <AuthPageLayout title="Create Account">
    <form>
      <ion-item class="input" lines="none">
        <ion-input v-model="username" placeholder="Username" type="text" />
      </ion-item>
      <ion-item class="input" lines="none">
        <ion-input v-model="email" placeholder="Email" type="email" />
      </ion-item>
      <ion-item class="input" lines="none">
        <ion-input v-model="password" placeholder="Password" type="password" />
      </ion-item>
      <ion-button>Sign Up</ion-button>
      <span class="tertiary-text">Have an account? <span router-link="/auth/signin">Sign In</span></span>
    </form>
  </AuthPageLayout>
</template>

<script setup lang="ts">
const username = useState("username", () => "");
const email = useState("email", () => "");
const password = useState("password", () => "");
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