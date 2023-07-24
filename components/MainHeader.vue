<template>
  <header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button v-if="!props.hideBackButton" icon="/icon/ios-arrow-left.svg" :defaultHref="props.defaultBackHref"/>
        <slot name="start"/>
      </ion-buttons>
      <ion-title v-if="props.title">{{ props.title }}</ion-title>
      <ion-buttons slot="primary">
        <slot/>
      </ion-buttons>
    </ion-toolbar>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  defaultBackHref?: string,
  title?: string,
  hideBackButton?: boolean,
}>();
</script>

<style scoped lang="scss">
header {
  padding: var(--small-spacing) 0;
}

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