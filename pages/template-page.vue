<template>
    <div id="template-page">
        <h1>テンプレートページ</h1>
        <p>このページをコピーして、新しいページを作成できます。</p>
    </div>
</template>

<script>
export default {
    name: 'TemplatePage',
}
</script>

<script setup>
useHead({
    title: 'テンプレートページ',
    meta: [
        { name: 'description', content: 'ページの説明' },
        { property: 'og:title', content: 'ページタイトル' },
        { property: 'og:description', content: 'ページの説明' },
    ],
})
</script>

<style scoped lang="scss">
div#template-page {
    background-color: palegoldenrod;
    height: 10rem;
}
</style>