<template>
  <header>
    <img class="avatar" src="/img/no-user.svg" alt="avatar"/>
    <img class="logo" src="/img/logo-transparent-white.svg" alt="fidelica logo"/>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
header {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  height: 28px;
  width: auto;
}

.avatar {
  width: 26px;
  height: 26px;
  padding: 2px;
  border-radius: 50%;
  border: var(--tertiary-color) solid 2px;
}
</style>