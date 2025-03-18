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
        <p></p>

        <h4>Q. 活動頻度はどのくらいですか？</h4>
        <p></p>

        <h4>Q. 活動費用はどのくらいかかりますか？</h4>
        <p></p>

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