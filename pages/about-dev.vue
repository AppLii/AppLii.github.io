<template>
    <TopTitle title="開発環境について" />
    <SectionComponent>
        <p>私たちのチームは、最新の技術と効率的なツールを駆使して、高品質なソフトウェアの開発を目指しています。</p>

        <h2>言語・フレームワークの使用割合</h2>
        <p>私たちが活用している言語・フレームワークについて、コード行数の観点からご紹介します。
        </p>
        <p>このコード行数は、文字通り、プログラムを構成するコードが書かれている行の数を指します。コード行数は、プログラムの大きさや複雑さを測る一つの基準として使われることがあります。例えば、あるプログラムが100行のコードで構成されている場合、それは比較的小さく、単純なプログラムであると言えるかもしれません。一方で、数千行やそれ以上のコードを含むプログラムは、より大きく、複雑な機能を持つことが多いです。
        </p>
        <p>私たちのプロジェクトで利用している言語・フレームワークの割合は以下の通りです。（2026-04-09時点）</p>

        <div class="wrap-container">
            <table class="no-wrap">
                <thead>
                    <tr>
                        <th>言語・フレームワーク</th>
                        <th>全コードの行数</th>
                        <th>コード行数の割合</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in usage" :key="index">
                        <th class="left">{{ row.name }}</th>
                        <td class="right">{{ row.length }} 行</td>
                        <td class="left percentage-bar">
                            <span class="bar" :style="`width: ${row.percentage};`"></span>
                            <span> {{ row.percentage }} </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </SectionComponent>

    <SectionComponent>
        <div v-for="(row, index) in usage" :key="index">
            <h4>{{ row.name }} {{ row.percentage }}</h4>
            <p>{{ row.desc }}</p>
        </div>
    </SectionComponent>

    <SectionComponent>
        <h2>その他</h2>
        <h3> サーバー環境 </h3>
        <p><strong>Microsoft Azure：</strong>クラウドサーバーとして利用しています。このプロジェクトではApp
            ServiceやFunctions、Cosmos
            DBなどを用いるプロダクトがあります。</p>
        <p>クラウドサーバーには、Amazon Web Services（AWS）やGoogle Cloud
            Platform（GCP）などの類似サービスがありますが、大学生協に対応していること・学生特典が充実していることからMicrosoft
            Azureを選定しています。</p>
		<p><strong>オンプレサーバー：</strong>大学に存在するオンプレサーバを利用しているプロダクトも存在します。</p>

        <h3> バージョン管理システム </h3>
        <p><strong>GitHub：</strong>開発したコードはすべてGitHubで管理しています。</p>
        <p><strong>GitHub Actions：</strong>デプロイやアップデートの自動化に利用しています。</p>

        <h3> オペレーティングシステム </h3>
        <p><strong>Linux：</strong>クラウドサーバーやIoTデバイスは、すべてLinuxで動作しています。</p>

        <h3> ハードウェア </h3>
        <p><strong>Raspberry Pi：</strong>IoTデバイスとして利用しています。</p>

        <h3> コミュニケーションツール </h3>
        <p><strong>Discord：</strong>ほぼすべての連絡をDiscordで行っています。</p>
    </SectionComponent>

    <SectionComponent>
        <h3>開発効率化</h3>
		    <p>
            <strong>ChatGPT（GPT-4）：</strong>
            コードの作成や技術的な選定、不具合の解消などを効率化するために利用しています。ChatGPT Plusを利用する場合、費用は個人負担となります。
            </p>
        <p>
            <strong>GitHub Copilot：</strong>
            コードの作成を効率化するために利用しています。ChatGPTに比べると、短い範囲でのコード作成に役立ちます。GitHubの学生アカウントを取得することで、無料で利用することが出来ます。
        </p>
        <p>
            <strong>Codeium：</strong>
            GitHub Copilotと同様にコードの作成を効率化するために利用しています。こちらは完全に無料であり、実験的に併用しています。
        </p>
		    <p>
				    <strong>ChatGPT-5.3-Codex / Jnnie / Gemini-CLI：</strong>
				コードの作成、技術選定、不具合の解消を効率化するために併用しています。タスクに応じて使い分けることで、実装速度と検証の精度を高めています。これらもまた、有料版の費用は個人負担となります。
        </p>
    </SectionComponent>

</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue'
import TopTitle from '~/components/TopTitle.vue'

export default {
    name: 'AboutDevelopment',
    components: {
        SectionComponent,
        TopTitle,
    },
}
</script>

<script setup>
const usage = ref([{
    'desc': 'Webフロントエンド（Webページの見える部分を作るとき）の実装で利用しています。主に、画面の操作処理、APIとの連携、入力値の検証、表示状態の制御など、ユーザーが直接触れる機能を実現するために採用しています。',
    'length': '7,256',
    'name': 'JavaScript（.js）',
    'percentage': '22.8%'
},
{
    'desc': 'サーバーサイドの実装で利用しています。APIや業務ロジックなど、バックエンドの中核を担っています。',
    'length': '6,302',
    'name': 'PHP（.php）',
    'percentage': '19.8%'
},
{
    'desc': 'Webフロントエンドに利用しています。きめ細やかなデザインを行うためにHTMLやCSSなどを記述することから、全体に占める割合が多くなりがちです。',
    'length': '4,611',
    'name': 'Vue.js（.vue）',
    'percentage': '14.5%'
},
{
    'desc': 'YAMLファイルは、サーバーへの自動デプロイを行うために利用します。デプロイとは、作成したコードをクラウドサーバーに反映させることです。私たちのプロジェクトでは、このようなファイルを作成し、コードが更新されたタイミング（具体的にはPull Request）でデプロイを実行するようにしています。',
    'length': '3,740',
    'name': 'YAML（.yml）',
    'percentage': '11.8%'
},
{
    'desc': 'Webフロントエンドの画面デザインやレイアウト調整等に利用しています。',
    'length': '3,608',
    'name': 'CSS（.css）',
    'percentage': '11.4%'
},
{
    'desc': 'あらゆるバックエンドシステム（いわばアプリを動かすために必要な裏のシステム）の開発に利用しています。このようなシステムを開発するのであれば、Python以外にもJavaScript（Node.js）やC#（.NET）などの選択肢があります。しかし、Pythonは学習が比較的容易であり、エコシステム（データ分析やWebバックエンドのライブラリなど）が充実していることから頻繁に利用しています。',
    'length': '3,027',
    'name': 'Python（.py）',
    'percentage': '9.5%'
},
{
    'desc': 'Webフロントエンドの画面構造の記述等に利用しています。',
    'length': '1,438',
    'name': 'HTML（.html）',
    'percentage': '4.5%'
},
{
    'desc': 'Jupyter Notebookは、Pythonでデータ分析を行うときに利用しています。私たちが開発しているアプリでは、IoTデバイスから取得したデータを機械学習・ルールベースによって分析しています。その分析手法を検証するときに非常に便利なツールです。',
    'length': '951',
    'name': 'Jupyter Notebook（.ipynb）',
    'percentage': '3.0%'
},
{
    'desc': 'サーバーサイドでのデータベース定義やクエリの記述等に利用しています。',
    'length': '373',
    'name': 'SQL（.sql）',
    'percentage': '1.2%'
},
{
    'desc': 'Webフロントエンドの開発でビルド時に利用しています。',
    'length': '262',
    'name': 'TypeScript（.ts）',
    'percentage': '0.8%'
},
{
    'desc': 'シェルスクリプトは、サーバーやIoTデバイスを動かすために利用します。たとえば、自動メンテナンスなどの作業では複数の処理を行うため、スクリプトファイルにまとめて記述しています。',
    'length': '193',
    'name': 'シェルスクリプト（.sh）',
    'percentage': '0.6%'
}])

useHead({
    title: '開発環境について｜AppLii',
    meta: [
        { name: 'description', content: 'AppLiiの開発環境や使用言語についてご紹介します。' },
        { property: 'og:title', content: '開発環境について｜AppLii' },
        { property: 'og:description', content: 'AppLiiの開発環境や使用言語についてご紹介します。' },
    ],
})
</script>

<style lang="scss" scoped>
.percentage-bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .bar {
        background-color: #009999;
        display: inline-block;
        height: 20px;
        margin: 0 8px 0 0;
        padding: 0;
    }
}
</style>
