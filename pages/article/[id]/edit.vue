<template>
  <ion-page>
    <ion-content v-if="!pending && article">
      <div class="container">
        <DefaultHeader :default-back-href="'/article/' + route.params.id">
          <ion-button id="open-meta" class="secondary-button">Edit Meta</ion-button>
          <ion-button id="publish-button">Publish</ion-button>
        </DefaultHeader>
        <ion-textarea v-model="article.content" placeholder="Type the content here..." class="content" />
      </div>
    </ion-content>
    <ion-modal ref="metaModal" class="container" trigger="open-meta">
      <DefaultHeader title="Edit meta">
        <ion-button @click="closeModal">Save</ion-button>
      </DefaultHeader>
      <form id="meta-form">
        <ion-item class="input" lines="none">
          <ion-textarea v-model="article.title" placeholder="Title" type="text" />
        </ion-item>
        <ion-item class="input" lines="none">
          <ion-textarea v-model="article.shortDescription" placeholder="Short description" />
        </ion-item>
      </form>
    </ion-modal>
    <ion-modal ref="commentModal" class="container" trigger="publish-button">
      <DefaultHeader title="Submit edit" :hide-back-button="true" :default-back-href="'/article/' + route.params.id">
        <ion-button @click="submit">Publish</ion-button>
      </DefaultHeader>
      <ion-item class="input" lines="none">
        <ion-textarea v-model="comment" placeholder="Type what you've changed." />
      </ion-item>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";

const route = useRoute();
const ionRouter = useIonRouter();
const runtimeConfig = useRuntimeConfig();

const { data: article, pending, error } = await useFetch(`/article/${route.params.id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl
});
const comment = useState("comment", () => "");

const metaModal = ref();
const commentModal = ref();

useSeoMeta({title: "Edit article | " + runtimeConfig.public.siteName});

async function submit() {
  const editData = article.value as any;
  if (!editData || !editData.title || !editData.shortDescription || !editData.content)
    return;

  const formData = new FormData();
  formData.set("title", editData.title);
  formData.set("shortDescription", editData.shortDescription);
  formData.set("content", editData.content);
  formData.set("description", comment.value);

  const {data: submitData, error: submitError, pending: submitPending} = await useFetch(`/article/${route.params.id}/edit`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
    },
    credentials: "include",
    server: false,
    baseURL: runtimeConfig.public.apiBaseUrl,
    body: formData
  });

  if (error) {
    return;
  }

  ionRouter.push("/article/" + route.params.id);
}

function closeModal() {
  metaModal.value.$el.dismiss();
}
</script>

<style scoped lang="scss">
ion-textarea.content {
  --color: var(--secondary-color);
  --highlight-color: var(--secondary-color);
  height: 60vh;
}

#meta-form {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);

  padding-top: var(--small-spacing);
}
</style>