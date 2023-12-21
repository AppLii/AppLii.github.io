<template>
    <div id="footer">
        <p class="footer_title">
            {{ appName }}
        </p>
        <p class="footer_links">
            <a class="footer_link" v-for="(link, index) in links" :href="link.url" :key="index">{{ link.text }}</a>
        </p>
        <p class="footer_copyright">
            Copyright {{ new Date().getFullYear() }} <br />
            和歌山大学クリエ ITものづくりプロジェクト AppLii
        </p>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'FooterComponent',
    props: {
        appName: String
    }
}
</script>

<script setup>
const links = ref([
    { url: "/", text: "MainPage" },
    { url: "/about-us", text: "AboutUs" },
    { url: "/about-cafe-app", text: "AboutCafeApp" },
    { url: "/contact", text: "Contact" },
    { url: "/about-dev", text: "Development" }
])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    width: 100%;
    background-color: gray;
    color: white;
}

p {
    margin: 0;
    padding: 4px;
}

#footer a {
    margin-right: 12px;
    color: white;
}

.footer_title {
    font-size: 16px;
}

.footer_links {
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
}

.footer_copyright {
    font-size: 12px;
}
</style>
