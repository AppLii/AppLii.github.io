<template>
    <div class="top-photo">
        <img src="/top-photo.jpg" alt="">
    </div>
    <div class="top-texts">
        <div class="project-name">AppLii</div>
        <div class="project-sub-name">ITものづくりプロジェクト AppLii（アプリー）</div>
        <div class="project-description">
            <p>「AppLii」は、プログラミングを中心とした活動を行う和歌山大学のクリエです。</p>
            <p>ソフトウェアの開発から運営までを自主的に行うことで、技術者としてのスキル獲得を目指しています。</p>
            <p>詳しい情報は、<a href="/pages/about-us">こちら</a>をご覧ください。</p>
        </div>
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

div.top-texts {
    padding: 0 0.5rem 0.5rem 0.5rem;

    p {
        margin: 0;
    }

    .project-name {
        font-size: 3rem;
        text-decoration: underline;
        text-decoration-line: underline;
        text-decoration-color: rgb(0, 153, 153);
        text-decoration-style: solid;
        text-decoration-thickness: 0.2rem;
    }

    .project-sub-name {
        background-color: #ececec;
        font-size: 1rem;
        border-radius: 0.4rem;
        margin: 0.1rem 0 0.1rem 0;
        padding: 0.1rem 0 0.1rem 0.6rem;
        display: inline-block;
    }

    .project-description {
        padding-top: 0.5rem;
        font-size: 1.2rem;
    }
}
</style>