<template>
  <div class="box">
    <h1>True</h1>
    <p>Lorem ipsum und so</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
  padding: var(--small-spacing);
  border-radius: var(--normal-border-radius);
  background: linear-gradient(45deg, var(--tertiary-color), var(--secondary-color));
  box-shadow: var(--secondary-color) var(--small-spacing);
}
</style>