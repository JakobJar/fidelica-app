<template>
  <ion-page>
    <ion-content v-if="!pending && article">
      <div class="container">
        <ArticleHeader :default-back-href="'/article/' + route.params.id">
          <ion-button id="open-meta" class="secondary-button">Edit Meta</ion-button>
          <ion-button>Publish</ion-button>
        </ArticleHeader>
        <ion-textarea v-model="article.content" placeholder="Type the content here..." class="content" />
      </div>
    </ion-content>
    <ion-modal ref="modal" class="container" trigger="open-meta" >
      <header>
        <ion-toolbar>
          <ion-title>Edit Meta</ion-title>
          <ion-buttons slot="primary">
            <ion-button @click="closeModal">Save</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </header>
      <form id="meta-form">
        <ion-item class="input" lines="none">
          <ion-textarea v-model="article.title" placeholder="Title" type="text" />
        </ion-item>
        <ion-item class="input" lines="none">
          <ion-textarea v-model="article.shortDescription" placeholder="Short description" />
        </ion-item>
      </form>
    </ion-modal>
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

const modal = ref();

useSeoMeta({title: "Edit article | " + runtimeConfig.public.siteName});

function closeModal() {
  modal.value.dismiss();
}
</script>

<style scoped lang="scss">
ion-textarea.content {
  --color: var(--secondary-color);
  --highlight-color: var(--secondary-color);
  height: 60vh;
}

#meta-form {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);

  padding-top: var(--small-spacing);
}
</style>