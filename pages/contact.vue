<template>
    <TopTitle title="お問い合わせ" />
    <SectionComponent>
        <h2>お気軽にお問い合わせください。</h2>
        <p>各種連絡先をご用意しております。加入希望やプロダクトへのご質問・ご要望なども遠慮なくご連絡ください。</p>
        <p>なお、メールアドレスは[アットマーク]を@に置き換えてください。</p>
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
                    <th>X（Twitter）</th>
                    <td><a target="_blank" href="https://twitter.com/applii_crea">@applii_crea</a></td>
                </tr>
            </tbody>
        </table>
    </SectionComponent>

    <SectionComponent>
        <h2>お問い合わせフォーム</h2>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdDexNyzuBwMtwq5UH6iJ0n_v1moZbEJoJR7BlCK1i5H0i9aQ/viewform?embedded=true"
            width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…
        </iframe>
    </SectionComponent>

    <SectionComponent>
        <h2>各種リンク</h2>
        <p><a href="https://www.wakayama-u.ac.jp/" target="_blank">和歌山大学ホームページ</a></p>
        <p><a href="https://www.wakayama-u.ac.jp/crea/index.html" target="_blank">和歌山大学｜学生自主創造支援部門（クリエ）</a></p>
    </SectionComponent>

    <SectionComponent>
        <h2>アクセス</h2>
        <p>〒640-8441 和歌山県和歌山市栄谷930（和歌山大学の所在地です）</p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1165.7763638564174!2d135.15049863222418!3d34.26605733723412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b207cc09151b%3A0xac8894df98bc7583!2z5ZKM5q2M5bGx5aSn5a2m!5e0!3m2!1sja!2sjp!4v1722045545400!5m2!1sja!2sjp"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </SectionComponent>

</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue'
import TopTitle from '~/components/TopTitle.vue'

export default {
    name: 'ContactUs',
    components: {
        SectionComponent,
        TopTitle,
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