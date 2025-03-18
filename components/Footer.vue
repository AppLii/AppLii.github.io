<template>
  <div id="footer">
    <div id="footer-container">
      <div class="our-name">
        <div class="short-name">
          <span class="eng">AppLii</span>
          <span class="pronunciation">（アプリー）</span>
        </div>
        <div class="full-name"> 和歌山大学 クリエ「ITものづくりプロジェクト AppLii」 </div>
      </div>

      <div class="content-flex">
        <div>
          <h1>コンテンツ</h1>
          <ul>
            <li><a href="/">トップページ</a></li>
            <li><a href="/about-us">AppLiiとは？（団体概要）</a></li>
            <li><a href="/about-dev">開発環境について</a></li>
            <li><a href="/newcomers">加入方法について</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
        </div>
        <div>
          <h1>プロダクト・制作物</h1>
          <ul>
            <li><a href="/about-cafe-app">どうこむ｜和大の食堂混雑度アプリ</a></li>
          </ul>
        </div>
        <div>
          <h1>各種リンク</h1>
          <ul>
            <li><a target="_blank" href="https://github.com/AppLii">AppLii｜GitHubリポジトリ</a></li>
            <li><a target="_blank" href="https://twitter.com/applii_crea">AppLii｜Twitter（X）アカウント</a></li>
            <li><a target="_blank" href="https://www.instagram.com/applii.crea">AppLii｜Instagramアカウント</a> </li>
            <li><a target="_blank" href="https://www.wakayama-u.ac.jp/">和歌山大学｜ホームページ</a></li>
            <li><a target="_blank" href="https://www.wakayama-u.ac.jp/crea/index.html">和歌山大学｜学生自主創造支援部門（クリエ）</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-copyright">
        <p> このサイトの更新状況は、<a href="https://github.com/AppLii/AppLii.github.io/tree/release"
            target="_blank">GitHubリポジトリ</a>から確認できます。
        </p>
        <p> Copyright ©{{ new Date().getFullYear() }} AppLii, Wakayama Univ. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
#footer {
  background-color: #404040;
  width: 100%;
  color: white;
  font-weight: 300;

  #footer-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 12px;
  }

  .our-name,
  .content-flex,
  .footer-copyright {
    padding: 12px;
  }

  a {
    color: white;
  }

  .our-name {

    .short-name {
      .eng {
        font-size: 32px;
      }

      .pronunciation {
        font-size: 12px;
      }
    }

    .full-name {
      font-size: 16px;
    }
  }

  .content-flex {
    display: flex;
    flex-wrap: wrap;

    h1 {
      font-weight: 400;
      padding: 0 0 0 8px;
      margin: 16px 0 4px 0;
      border-left: 4px solid white;
      font-size: 20px;
    }

    div {
      margin: 0 32px 0 0;

      ul {
        margin: 0;

        li {
          padding: 2px 0;
        }

        :not(:hover) a {
          text-decoration: none;
        }

      }
    }
  }

  .footer-copyright {
    font-size: 12px;

    p {
      margin: 0;
      padding: 4px 0;
    }
  }
}
</style>
