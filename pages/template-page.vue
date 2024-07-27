<template>
    <TopTitle title="テンプレートページ" />
    <SectionComponent>
        <h1>見出し - h1</h1>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <h2>見出し - h2</h2>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <h3>見出し - h3</h3>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <h4>見出し - h4</h4>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
    </SectionComponent>
    <SectionComponent>
        <h1>見出し - h1</h1>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
    </SectionComponent>
    <SectionComponent>
        <h1>見出し - h1</h1>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
        <p>ここにテキストが入ります。これはp要素です。</p>
    </SectionComponent>
</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
import TopTitle from '~/components/TopTitle.vue';

export default {
    name: 'TemplatePage',
    components: {
        SectionComponent,
        TopTitle,
    },
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