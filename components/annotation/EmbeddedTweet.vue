<template>
  <div v-if="!error && !pending" v-html="data"/>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  }
});

const {data, pending, error} = useLazyFetch("https://publish.twitter.com/oembed", {
  params: {
    url: props.url,
    theme: "dark",
    align: "center",
    dnt: true,
  }
});
</script>

<style scoped>

</style>