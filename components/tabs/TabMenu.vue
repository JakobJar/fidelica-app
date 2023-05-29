<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/">
      <ion-icon :icon="ioniconsHome"/>
      <ion-label>Home</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="search" href="/search">
      <ion-icon :icon="ioniconsSearch"/>
      <ion-label>Search</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="fact-check" href="/search">
      <ion-icon :icon="ioniconsCheckmark"/>
      <ion-label>Fact Check</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<style scoped lang="scss">
ion-tab-bar {
  --background: var(--primary-background-color);
}

ion-tab-button {
  --color: var(--tertiary-color);
  --color-selected: var(--highlight-color);
}
</style>