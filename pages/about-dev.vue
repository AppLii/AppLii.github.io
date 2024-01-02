<template>
    <h1 id="h-5">使用言語・開発環境について</h1>
    <p>私たちのチームは、最新の技術と効率的なツールを駆使して、高品質なソフトウェアの開発を目指しています。以下に、私たちの主な技術スタックを紹介します。</p>

    <h2>言語・フレームワークの使用割合</h2>
    <p>私たちのプロジェクトで利用している言語・フレームワークの割合は以下の通りです。（2023-12-23時点）</p>
    <p></p>

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
    <h4>Vue.jsについて</h4>
    <p>もっともコード行数の多い「Vue.js」は、Webフロントエンド開発（Webページの見た目を作ること）に用いられるものです。きめ細かいデザインの作成に</p>

    <h4>Pythonについて</h4>
    <p></p>

    <h2>その他</h2>
    <h3> プログラミング言語 </h3>
    <p><strong>Python：</strong>データ分析、機械学習、バックエンド開発に広く使用されています。</p>
    <p><strong>JavaScript：</strong>フロントエンド開発でのインタラクティブな要素の作成に不可欠です。</p>

    <h3> フロントエンド開発 </h3>
    <p><strong>Vue.js：</strong>ユーザーにやさしいインタラクティブなウェブインターフェースの構築に使用。</p>
    <p><strong>HTML, CSS, SCSS：</strong>ウェブページの構造とスタイルを定義します。</p>

    <h3> バックエンド開発 </h3>
    <p><strong>Flask, FastAPI：</strong>軽量でパワフルなAPIの開発に適しています。</p>
    <p><strong>Node.js：</strong>非同期イベント駆動型のアプリケーション開発に使用されます。</p>

    <h3> クラウド・サービス </h3>
    <p><strong>Microsoft Azure：</strong>高可用性のアプリケーションデプロイとサービスの実行に利用。</p>

    <h3> コンテナ技術 </h3>
    <p><strong>Docker：</strong>アプリケーションのデプロイメントとスケーリングを容易にします。</p>

    <h3> バージョン管理システム </h3>
    <p><strong>GitHub, GitHub Actions：</strong>コードの管理と自動化されたワークフローに使用。</p>

    <h3> オペレーティングシステム </h3>
    <p><strong>Linux：</strong>サーバーと開発環境の安定性に優れています。</p>

    <h3> ハードウェア </h3>
    <p><strong>Raspberry Pi：</strong>小規模なプロジェクトや教育用途に適しています。</p>

    <h3> インタラクティブ開発環境 </h3>
    <p><strong>Jupyter Notebook：</strong>データサイエンスと機械学習プロジェクトでのコードの実行と文書化に最適。</p>
</template>

<script>
export default {
    name: 'AboutDevelopment',
}
</script>

<script setup>
const usage = ref([
    { name: "Vue.js（.vue）", length: 2563, percentage: "34.7%" },
    { name: "Python（.py）", length: 1735, percentage: "23.5%" },
    { name: "Jupyter Notebook（.ipynb）", length: 724, percentage: "9.8%" },
    { name: "JavaScript（.js）", length: 590, percentage: "8.0%" },
    { name: "YAML（.yml）", length: 573, percentage: "7.7%" },
    { name: "TypeScript（.ts）", length: 257, percentage: "3.4%" },
    { name: "シェルスクリプト（.sh）", length: 151, percentage: "2.0%" },
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