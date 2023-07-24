<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <MainHeader default-back-href="/"/>
        <div class="annotation-page">
          <SearchBar/>
          <div v-if="!pending">
            <AnnotationInfo v-if="annotations && annotations[0]" :annotation="annotations[0]"/>
            <AnnotationInfo v-else :annotation="UNDEFINED_ANNOTATION"/>
          </div>
          <ion-button id="open-modal">Show other annotations</ion-button>
        </div>
      </div>
    </ion-content>

    <ion-modal ref="modal" trigger="open-modal">
      <MainHeader :hide-back-button="true" title="Other Annotation">
        <template #start>
          <ion-button slot="start" class="secondary-button" @click="closeModal">Close</ion-button>
        </template>
        <ion-button @click="reportAnnotation">Add new</ion-button>
      </MainHeader>
      <ion-content>
        <div class='container'>
          <AnnotationInfo v-for="annotation in annotations" :annotation="annotation" :key="annotation.id"/>
        </div>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import Annotation, {AnnotationRating, RawAnnotation, UNDEFINED_ANNOTATION} from "~/types/annotation";
import {PreviewUser} from "~/types/user";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useIonRouter();

useSeoMeta({title: "Check | " + runtimeConfig.public.siteName});

const url = Array.isArray(route.params.url) ? route.params.url[0] : route.params.url;
const modal = ref();

const {data: annotations, pending } = useAsyncData(async () => {
  const response = await useAPI<RawAnnotation[]>("/annotation/url/" + encodeURIComponent(url));
  console.log(response);
  if (!response.ok || !response._data)
    return [];
  const rawAnnotations: RawAnnotation[] = response._data;
  console.log(rawAnnotations);

  const annotations = await Promise.all(rawAnnotations.map(value => mapReporter(value)));

  annotations.sort((a, b) => getVotes(b) - getVotes(a));
  return annotations;
});

const mapReporter = async (value: RawAnnotation): Promise<Annotation> => {
  const reporterResponse = await useAPI<PreviewUser>(`/user/${value.reporterId}`, {
    params: {
      preview: true,
    }
  });

  let reporter: PreviewUser | undefined = undefined;
  if (reporterResponse.ok && reporterResponse._data)
    reporter = await reporterResponse._data;

  return {
    id: value.id,
    postId: value.postId,
    rating: value.rating as AnnotationRating,
    note: value.note,
    reporter: reporter,
    upvoters: value.upvoters,
    downvoters: value.downvoters,
  }
}

const getVotes = (annotation: Annotation | RawAnnotation) => annotation.upvoters.length - annotation.downvoters.length;

const reportAnnotation = () => router.push("/annotation?url=" + encodeURIComponent(url));

const closeModal = () => modal.value?.$el.dismiss();
</script>

<style scoped lang="scss">
.annotation-page {
  display: flex;
  flex-direction: column;
  gap: var(--large-spacing);
}
</style>
