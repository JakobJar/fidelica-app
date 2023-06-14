<template>
  <header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button icon="/icon/ios-arrow-left.svg" :defaultHref="props.defaultBackHref"/>
      </ion-buttons>
      <ion-buttons slot="primary">
        <slot/>
      </ion-buttons>
    </ion-toolbar>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  defaultBackHref?: string
}>();
</script>

<style scoped lang="scss">
ion-toolbar {
  --background: var(--background-color);
  --color: var(--primary-color);

  ion-back-button {
    --color: var(--primary-color);
  }

  ion-buttons {
    display: flex;
    gap: var(--small-spacing);
  }
}
</style>