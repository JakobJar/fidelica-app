<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <ArticleHeader default-back-href="/">
          <ion-button :router-link="'/article/' + route.params.id + '/edit'" class="secondary-button">Edit</ion-button>
        </ArticleHeader>
        <div v-if="!pending && data" id="article-content">
          <div class="title">
            <h1 v-text="data.article.title"/>
            <p class="tertiary-text">
              Last edited on {{ getDateFromObjectId(data.lastEdit.id).toLocaleDateString() }}
              by <span v-text="data.lastEditor.name" :router-link="'/profile/' + data.lastEditor.id"/>
            </p>
          </div>
          <div class="text">
            <p v-for="line in data.article.content.split('\n')" v-text="line" :key="line" class="secondary-text"/>
          </div>
        </div>
        <div v-else-if="pending" id="article-content">
          <h1><ion-skeleton-text style="width: 80%"/></h1>
          <p><ion-skeleton-text style="width: 100%"/></p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const {data, pending, error} = await useAsyncData("article-" + route.params.id, async () => {
    const article = await $fetch(`/article/${route.params.id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        baseURL: runtimeConfig.public.apiBaseUrl
    }) as any;

    const edits = await $fetch(`/article/${route.params.id}/edits`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        query: {
            limit: 1
        },
        baseURL: runtimeConfig.public.apiBaseUrl
    });

    const lastEdit = (edits as any)[0];
    const lastEditor = await $fetch(`/user/${lastEdit.editorId}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        query: {
            preview: true
        },
        baseURL: runtimeConfig.public.apiBaseUrl
    }) as any;

    return {
        article,
        lastEdit,
        lastEditor,
    };
});

if (error.value)
    console.error(error.value);

if (data.value) {
    useSeoMeta({
        title: data.value.article.title + " | " + runtimeConfig.public.siteName,
        description: data.value.article.shortDescription,
    });
}
</script>

<style scoped lang="scss">
#article-content {
  display: flex;
  flex-direction: column;
  gap: var(--normal-spacing);
}

.title {
  display: flex;
  flex-direction: column;
  gap: var(--tiny-spacing);
}

.text {
  display: flex;
  flex-direction: column;
  gap: var(--tiny-spacing);
}
</style>