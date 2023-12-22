<template>
    <div id="footer">
        <p class="footer_copyright">
            Copyright {{ new Date().getFullYear() }} <br />
            和歌山大学 学生自主創造支援部門（クリエ） ITものづくりプロジェクト AppLii
        </p>
        <p>このサイトの更新状況は、<a href="https://github.com/AppLii/pages" target="_blank">GitHubリポジトリ</a>から確認できます。</p>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'FooterComponent',
}
</script>

<style scoped>
#footer {
    width: 100%;
    background-color: #404040;
    color: white;
}

p {
    margin: 0;
    padding: 4px;
}

#footer a {
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
