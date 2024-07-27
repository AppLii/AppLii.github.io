<template>
    <TopTitle title="私たちについて" />
    <SectionComponent>
        <p>AppLiiは、和歌山大学学生自主創造支援部門（クリエ）に立ち上げられたプロジェクトです。私たちは、テクノロジーを活用して社会に貢献することを目指しています。</p>
        <p>私たちは、ソフトウェア開発の全工程に携わっています。企画から設計、コーディング、運用、そしてマーケティングまで、一貫して行うことで、実践的なスキルと経験を積んでいます。これらの活動は自主性を重んじており、メンバーが主体的に学習することが求められます。AppLiiでは、エンジニアとして必要な能力を身につけるために、日々精進しています。
        </p>
    </SectionComponent>

    <SectionComponent>
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
                    <td>2023年6月5日</td>
                </tr>
                <tr>
                    <th>活動方針</th>
                    <td>ソフトウェア開発によって技術を学び、社会課題の解決に取り組む。 </td>
                </tr>
                <tr>
                    <th>活動内容</th>
                    <td>
                        <div>参加必須の活動はありません。取り組みたい活動に参加してください。</div>
                        <ol>
                            <li>既存サービス（どうこむ）の保守・運用</li>
                            <li>新規サービスの企画・開発</li>
                            <li>ハッカソン・プログラミングコンテストなどへの参加</li>
                            <li>競技プログラミング（AtCoder）への参加・感想戦</li>
                            <li>技術勉強会・交流会</li>
                            <li>その他プログラミングに関すること</li>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th>メンバー数</th>
                    <td>
                        <div> 13名（2024年6月時点） </div>
                        <div style="margin-top: 0.75rem;">【学年別】</div>
                        <div>・1年生：8名</div>
                        <div>・2年生：3名</div>
                        <div>・3年生：2名</div>
                        <div>・4年生：0名</div>
                        <div style="margin-top: 0.75rem;">【学部別】</div>
                        <div>・システム工学部：11名</div>
                        <div>・経済学部：1名</div>
                        <div>・教育学部：0名</div>
                        <div>・観光学部：0名</div>
                        <div>・社会インフォマティクス学環：1名</div>

                    </td>
                </tr>
                <tr>
                    <th>所在地</th>
                    <td>
                        <div>〒640-8441</div>
                        <div>和歌山県和歌山市栄谷930</div>
                        <div>（和歌山大学の所在地です）</div>
                    </td>
                </tr>
                <tr>
                    <th>連絡先</th>
                    <td><a href="/contact">こちら</a>のページに連絡先や各種SNS、お問い合わせフォームなどを用意しております。</td>
                </tr>
            </tbody>
        </table>
    </SectionComponent>

</template>

<script>
import TopTitle from '~/components/TopTitle.vue';
import SectionComponent from '~/components/SectionComponent.vue';


export default {
    name: "AboutUs",
    components: {
        TopTitle,
        SectionComponent,
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
