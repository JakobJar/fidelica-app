<template>
  <header>
    <img class="avatar" src="/img/no-user.svg" alt="avatar"/>
    <img class="logo" src="/img/logo-transparent-white.svg" alt="fidelica logo"/>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}

.logo {
  height: 1.75rem;
  width: auto;
  margin-right: auto;
}

.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: var(--tertiary-color) solid 1px;
  margin-right: auto;
}
</style>