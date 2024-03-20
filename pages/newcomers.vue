<template>
    <SideBarComponent>
        <h1>新入生歓迎会について</h1>
        <p>このページは現在準備中です！</p>
    </SideBarComponent>
</template>

<script>
import SideBarComponent from '~/components/SideBarComponent.vue';

export default {
    name: 'NewcomersPage',
    components: {
        SideBarComponent
    },
}
</script>

<script setup>
useHead({
    title: '新入生歓迎会について｜AppLii',
    meta: [
        { name: 'description', content: '新入生歓迎会についてご紹介します。' },
        { property: 'og:title', content: '新入生歓迎会について｜AppLii' },
        { property: 'og:description', content: '新入生歓迎会についてご紹介します。' },
    ],
})
</script>

<style scoped lang="scss"></style>