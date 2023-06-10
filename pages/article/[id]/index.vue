<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div id="article-content">
          <h1 v-text="article.title"/>
          <p class="secondary-text">
            Last edited on {{ getDateFromObjectId(edits[0].id).toLocaleDateString() }}
            by <span v-text="lastEditor.name" router-link="/profile/{{lastEditorId}}"/>
          </p>
          <p v-for="line in article.content.split('\n')" v-text="line" :key="line" class="tertiary-text"/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: article, error: articleError } = await useFetch(`/article/${route.params.id}`, {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
    baseURL: runtimeConfig.public.apiBaseUrl
});

const { data: edits, error: editsError } = await useFetch(`/article/${route.params.id}/edits`, {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
    query: {
        limit: 1
    },
    baseURL: runtimeConfig.public.apiBaseUrl
});

const lastEditorId = (edits.value as any)[0].editorId;
const { data: lastEditor, error: lastEditorError } = await useFetch(`/user/${lastEditorId}`, {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
    query: {
        preview: true
    },
    baseURL: runtimeConfig.public.apiBaseUrl
});
</script>

<style scoped lang="scss">
#article-content {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
}
</style>