<template>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQ3ZSCDG3B"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-KQ3ZSCDG3B");
  </script>

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
useHead({
  title: "AppLii",
  meta: [
    { charset: "utf-8" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { name: "viewport", content: "width=device-width,initial-scale=1.0" },
    { name: "description", content: "和歌山大学クリエAppLiiの公開情報" },
    { name: "author", content: "AppLii" },
    { property: "og:title", content: "AppLii" },
    { property: "og:type", content: "website" },
    { property: "og:description", content: "和歌山大学クリエAppLiiの公開情報" },
    { property: "og:site_name", content: "AppLii" },
    { name: "google-site-verification", content: "your-verification-code" }, // Add your verification code here
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
