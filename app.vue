<template>
  <div>
    <HeaderComponent />
    <BodyDesignerComponent>
      <Nuxt-Page />
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
    { name: "description", content: "和歌山大学クリエAppLiiのホームページ" },
    { name: "author", content: "AppLii" },
    { name: "copyright", content: "Copyright © AppLii All rights reserved." },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: "AppLii" },
    { property: "og:type", content: "website" },
    { property: "og:description", content: "和歌山大学クリエAppLiiのホームページ" },
    { property: "og:site_name", content: "AppLii" },
  ],
  script: [
    { src: "https://www.googletagmanager.com/gtag/js?id=" + GAID, async: true },
    { innerHTML: GAcode, type: "text/javascript", charset: "utf-8" },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    {
      href: "https://fonts.googleapis.com/css2?family=Klee+One&family=Noto+Sans+JP:wght@300&display=swap",
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
</style>
