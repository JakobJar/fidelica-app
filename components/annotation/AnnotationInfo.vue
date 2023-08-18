<template>
  <div class="annotation">
    <div class="annotation-content">
      <div class="annotation-header">
        <ion-icon :icon="ratingInfo.icon" class="header-icon"/>
        <div>
          <h1>{{ ratingInfo.title }}</h1>
          <p class="tertiary-text">{{ ratingInfo.description }}</p>
        </div>
      </div>
      <p class="secondary-text">{{ annotation.note }}</p>
      <div v-if="reporter" class="profile">
        <img class="avatar" :src="reporter?.avatarUrl || '/img/no-user.svg'" alt="Profile avatar">
        <span class="tertiary-text">posted by <span :router-link="`/profile/${reporter?.id}`">{{ reporter?.name }}</span></span>
      </div>
    </div>
    <div class="votes">
      <ion-icon @click="upvote" :icon="ioniconsArrowUp" :class="'vote-icon' + (hasUpvoted() ? ' voted' : '')"/>
      <span class="vote-count">{{ getVotes() }}</span>
      <ion-icon @click="downvote" :icon="ioniconsArrowDown" :class="'vote-icon' + (hasDownvoted() ? ' voted' : '')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Annotation, {getAnnotationRatingInfo} from "~/types/annotation";

const auth = useAuth();

const props = defineProps<{
  annotation: Annotation
}>();

const annotation = useState("annotation", () => props.annotation);
const reporter = props.annotation.reporter;
const ratingInfo = getAnnotationRatingInfo(props.annotation.rating);

const getVotes = (): number => props.annotation.upvoters.length - props.annotation.downvoters.length;

const vote = async (type: "upvote" | "downvote") => {
  if (!auth.hasCurrentUser() && !(await auth.validate()))
    return;

  const user = auth.getCurrentUser();

  let remove: boolean = false;
  if (annotation.value[`${type}rs`].indexOf(user!.id) !== -1)
    remove = true;

  const response = await useAPI(`/annotation/id/${annotation.value.id}/${remove ? "remove-vote" : type}`, {
    method: "POST",
    server: false
  });

  if (!response.ok && (response.status !== 401 || !(await auth.validate())))
    return;

  if (!remove) {
    annotation.value[`${type}rs`].push(user!.id);
    const oppositeType = type === "upvote" ? "downvote" : "upvote";
    annotation.value[`${oppositeType}rs`] = annotation.value[`${oppositeType}rs`].filter(value => value !== user!.id);
  } else {
    annotation.value[`${type}rs`] = annotation.value[`${type}rs`].filter(value => value !== user!.id);
  }
}

const upvote = async () => await vote("upvote");
const hasUpvoted = () => annotation.value.upvoters.indexOf(auth.getCurrentUser()?.id || "") !== -1;
const downvote = async () => await vote("downvote");
const hasDownvoted = () => annotation.value.downvoters.indexOf(auth.getCurrentUser()?.id || "") !== -1;
</script>

<style scoped lang="scss">
.annotation {
  display: flex;
  align-items: center;
  gap: var(--small-spacing);
  padding: var(--small-spacing) 0;
}

.annotation-content {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
}

.annotation-header {
  display: flex;
  flex-direction: row;
  gap: var(--small-spacing);
  align-items: center;

  .header-icon {
    font-size: 3.5rem;
    color: var(--primary-color);
  }
}

.votes {
  display: flex;
  flex-direction: column;
  gap: var(--tiny-spacing);
  align-items: center;
  color: var(--secondary-color);
  margin-left: auto;

  .vote-count {
    font-size: 1.25rem;
  }

  .vote-icon {
    font-size: 1.5rem;

    &:hover {
      color: var(--primary-color);
    }

    &:active, &.voted {
      color: var(--highlight-color);
    }
  }
}

.profile {
  display: flex;
  gap: var(--small-spacing);
  flex-direction: row;
  align-items: center;

  .avatar {
    width: 1.5rem;
    height: 1.5rem;
    border: var(--tertiary-color) 2px solid;
    border-radius: 50%;
  }
}
</style>
