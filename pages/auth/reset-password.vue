<template>
  <AuthPageLayout :hide-slogan="true">
    <form>
      <p class="tertiary-text center-text">We’ll send your password reset info to the email address linked to your account.</p>
      <ion-item class="input" lines="none">
        <ion-input v-model="email" placeholder="Email address" type="text" />
      </ion-item>
      <ion-button>Recover Password</ion-button>
    </form>
  </AuthPageLayout>
</template>

<script setup lang="ts">
const email = useState("email", () => "");
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--xl-spacing);
  width: 100%;
}

.center-text {
  text-align: center;
}
</style>