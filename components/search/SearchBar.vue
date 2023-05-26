<template>
  <ion-item class="second-input" lines="none">
    <ion-icon class="search-icon" :icon="ioniconsSearchOutline" slot="start" />
    <ion-input placeholder="Search" type="text" :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)"  />
  </ion-item>
</template>

<script setup lang="ts">
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
.search-icon {
  color: var(--tertiary-color);
  font-size: 1.2em;
  margin-right: var(--small-spacing);
}
</style>