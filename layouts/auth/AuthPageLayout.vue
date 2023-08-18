<template>
  <ion-page>
    <ion-content>
      <div class="container auth-page">
        <header v-if="!props.hideLogo">
          <img class="logo" src="/img/logo-transparent-white.svg" alt="fidelica logo">
          <span class="tertiary-text">Stop misinformation on the internet now.</span>
        </header>
        <h1 v-if="props.title" class="page-title">{{ props.title }}</h1>
        <slot/>
        <div v-if="!props.hidePrivacyNote" id="privacy-note">
          <p class="tertiary-text">We value your privacy.</p>
          <p class="tertiary-text">By signing up, you agree to our <span @click="router.push('/terms')">terms</span> and <span @click="router.push('/conditions')">conditions</span>.</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const router = useIonRouter();

const props = defineProps<{
    title?: string,
    hideLogo?: boolean,
    hidePrivacyNote?: boolean,
}>();
</script>

<style scoped lang="scss">
.container {
  max-width: 450px;
  margin: 0 auto;
  padding: var(--normal-spacing) var(--large-spacing);
}

@media (max-width: 450px) {
  .container {
    max-width: 100%;
  }
}

.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-spacing);
  height: 100vh;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-spacing);

  padding: var(--large-spacing) 0;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--secondary-color);
}

.logo {
  height: 32px;
}

#privacy-note {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: var(--xl-spacing);

  p {
    text-align: center;
  }

  span {
    color: inherit;
    text-decoration: underline;
  }
}
</style>