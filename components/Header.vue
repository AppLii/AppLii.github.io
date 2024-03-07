<template>
    <header class="header hamburger-menu">
        <a href="/pages/" class="header-logo">AppLii</a>
        <input type="checkbox" name="hamburger" id="hamburger" class="hamburger-menu-input" />
        <label for="hamburger" class="hamburger-menu-bg"></label>
        <ul class="header-list hamburger-menu-list">
            <li class="header-list-item" v-for="link in links">
                <a :href="link.url" class="header-list-link">{{ link.text }}</a>
            </li>
        </ul>
        <label for="hamburger" class="hamburger-menu-button">
            <span class="hamburger-menu-button-mark"></span>
            <span class="hamburger-menu-button-mark"></span>
            <span class="hamburger-menu-button-mark"></span>
        </label>
    </header>
    <div class="header-size"></div>
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
    { url: "/pages/newcomers", text: "新入生歓迎会" },
    { url: "/pages/about-cafe-app", text: "プロダクト" },
    { url: "/pages/about-dev", text: "開発環境" },
    { url: "/pages/contact", text: "お問い合わせ" },
])
</script>

<style scoped lang="scss">
$responsive-breakpoint: 700px; // ヘッダーのコンテンツを変えたら、この値も再検討すること
$header-height: 3rem;
$font-color: white;
$background-color: #404040;

.header-size {
    height: $header-height;
}

.header {
    position: fixed;
    top: 0;
    z-index: 1;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    align-items: center;
    background-color: $background-color;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    max-height: $header-height;
    width: 100%;

    .header-logo {
        color: $font-color;
        min-width: 80px;
        text-decoration: none;
    }

    .header-list {
        box-sizing: border-box;
        display: flex;
        margin: 0;
        padding: 0 16px;
    }

    .header-list-item {
        list-style: none;
    }

    .header-list-link {
        color: $font-color;
        display: block;
        margin-right: 20px;
        text-decoration: none;
        padding: 10px 0px;
    }

    .header-list-link:hover {
        filter: opacity(0.6);
    }

    .hamburger-menu {
        position: relative;
    }

    .hamburger-menu-input {
        display: none;
    }

    .hamburger-menu-bg {
        background-color: $font-color;
        cursor: pointer;
        display: none;
        height: 100vh;
        left: 0;
        opacity: 0.4;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }

    #hamburger:checked~.hamburger-menu-bg {
        display: block;
    }

    .hamburger-menu-button-mark {
        background-color: $font-color;
        display: block;
        height: 1px;
        transition: 0.3s;
        width: 20px;
    }
}

@media screen and (min-width: $responsive-breakpoint) {
    .hamburger-menu-button {
        display: none;
    }
}

@media screen and (max-width: $responsive-breakpoint) {

    .hamburger-menu-list {
        background-color: $background-color;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        left: 0;
        padding: 2rem;
        position: absolute;
        transform: translateX(-100%);
        transition: 0.3s;
        top: 100%;
        width: 100%;
    }

    #hamburger:checked~.hamburger-menu-list {
        transform: translateX(0%);
        transition: 0.3s;
    }

    .hamburger-menu-button {
        align-items: center;
        appearance: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 32px;
        justify-content: center;
        width: 32px;
    }

    #hamburger:checked~.hamburger-menu-button .hamburger-menu-button-mark:nth-of-type(1) {
        transform: translate(2px, 1px) rotate(45deg);
        transform-origin: 0%;
    }

    #hamburger:checked~.hamburger-menu-button .hamburger-menu-button-mark:nth-of-type(2) {
        opacity: 0;
    }

    #hamburger:checked~.hamburger-menu-button .hamburger-menu-button-mark:nth-of-type(3) {
        transform: translate(2px, 3px) rotate(-45deg);
        transform-origin: 0%;
    }
}
</style>
