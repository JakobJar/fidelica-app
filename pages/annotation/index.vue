<template>
  <ion-page>
    <ion-content>
      <div class="container">
        <MainHeader title="Add annotation" default-back-href="/">
          <ion-button @click="submit">Publish</ion-button>
        </MainHeader>
        <div>
          <p class="tertiary-text">Annotations represent context to content on the internet.</p>
          <p class="tertiary-text">
            If you think something requires additional context or needs to be fact-checked
            you can help to create a better informed world by your contribution.
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
const runtimeConfig = useRuntimeConfig();
const ionRouter = useIonRouter();
const route = useRoute();

const url = useState("url", () => route.query.url as string || "");
const rating = useState("rating", () => "");
const content = useState("content", () => "");

const submit = async () => {
  if (url.value === "" || rating.value === "" || content.value === "")
    return;

  const formData = new FormData();
  formData.set("postURL", url.value);
  formData.set("rating", rating.value);
  formData.set("comment", content.value);
  // TODO: Add related articles

  const { data: result, error } = await useFetch(`/annotation/`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
    },
    body: formData,
    credentials: "include",
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl
  });

  if (error.value) {
    console.error(error.value);
    return;
  }

  if (result.value) {
    console.log(result.value);
    ionRouter.push(`/annotation/${result.value.id}`);
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: var(--normal-spacing);
  padding: var(--normal-spacing) 0;
}
</style>