<template>
    <div>
        <HeaderComponent />
        <BodyDesignerComponent>
            <div id="container">
                <div id="text-box">
                    <div>404</div>
                    <div>お探しのページは見つかりませんでした。</div>
                </div>
            </div>
        </BodyDesignerComponent>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "~/components/Header.vue";
import FooterComponent from "~/components/Footer.vue";
import BodyDesignerComponent from "~/components/BodyDesigner.vue";

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        BodyDesignerComponent,
    },
};
</script>

<script setup>
const GAID = "G-KQ3ZSCDG3B";
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`;

useHead({
    title: "ホームページ｜AppLii", // ここに設定している項目は初期値で、各ページで正しいタイトルを上書き指定する必要があります。
    meta: [
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
        { name: "description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
        { name: "author", content: "AppLii" },
        { name: "copyright", content: "Copyright © AppLii All rights reserved." },
        { name: "robots", content: "index,follow" },

        // 標準のOGP設定
        { property: "og:title", content: "ホームページ｜AppLii" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://applii-wu.net/" },
        { property: "og:image", content: "https://raw.githubusercontent.com/AppLii/AppLii.github.io/release/docs/applii_ogp.png" },
        { property: "og:description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
        { property: "og:site_name", content: "ホームページ｜AppLii" },
        { property: "og:locale", content: "ja_JP" },

        // Twitterカード設定
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@applii_crea" },
        { name: "twitter:title", content: "ホームページ｜AppLii" },
        { name: "twitter:description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
        { name: "twitter:image", content: "https://raw.githubusercontent.com/AppLii/AppLii.github.io/release/docs/applii_ogp.png" },
    ],
    script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=" + GAID, async: true },
        { innerHTML: GAcode, type: "text/javascript", charset: "utf-8" },
    ],
    link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        {
            href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap",
            rel: "stylesheet",
        },
        { href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css", rel: "stylesheet" },
    ],
});
</script>

<style lang="scss">
html {
    padding: 0;
    margin: 0;

    body {
        padding: 0;
        margin: 0;
    }
}

#container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

#text-box {
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    text-align: center;
    font-size: 2rem;
}
</style>
