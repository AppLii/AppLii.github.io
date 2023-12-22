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
import HeaderComponent from '~/components/Header.vue'
import FooterComponent from '~/components/Footer.vue'
import BodyDesignerComponent from '~/components/BodyDesigner.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BodyDesignerComponent
  }
}
</script>

<script setup>
useHead({
  title: 'AppLii',
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
    { name: 'description', content: '和歌山大学クリエAppLiiの公開情報' },
    { name: 'author', content: 'AppLii' },
    { property: 'og:title', content: 'AppLii' },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: '和歌山大学クリエAppLiiの公開情報' },
    { property: 'og:site_name', content: 'AppLii' },
    { rel: 'icon', href: '<%= BASE_URL %>pages/favicon.ico' },
    { name: 'google-site-verification', content: 'your-verification-code' }, // Add your verification code here
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      href: 'https://fonts.googleapis.com/css2?family=Klee+One&family=Noto+Sans+JP:wght@300&display=swap',
      rel: 'stylesheet',
    },
  ],
})
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