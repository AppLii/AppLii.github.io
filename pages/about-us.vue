<template>
    <SideBarComponent>
        <div id="sidebar-content"></div>
        <h1>私たちについて</h1>
        <p>AppLiiは、和歌山大学学生自主創造支援部門（クリエ）に立ち上げられたプロジェクトです。私たちは、テクノロジーを活用して社会に貢献することを目指しています。</p>
        <p>私たちは、ソフトウェア開発の全工程に携わっています。企画から設計、コーディング、運用、そしてマーケティングまで、一貫して行うことで、実践的なスキルと経験を積んでいます。これらの活動は自主性を重んじており、メンバーが主体的に学習することが求められます。AppLiiでは、エンジニアとして必要な能力を身につけるために、日々精進しています。
        </p>
        <h2>団体情報</h2>
        <table class="responsive-enabled">
            <tbody>
                <tr>
                    <th>団体名</th>
                    <td>ITものづくりプロジェクト AppLii</td>
                </tr>
                <tr>
                    <th>（読み方）</th>
                    <td>アイティーものづくりプロジェクト アプリー</td>
                </tr>
                <tr>
                    <th>団体の種類</th>
                    <td>和歌山大学 学生自主創造支援部門（クリエ）に立ち上げられたプロジェクト</td>
                </tr>
                <tr>
                    <th>設立</th>
                    <td>2023年6月</td>
                </tr>
                <tr>
                    <th>活動内容</th>
                    <td>ソフトウェア開発によって技術を学び、社会課題の解決に取り組む。</td>
                </tr>
                <tr>
                    <th>メンバー数</th>
                    <td>2名（2024年3月時点）</td>
                </tr>
                <tr>
                    <th>所在地</th>
                    <td>〒640-8441 和歌山県和歌山市栄谷930<br>（和歌山大学の所在地です）</td>
                </tr>
                <tr>
                    <th>連絡先</th>
                    <td><a href="/pages/contact">こちら</a>のページに連絡先や各種SNS、お問い合わせフォームなどを用意しております。</td>
                </tr>
            </tbody>
        </table>
    </SideBarComponent>
</template>

<script>
import SideBarComponent from '~/components/SideBarComponent.vue';


export default {
    name: "AboutUs",
    components: {
        SideBarComponent
    },
}
</script>

<script setup>
useHead({
    title: '私たちについて｜AppLii',
    meta: [
        { name: 'description', content: '私たちAppLiiについてご紹介します。' },
        { property: 'og:title', content: '私たちについて｜AppLii' },
        { property: 'og:description', content: '私たちAppLiiについてご紹介します。' },
    ],
})
</script>
