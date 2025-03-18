<template>
    <TopTitle title="加入方法" />
    <SectionComponent>
        <h1>2025年度の新歓ページ</h1>
        <p>2025年度の新歓に関する情報は、2025年4月1日に公開します。</p>
    </SectionComponent>
</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
import TopTitle from '~/components/TopTitle.vue';

export default {
    name: 'NewcomersPage',
    components: {
        SectionComponent,
        TopTitle,
    },
}
</script>

<script setup>
useHead({
    title: '2025年度の新歓ページ｜AppLii',
    meta: [
        { name: 'description', content: '2025年度の新歓についてご紹介します。' },
        { property: 'og:title', content: '2025年度の新歓ページ｜AppLii' },
        { property: 'og:description', content: '2025年度の新歓についてご紹介します。' },
    ],
})
</script>

<style scoped lang="scss"></style>