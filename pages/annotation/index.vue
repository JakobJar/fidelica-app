<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <DefaultHeader title="Add annotation" default-back-href="/">
          <ion-button>Publish</ion-button>
        </DefaultHeader>
        <div>
          <p class="tertiary-text">Annotations represent context to content on the internet.</p>
          <p class="tertiary-text">
            If you think something requires additional context or needs to be fact-checked
            you help to create a better informed world by your contribution.
          </p>
          <p class="tertiary-text">Your annotation has to reach certain amount of upvotes before it will be shown
            publicly.</p>
          <form>
            <ion-item class="second-input" lines="none">
              <ion-input v-model="url" placeholder="URL" type="url"/>
            </ion-item>
            <ion-item class="second-input" lines="none">
              <ion-select v-model="rating" interface="popover" placeholder="Select rating">
                <ion-select-option value="true">True</ion-select-option>
                <ion-select-option value="false">False</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item class="second-input" lines="none">
              <ion-textarea v-model="content" placeholder="Type what you want to share here..."/>
            </ion-item>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";

const url = useState("url", () => "");
const rating = useState("rating", () => "");
const content = useState("content", () => "");
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: var(--normal-spacing);
  padding: var(--normal-spacing) 0;
}
</style>