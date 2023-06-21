<template>
  <div class="annotation">
    <div class="annotation-content">
      <div class="annotation-header">
        <ion-icon :icon="ioniconsCheckmarkCircle" class="header-icon" />
        <div>
          <h1>True</h1>
          <p class="tertiary-text">This post is considered to be true.</p>
        </div>
      </div>
      <p class="secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dignissim felis, vel iaculis elit rutrum non. Ut a euismod purus. Donec id mattis tellus. Integer pharetra a nibh in placerat. Integer at vehicula massa. Nulla pulvinar lorem sit amet dolor tempor, et porta enim facilisis. Mauris non venenatis sapien.</p>
    </div>
    <div class="votes">
      <ion-icon :icon="ioniconsArrowUp" class="vote-icon"/>
      <span class="vote-count">1</span>
      <ion-icon :icon="ioniconsArrowDown" class="vote-icon"/>
    </div>
  </div>
</template>

<script setup lang="ts">

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

    &:active {
      color: var(--highlight-color);
    }
  }
}
</style>