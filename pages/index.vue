<template>
  <ion-page>
    <ion-content>
      <div class="container home-page">
        <HomeHeader/>
        <SearchBar/>
        <section id="popular-articles">
          <h1 class="fancy-text">Popular Articles</h1>
          <ion-list>
            <ArticlePreview title="Can alcohol be used to treat malaria?
WHO disagrees with such internet
claims." description="WHO secretary spoke out against every
claims concerning such information, but
some say it’s true." :date="new Date()"/>
          </ion-list>
        </section>
      </div>
    </ion-content>
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