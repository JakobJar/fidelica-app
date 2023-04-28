<template>
  <div class="title">
    <img class="logo" src="/img/logo-transparent-white.svg" alt="fidelica logo">
    <span class="tertiary-text">Stop misinformation on the internet now.</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-spacing);

  padding: var(--normal-spacing) 0;
}

.logo {
  height: 32px;
}
</style>