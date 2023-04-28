<template>
  <AuthTitleBar/>
  <div class="signup-page">
    <h1 class="page-title">Sign in</h1>
    <form>
      <ion-item class="input" lines="none">
        <ion-input placeholder="Email address or username" />
      </ion-item>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-spacing);
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
}
</style>