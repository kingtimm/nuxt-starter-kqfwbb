<script setup lang="ts">
const props = defineProps({
  title: String,
  backgroundColor: String,
});
</script>
<template>
  <img src="/ogimage.png" class="w-full h-full" style="object-fit: cover;" />
  <div class="absolute w-full h-full flex text-white justify-center p-4">
    <h1>{{ title }}</h1>
    <p class="flex-grow flex-col justify-center w-1/3">"The H1 above me should have the styles in MyTemplate.vue included"
    </p>
  </div>
</template>


<style>
/* This is not used in the H1 above. */
h1 {
  color: silver;
  text-decoration: dotted;
  padding: 4px;
  font-size: 70px;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
</style>