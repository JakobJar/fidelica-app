<template>
  <header>
    <img id="avatar" :src="currentUser ? currentUser.avatarUrl : '/img/no-user.svg'" alt="avatar"/>
    <img class="logo" src="/img/logo-transparent-white.svg" alt="fidelica logo"/>
    <ion-popover id="user-menu" trigger="avatar" trigger-action="click" :dismiss-on-select="true">
      <ion-content v-if="currentUser">
        <p><b>{{ currentUser.name }}</b></p>
        <p @click="logout">Logout</p>
      </ion-content>
      <ion-content v-else>
        <p @click="router.push('/auth/signin')">Login</p>
        <p @click="router.push('/auth/signup')">Register</p>
      </ion-content>
    </ion-popover>
  </header>
</template>

<script setup lang="ts">
const auth = useAuth();
const router = useIonRouter();

const currentUser = auth.getCurrentUser();

const logout = async () => {
  await auth.logout();
  window.location.reload();
}
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

#avatar {
  width: 26px;
  height: 26px;
  padding: 2px;
  border-radius: 50%;
  border: var(--tertiary-color) solid 2px;
  cursor: pointer;
}

#user-menu {

  ion-content {
    --color: var(--primary-color);
    --padding-top: var(--small-spacing);
    --padding-bottom: var(--small-spacing);
    --padding-start: var(--small-spacing);
    --padding-end: var(--small-spacing);
  }
}
</style>