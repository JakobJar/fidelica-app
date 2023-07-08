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

      <ion-modal ref="modal" trigger="open-modal">
        <DefaultHeader :hide-back-button="true" title="Other Annotation">
          <template #start>
            <ion-button slot="start" class="secondary-button" @click="closeModal">Close</ion-button>
          </template>
          <ion-button @click="closeModal">Add new</ion-button>
        </DefaultHeader>
      </ion-modal>
    </ion-content>
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

function reportAnnotation()

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