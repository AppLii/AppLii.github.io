<template>
    <SideBarComponent>
        <h1>お問い合わせ</h1>
        <p>各種連絡先をご用意しております。お気軽にお問い合わせください。なお、メールアドレスは[アットマーク]を@に置き換えてください。</p>
        <table class="responsive-enabled">
            <tbody>
                <tr>
                    <th>メールアドレス</th>
                    <td>applii.crea[アットマーク]gmail.com</td>
                </tr>
                <tr>
                    <th>お問い合わせフォーム</th>
                    <td>
                        <a target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdDexNyzuBwMtwq5UH6iJ0n_v1moZbEJoJR7BlCK1i5H0i9aQ/viewform?usp=sf_link">
                            Google Forms</a>（下記のフォームと同じです）
                    </td>
                </tr>
                <tr>
                    <th>GitHub</th>
                    <td><a target="_blank" href="https://github.com/AppLii">@AppLii</a></td>
                </tr>
                <tr>
                    <th>Twitter（現X）</th>
                    <td><a target="_blank" href="https://twitter.com/applii_crea">@applii_crea</a></td>
                </tr>
            </tbody>
        </table>

        <h2>お問い合わせフォーム</h2>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdDexNyzuBwMtwq5UH6iJ0n_v1moZbEJoJR7BlCK1i5H0i9aQ/viewform?embedded=true"
            width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…
        </iframe>

        <h2>各種リンク</h2>
        <p><a href="https://www.wakayama-u.ac.jp/" target="_blank">和歌山大学ホームページ</a></p>
        <p><a href="https://www.wakayama-u.ac.jp/crea/index.html" target="_blank">和歌山大学｜学生自主創造支援部門（クリエ）</a></p>

        <h2>アクセス</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.07685631033138!2d135.15166317762043!3d34.26819432784917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b206e036e951%3A0x4e709cbebd02fee8!2z57eP5ZCI56CU56m25qOfKOWMl-S6jOWPt-mkqCk!5e0!3m2!1sja!2sjp!4v1703249124343!5m2!1sja!2sjp"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </SideBarComponent>
</template>

<script>
import SideBarComponent from '~/components/SideBarComponent.vue';

export default {
    name: 'ContactUs',
    components: {
        SideBarComponent
    },
}
</script>

<script setup>
useHead({
    title: 'お問い合わせ｜AppLii',
    meta: [
        { name: 'description', content: 'AppLiiのお問い合わせと所在地' },
        { property: 'og:title', content: 'お問い合わせ｜AppLii' },
        { property: 'og:description', content: 'AppLiiのお問い合わせと所在地' },
    ],
})
</script>