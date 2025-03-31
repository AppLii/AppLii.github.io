<template>
    <TopTitle title="加入方法" />
    <SectionComponent>
        <h2>今年度の加入方法について</h2>
        <a class="newcomers-event-button" href="/newcomers/2025">2025年度の新歓ページ</a>
        <p>今年度の加入方法・新歓に関する情報は上記ページからご確認ください！</p>
        <p>※ 2025年度の新歓に関する情報は、2025年4月1日に公開します。</p>
    </SectionComponent>

    <SectionComponent>
        <h2>Q&A</h2>

        <h4>Q. プログラミング経験が無いのですが、加入できますか？</h4>
        <p>もちろん加入できます！私たちは経験者だけでなく、これからプログラミングを始めたい初心者の方も歓迎しています。</p>
        <p>ただし、プログラミングは自ら手を動かして学ぶ姿勢が大切です。分からないことは先輩メンバーに質問できる環境はありますが、基本的な学習は自主的に進めていただくことになります。「自分でやってみる→つまずいたら相談する→また挑戦する」というサイクルを大切にしています。
        </p>
        <p>プログラミングに興味があり、自分から学ぶ意欲のある方であれば、経験の有無に関わらずぜひお待ちしています！</p>

        <h4>Q. 活動費用はどのくらいかかりますか？</h4>
        <p>基本的に年会費や参加費は一切かかりません。</p>
        <p>ただし、AppLiiなどのクリエプロジェクトに参加する場合は、学研災付帯賠償責任保険（通称：学研賠、年間340円）への加入が必要です。</p>

        <h4>Q. AppLiiからメールが届かないのですが…</h4>
        <p>お問い合わせは3日以内にお答えいたします。3日以内に返答がない場合は、大変お手数をおかけしますが再度ご連絡いただけると幸いです。</p>
        <p>また、迷惑メールボックスなどもあわせてご確認いただきますようお願い申し上げます。</p>

    </SectionComponent>

    <SectionComponent>
        <h2>過去の新歓情報</h2>
        <p>各年の新歓情報を見ることができます。</p>
        <ul>
            <li> <a href="/newcomers/2024">2024年度の新歓ページ</a> </li>
        </ul>
    </SectionComponent>
</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
import TopTitle from '~/components/TopTitle.vue';

export default {
    name: 'NewcomersPage',
    components: {
        SectionComponent,
        TopTitle,
    },
}
</script>

<script setup>
useHead({
    title: '新入生歓迎会について｜AppLii',
    meta: [
        { name: 'description', content: '新入生歓迎会についてご紹介します。' },
        { property: 'og:title', content: '新入生歓迎会について｜AppLii' },
        { property: 'og:description', content: '新入生歓迎会についてご紹介します。' },
    ],
})
</script>

<style scoped lang="scss">
.newcomers-event-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-image: linear-gradient(160deg, rgb(230, 110, 0), rgb(230, 230, 40));
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
    font-size: 1.4rem;
    box-shadow: 0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 0.4rem 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.3);
    }
}
</style>