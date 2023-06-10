<template>
  <ion-page>
    <ion-header class="container">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :defaultHref="'/article/' + route.params.id"/>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>Publish</ion-button>
        </ion-buttons>
        <ion-title>Edit Article</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content v-if="!pending">
      <div class="container">
        <ion-textarea v-model="article.content" placeholder="Type the content here..." />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: article, pending, error } = await useFetch(`/article/${route.params.id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl
});
</script>

<style scoped lang="scss">
ion-toolbar {
  --background: var(--background-color);
  --color: var(--primary-color);

  ion-back-button {
    --color: var(--primary-color);
  }
}

ion-textarea {
  --color: var(--secondary-color);
  --highlight-color: var(--secondary-color);
}
</style>