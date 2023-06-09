<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"/>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>Publish</ion-button>
        </ion-buttons>
        <ion-title>Edit Article</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="container">
        <ion-textarea v-model="content" placeholder="Type the content here..." />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const content = useState('content', () => '');
</script>

<style scoped lang="scss">
ion-toolbar {
  --background: var(--background-color);
  --color: var(--primary-color);

  ion-back-button {
    --color: var(--primary-color);
  }
}

ion-textarea {
  --color: var(--secondary-color);
  --highlight-color: var(--secondary-color);
}
</style>