<template>
    <div id="header">
        <span class="title"><a href="/pages/">AppLii</a></span>
        <span class="links">
            <a v-for="(link, index) in links" :href="link.url" :key="index">{{ link.text }}</a>
        </span>
    </div>
    <div id="header_height_adjust"></div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'HeaderComponent',
}
</script>

<script setup>
const links = ref([
    { url: "/pages/about-us", text: "私たちについて" },
    { url: "/pages/about-cafe-app", text: "プロダクト" },
    { url: "/pages/about-dev", text: "開発環境" },
    { url: "/pages/contact", text: "お問い合わせ" },
])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$height: 32px;

.header_height_adjust {
    height: $height;
}

#header {
    background-color: #404040;
    color: white;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: $height;
    padding: 2px;
    overflow-x: auto;
    overflow-y: unset;
    white-space: nowrap;

    span.title {
        font-size: 20px;
        padding: 4px;
        margin: 0 8px;
    }

    span.links {
        a {
            padding: 4px 8px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.4);
            }
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
}

a {
    text-decoration: none;
    color: white;
}
</style>
