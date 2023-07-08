<template>
  <div v-if="!error && !pending" v-html="data"/>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const props = defineProps({
  url: {
    type: String,
    required: true
  }
});

const params = new URLSearchParams();
params.set("url", props.url);
params.set("theme", "dark");
params.set("align", "center");
params.set("dnt", "true");

const url = "https://publish.twitter.com/oembed/" + "?" + params.toString();

const {data, pending, error} = useLazyFetch("/cors/", {
  params: {
    url: url
  },
  baseURL: runtimeConfig.public.apiBaseUrl,
});
</script>

<style scoped>

</style>