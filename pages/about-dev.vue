<template>
    <h1 id="h-5">使用言語・開発環境について</h1>
    <p>私たちのチームは、最新の技術と効率的なツールを駆使して、高品質なソフトウェアの開発を目指しています。</p>

    <h2>言語・フレームワークの使用割合</h2>
    <p>私たちが活用している言語・フレームワークについて、コード行数の観点からご紹介します。
    </p>
    <p>このコード行数は、文字通り、プログラムを構成するコードが書かれている行の数を指します。コード行数は、プログラムの大きさや複雑さを測る一つの基準として使われることがあります。例えば、あるプログラムが100行のコードで構成されている場合、それは比較的小さく、単純なプログラムであると言えるかもしれません。一方で、数千行やそれ以上のコードを含むプログラムは、より大きく、複雑な機能を持つことが多いです。
    </p>
    <p>私たちのプロジェクトで利用している言語・フレームワークの割合は以下の通りです。（2023-12-23時点）</p>

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

    <div v-for="(row, index) in usage" :key="index">
        <h4>{{ row.name }} {{ row.percentage }}</h4>
        <p>{{ row.desc }}</p>
    </div>

    <h2>その他</h2>
    <h3> クラウド・サービス </h3>
    <p><strong>Microsoft Azure：</strong>クラウドサーバーとして利用しています。たくさんのサービスが提供されていますが、このプロジェクトではApp ServiceやFunctions、Cosmos
        DBなどを用いることが多いです。
    <p>クラウドサーバーには、Amazon Web Services（AWS）やGoogle Cloud Platform（GCP）などの類似サービスがありますが、大学生協に対応していること・学生特典が充実していることからMicrosoft
        Azureを選定しています。</p>
    </p>

    <h3> バージョン管理システム </h3>
    <p><strong>GitHub：</strong>開発したコードはすべてGitHubで管理しています。</p>
    <p><strong>GitHub Actions：</strong>デプロイやアップデートの自動化に利用しています。</p>

    <h3> オペレーティングシステム </h3>
    <p><strong>Linux：</strong>クラウドサーバーやIoTデバイスは、すべてLinuxで動作しています。</p>

    <h3> ハードウェア </h3>
    <p><strong>Raspberry Pi：</strong>IoTデバイスとして利用しています。</p>

    <h3> コミュニケーションツール </h3>
    <p><strong>Discord：</strong>ほぼすべての連絡をDiscordで行っています。</p>

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
</template>

<script>
export default {
    name: 'AboutDevelopment',
}
</script>

<script setup>
const usage = ref([
    {
        name: "Vue.js（.vue）",
        length: "2,563",
        percentage: "34.7%",
        desc: "Webフロントエンド（Webページの見える部分を作るとき）に利用しています。きめ細やかなデザインを行うためにHTMLやCSSなどを記述することから、全体に占める割合が多くなりがちです。",
    },
    {
        name: "Python（.py）",
        length: "1,735",
        percentage: "23.5%",
        desc: "あらゆるバックエンドシステム（いわばアプリを動かすために必要な裏のシステム）の開発に利用しています。このようなシステムを開発するのであれば、Python以外にもJavaScript（Node.js）やC#（.NET）などの選択肢があります。しかし、Pythonは学習が比較的容易であり、エコシステム（データ分析やWebバックエンドのライブラリなど）が充実していることから頻繁に利用しています。",
    },
    {
        name: "Jupyter Notebook（.ipynb）",
        length: "724",
        percentage: "9.8%",
        desc: "Jupyter Notebookは、Pythonでデータ分析を行うときに利用しています。私たちが開発しているアプリでは、IoTデバイスから取得したデータを機械学習・ルールベースによって分析しています。その分析手法を検証するときに非常に便利なツールです。",
    },
    {
        name: "JavaScript（.js）",
        length: "590",
        percentage: "8.0%",
        desc: "Webフロントエンドの開発で利用しています。",
    },
    {
        name: "YAML（.yml）",
        length: "573",
        percentage: "7.7%",
        desc: "YAMLファイルは、サーバーへの自動デプロイを行うために利用します。デプロイとは、作成したコードをクラウドサーバーに反映させることです。私たちのプロジェクトでは、このようなファイルを作成し、コードが更新されたタイミング（具体的にはPull Request）でデプロイを実行するようにしています。",
    },
    {
        name: "TypeScript（.ts）",
        length: "257",
        percentage: "3.4%",
        desc: "Webフロントエンドの開発でビルド時に利用しています。",
    },
    {
        name: "シェルスクリプト（.sh）",
        length: "151",
        percentage: "2.0%",
        desc: "シェルスクリプトは、サーバーやIoTデバイスを動かすために利用します。たとえば、自動メンテナンスなどの作業では複数の処理を行うため、スクリプトファイルにまとめて記述しています。",
    },
])
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