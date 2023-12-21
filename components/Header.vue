<template>
    <div id="header">
        <span class="title">和歌山大学クリエAppLii｜</span>
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
    { url: "/pages/about-cafe-app", text: "アプリについて" },
    { url: "/pages/about-dev", text: "開発環境について" },
    { url: "/pages/contact", text: "お問い合わせ" },
])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$height: 28px;

.header_height_adjust {
    height: $height;
}

#header {
    background-color: #555555;
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

    div.title {
        padding: 4px;
        margin: 0 4px;
    }

    span.links {
        a {
            color: white;
            text-decoration: none;
            padding: 4px;

            &:hover {
                background-color: rgba(255, 255, 255, 0.4);
            }
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
