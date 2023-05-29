<template>
  <ion-item button class="article-preview" lines="inset">
    <div class="preview-label">
      <p class="tertiary-text">{{ props.date.toLocaleString() }}</p>
      <h2>{{ props.title }}</h2>
      <p class="tertiary-text">{{ props.description }}</p>
    </div>
  </ion-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  description: string,
  date: Date
}>();
</script>

<style scoped lang="scss">
.article-preview {
  --padding-start: 0;
  --padding-end: 0;
  --padding-top: 0;
  --padding-bottom: 0;
  --inner-padding-top: 0;
  --inner-padding-bottom: 0;
  --inner-padding-start: 0;
  --inner-padding-end: 0;

  --border-color: var(--tertiary-color);

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

.preview-label {
  display: flex;
  flex-direction: column;
  gap: var(--tiny-spacing);
  white-space: normal;
  padding: var(--small-spacing) 0;
}
</style>