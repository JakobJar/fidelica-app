<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <DefaultHeader default-back-href="/"/>
        <SearchBar/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useIonRouter();

useSeoMeta({title: "Search | " + runtimeConfig.public.siteName});
</script>

<style scoped>

</style>