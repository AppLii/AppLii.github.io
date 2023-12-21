<template>
  <Header></Header>
  <BodyDesigner>
    <router-view></router-view>
  </BodyDesigner>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BodyDesigner from './components/BodyDesigner.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BodyDesigner
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #e4e4e4;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;

  font-family: 'Klee One', cursive;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
