<template>
    <h1>{{ title }}</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti modi neque est quos ut voluptas? A consequuntur
        illum porro autem accusamus accusantium assumenda perferendis optio, magnam dignissimos eaque possimus cumque.</p>
    <p>
        <NuxtLink to="/">back home

        </NuxtLink>
    </p>
</template>

<script setup>
const title = "Exciting Title!"
defineOgImage({
    component: 'MyTemplate',
    title,
})
</script>