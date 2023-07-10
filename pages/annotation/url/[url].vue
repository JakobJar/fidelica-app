<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <DefaultHeader default-back-href="/"/>
        <div class="annotation-page">
          <SearchBar/>
          <AnnotationInfo/>
          <ion-button id="open-modal">Show other annotations</ion-button>
        </div>
      </div>
    </ion-content>

    <ion-modal ref="modal" trigger="open-modal">
      <DefaultHeader :hide-back-button="true" title="Other Annotation">
        <template #start>
          <ion-button slot="start" class="secondary-button" @click="closeModal">Close</ion-button>
        </template>
        <ion-button @click="reportAnnotation">Add new</ion-button>
      </DefaultHeader>
      <ion-content>
        <div class='container'>


        </div>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useIonRouter();

const props = defineProps<{
  url: string
}>()

useSeoMeta({title: "Check | " + runtimeConfig.public.siteName});

const modal = ref();

const annotations = useAsyncData(async () => {
  const annotations: any[] = await $fetch("/annotation/url/" + encodeURIComponent(props.url), {
    headers: {
      "Accept": "application/json",
    },
    baseURL: runtimeConfig.public.apiBaseUrl,
  });

  annotations.sort((a, b) => (b.upvotes.length - b.downvotes.length) - (a.upvotes.length - a.downvotes.length));

  return {
    annotations: annotations,
  };
});

function reportAnnotation() {
  router.push("/annotation?url=" + encodeURIComponent(props.url));
}

function closeModal() {
  modal.value?.$el.dismiss();
}
</script>

<style scoped lang="scss">
.annotation-page {
  display: flex;
  flex-direction: column;
  gap: var(--large-spacing);
}
</style>
