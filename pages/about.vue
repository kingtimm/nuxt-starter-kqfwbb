<script lang="ts" setup>
useSeoMeta({
  title: 'About page',
  description: 'This is the about page. It uses the same template.',
});
defineOgImage({
  component: 'MyTemplate',
  title: 'Custom template component',
  backgroundColor: 'bg-green-500',
});
</script>
<template>
  <h1>about page</h1>
  <div>Playground preview: available at /about/__og_image__</div>
  <iframe
    src="/about/__og_image__"
    style="width: 100%; border: none; height: 800px"
  >
  </iframe>
</template>
