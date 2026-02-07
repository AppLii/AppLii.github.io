<template>
    <TopTitle title="加入方法" />
    <SectionComponent>
        <h1>2026年度の新歓ページ</h1>
        <p>詳細な情報は2026年4月以降に公開します。</p>
        <p>しばらくお待ちください。</p>
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
    title: '2026年度の新歓ページ｜AppLii',
    meta: [
        { name: 'description', content: '2026年度の新歓についてご紹介します。' },
        { property: 'og:title', content: '2026年度の新歓ページ｜AppLii' },
        { property: 'og:description', content: '2026年度の新歓についてご紹介します。' },
    ],
})
</script>