<template>
  <ion-page>
    <ion-content>
      <div class="container home-page">
        <HomeHeader/>
        <SearchBar/>
        <h1 class="fancy-text">Popular Articles</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

</script>

<style scoped >
.home-page {
  display: flex;
  flex-direction: column;
  gap: var(--large-spacing);
}
</style>