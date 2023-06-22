<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <DefaultHeader default-back-href="/"/>
        <div class="annotation-page">
          <SearchBar/>
          <EmbeddedTweet url="https://twitter.com/byVNTY/status/1671655933976498176"/>
          <AnnotationInfo/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";
import EmbeddedTweet from "~/components/annotation/EmbeddedTweet.vue";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useIonRouter();

useSeoMeta({title: "Search | " + runtimeConfig.public.siteName});
</script>

<style scoped lang="scss">
.annotation-page {
  display: flex;
  flex-direction: column;
  gap: var(--large-spacing);
}
</style>