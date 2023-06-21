<template>
  <div class="box">
    <div class="annotation-header">
      <ion-icon :icon="ioniconsCheckmarkCircle" class="header-icon" />
      <div>
        <h1>True</h1>
        <p class="tertiary-text">This post is considered to be true.</p>
      </div>
      <div class="votes">
        <ion-icon :icon="ioniconsArrowUp" class="vote-icon"/>
        <span>1</span>
        <ion-icon :icon="ioniconsArrowDown" class="vote-icon"/>
      </div>
    </div>
    <p class="secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dignissim felis, vel iaculis elit rutrum non. Ut a euismod purus. Donec id mattis tellus. Integer pharetra a nibh in placerat. Integer at vehicula massa. Nulla pulvinar lorem sit amet dolor tempor, et porta enim facilisis. Mauris non venenatis sapien.</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
  padding: var(--small-spacing) 0;
}

.annotation-header {
  display: flex;
  flex-direction: row;
  gap: var(--small-spacing);
  align-items: center;

  .header-icon {
    font-size: 3rem;
    color: var(--primary-color);
  }

  .votes {
    display: flex;
    flex-direction: column;
    gap: var(--tiny-spacing);
    align-items: center;
    color: var(--secondary-color);

    .vote-icon {
      font-size: 1rem;
    }
  }
}
</style>