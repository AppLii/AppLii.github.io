# applii-homepage

[![Build and Commit Vue.js Project](https://github.com/AppLii/AppLii.github.io/actions/workflows/build-vue.yml/badge.svg)](https://github.com/AppLii/AppLii.github.io/actions/workflows/build-vue.yml) [![pages-build-deployment](https://github.com/AppLii/AppLii.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/AppLii/AppLii.github.io/actions/workflows/pages/pages-build-deployment)

[![Dependabot Updates](https://github.com/AppLii/AppLii.github.io/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/AppLii/AppLii.github.io/actions/workflows/dependabot/dependabot-updates)

## 概要

AppLii のホームページを GitHub Pages で公開するためのリポジトリです。Vue.js(Nuxt.js)と GitHub Pages を使用しています。

URL：<https://applii.github.io/>

## 環境構築の方法

### 1. Node.js のインストール

Node.js のインストールが必要です。（バージョンは v18 以上推奨）
`node -v`を実行して、以下のようにバージョンが表示されれば、インストールは成功しています。

```sh
node -v
> v20.12.0
```

### 2. プロジェクトのセットアップ

リポジトリをクローンし、ルートディレクトリにおいて`npm install`を実行することで、必要なライブラリがインストールされます。

実行例：

```sh
git clone https://github.com/AppLii/AppLii.github.io
cd AppLii.github.io
npm install
```

### 3. ローカルでの開発方法（ホットリロードの使い方）

このプロジェクトではホットリロード（コードの変更を直ちに反映できる機能）を使いながら開発を行えます。

1. `Main`ブランチ（もしくは作業したいブランチ）に切り替える
2. `npm run dev`を実行する

おそらく<http://localhost:3000/>をブラウザで開いて数十秒待てば、ホームページと同じものが表示されると思います。

これで、環境構築は完了です。

## 開発方法

### ページの追加方法

`/pages`ディレクトリに新しい Vue ファイルを作成すると、新しいページを追加できます。

例：

- `pages/index.vue` → `/` (ホームページ)
- `pages/about.vue` → `/about`
- `pages/blog/index.vue` → `/blog`

### ページデザインの変更方法

## デプロイの方法

1. 作成したコードは、必ず`Main`ブランチにコミット・プッシュしてください。
2. 変更を公開するには、`Main`ブランチから`Release`ブランチに対してプルリクエストを行ってください。
3. 自動的にビルド・デプロイが行われます。1 分程度かかります。

## その他

### ブランチについて

`Main`ブランチと`Release`ブランチが存在します。

- `Main`ブランチ：開発用のため、自由に使っても大丈夫です。
- `Release`ブランチ：GitHub Pages で公開するページのソースがこのブランチに保存されます。
- （細かく言うと、`Main`ブランチから`Release`ブランチにマージすると GitHub Action によって自動的にビルドされ、`Release`ブランチの`/docs`ディレクトリにソースファイルが作成される。このソースファイルが Pages で公開される。）
