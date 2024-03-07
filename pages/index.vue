<template>
    <div class="top-photo">
        <img src="/top-photo.jpg" alt="">
    </div>
    <div>
        <p class="title">AppLii</p>
        <p class="description">
            <span>ITものづくりプロジェクト
                AppLiiは、和歌山大学学生自主創造支援部門（クリエ）に立ち上げられたプロジェクトです。私たちは、テクノロジーを通じて社会にポジティブな影響を与えることを目指しています。</span>
        </p>
    </div>
    <div>
        <h1>初めての方へ</h1>
        <p>私たちの活動について、以下のページでまとめております。ぜひご覧ください。</p>
        <ul>
            <li><a href="/pages/about-us">AppLiiについて</a></li>
            <li><a href="/pages/about-cafe-app">私たちが開発しているアプリについて</a></li>
            <li><a href="/pages/about-dev">私たちの開発環境について</a></li>
            <li><a href="/pages/contact">連絡先</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
}
</script>

<script setup>
useHead({
    title: 'ホームページ｜AppLii',
    meta: [
        { name: 'description', content: 'このホームページでは、和歌山大学クリエAppLiiについてご紹介します。' },
        { property: 'og:title', content: 'ホームページ｜AppLii' },
        { property: 'og:description', content: 'このホームページでは、和歌山大学クリエAppLiiについてご紹介します。' },
    ],
})
</script>

<style scoped lang="scss">
.top-photo {
    img {
        width: 100%;
    }
}

.title {
    padding: 0;
    margin: 0;
    font-size: 48px;
}

.description {
    font-size: 1rem;
}
</style>