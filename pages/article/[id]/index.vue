<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <div id="article-content">
          <h1 v-text="title"/>
          <p class="secondary-text">Last edited on {{ date.toLocaleString() }} by <span v-text="username" router-link=""/></p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const title = useState('title', () => 'Can alcohol be used to treat malaria? WHO disagrees with such internet claims.');
const description = useState('description', () => 'WHO secretary spoke out against every claims concerning such information, but some say it’s true.');
const date = useState('date', () => new Date());
const username = useState('username', () => 'Username');

</script>

<style scoped lang="scss">
#article-content {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
}
</style>