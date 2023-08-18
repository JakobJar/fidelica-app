<template>
  <ion-page>
    <ion-content>
      <div class="container home-page">
        <HomeHeader/>
        <SearchBar/>
        <!--<section id="popular-articles">
          <h1 class="fancy-text">Popular Articles</h1>
          <ion-list>
          </ion-list>
        </section>-->
      </div>
    </ion-content>
    <!--<TabMenu/>-->
  </ion-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    gap: var(--large-spacing);
}

#popular-articles {
    display: flex;
    flex-direction: column;
    gap: var(--small-spacing);
}
</style>