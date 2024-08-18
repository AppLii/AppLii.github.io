<template>
  <div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <BodyDesignerComponent>
        <Nuxt-Page />
      </BodyDesignerComponent>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import HeaderComponent from "~/components/Header.vue";
import FooterComponent from "~/components/Footer.vue";
import BodyDesignerComponent from "~/components/BodyDesigner.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BodyDesignerComponent,
  },
};
</script>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const GAID = "G-KQ3ZSCDG3B";
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`;

useHead({
  title: "ホームページ｜AppLii", // ここに設定している項目は初期値で、各ページで正しいタイトルを上書き指定する必要があります。
  meta: [
    { charset: "utf-8" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { name: "viewport", content: "width=device-width,initial-scale=1.0" },
    { name: "description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
    { name: "keywords", content: "和歌山大学, AppLii, プログラミング, ソフトウェア開発, IT技術" },
    { name: "author", content: "AppLii" },
    { name: "copyright", content: "Copyright © AppLii All rights reserved." },
    { name: "robots", content: "index,follow" },

    // 標準のOGP設定
    { property: "og:title", content: "ホームページ｜AppLii" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://applii-wu.net/" },
    { property: "og:image", content: "https://raw.githubusercontent.com/AppLii/AppLii.github.io/release/docs/applii_ogp.png" },
    { property: "og:description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
    { property: "og:site_name", content: "ホームページ｜AppLii" },
    { property: "og:locale", content: "ja_JP" },

    // Twitterカード設定
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@applii_crea" },
    { name: "twitter:title", content: "ホームページ｜AppLii" },
    { name: "twitter:description", content: "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。" },
    { name: "twitter:image", content: "https://raw.githubusercontent.com/AppLii/AppLii.github.io/release/docs/applii_ogp.png" },
  ],
  script: [
    { src: "https://www.googletagmanager.com/gtag/js?id=" + GAID, async: true },
    { innerHTML: GAcode, type: "text/javascript", charset: "utf-8" },
  ],
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    {
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap",
      rel: "stylesheet",
      media: "print",
      onload: "this.media='all'"
    },
    {
      href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
      rel: "stylesheet",
      media: "print",
      onload: "this.media='all'"
    },
  ],
});


const route = useRoute()

const baseData = ref({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ITものづくりプロジェクトAppLii",
  "description": "和歌山大学のクリエ「ITものづくりプロジェクトAppLii」ホームページ。プログラミングに関連した活動を行っています。活動状況やプロダクトに関する情報を公開しています。",
  "url": "https://applii-wu.net/",
  "foundingDate": "2023",
  "memberOf": {
    "@type": "CollegeOrUniversity",
    "name": "和歌山大学"
  },
  "sameAs": [
    "https://twitter.com/applii_crea",
    "https://www.instagram.com/applii.crea/"
  ],
  "areaServed": {
    "@type": "City",
    "name": "和歌山市"
  },
  "knowsAbout": [
    "プログラミング",
    "ソフトウェア開発",
    "IT技術"
  ]
})

const breadcrumbList = computed(() => {
  const pathSegments = route.path.split('/').filter(segment => segment !== '')
  let currentPath = ''

  return pathSegments.map((segment, index) => {
    currentPath += `/${segment}`
    return {
      "@type": "ListItem",
      "position": index + 1,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1),
      "item": `https://applii-wu.net${currentPath}`
    }
  })
})

const structuredData = computed(() => [
  {
    ...baseData.value,
    breadcrumb: {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホーム",
          "item": "https://applii-wu.net/"
        },
        ...breadcrumbList.value
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "メインナビゲーション",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "ホーム",
        "url": "https://applii-wu.net/"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "加入方法",
        "url": "https://applii-wu.net/newcomers/"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "私たちについて",
        "url": "https://applii-wu.net/about-us/"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "開発環境について",
        "url": "https://applii-wu.net/about-dev/"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "お問い合わせ",
        "url": "https://applii-wu.net/contact/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ITものづくりプロジェクトAppLii",
    "url": "https://applii-wu.net/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://applii-wu.net/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ITものづくりプロジェクトAppLiiとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITものづくりプロジェクトAppLiiは、2023年6月に設立された和歌山大学のクリエプロジェクトです。プログラミング技術を学び、社会や身近な問題を解決するスキルを身につけることを目的としています。"
        }
      },
      {
        "@type": "Question",
        "name": "主な活動内容は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主な活動内容はソフトウェア開発です。現在はWebアプリの開発に力を入れています。また、競技プログラミングへの参加や自主学習も行っています。"
        }
      },
      {
        "@type": "Question",
        "name": "活動頻度はどのくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "主に2つの定期活動があります。2週間ごとの技術交流会・会議と、1週間ごとの競技プログラミング参加です。ただし、必須の活動はなく、興味のある活動に自由に参加できます。"
        }
      },
      {
        "@type": "Question",
        "name": "活動費用はかかりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "年会費や参加費はありません。ただし、クリエプロジェクトに参加するには学研災付帯賠償責任保険（年間340円）への加入が必要です。また、個人で利用するツールによっては追加の費用が発生する場合があります。"
        }
      },
      {
        "@type": "Question",
        "name": "活動で身につけられるスキルは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "プログラミング技術の向上はもちろん、チームでの共同開発、プロジェクト管理、効果的なコミュニケーション能力など、ソフトウェアエンジニアとして必要な幅広いスキルを身につけることができます。"
        }
      },
      {
        "@type": "Question",
        "name": "AppLiiに参加するにはどうすれば良いですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "和歌山大学の学生であれば、プログラミング経験の有無に関わらず参加できます。学研災付帯賠償責任保険への加入が必要です。興味のある方は、お問い合わせページからご連絡ください。"
        }
      }
    ]
  }
])

onMounted(() => {
  const script = document.createElement('script')
  script.setAttribute('type', 'application/ld+json')
  script.textContent = JSON.stringify(structuredData.value)
  document.head.appendChild(script)
})
</script>


<style lang="scss">
html {
  padding: 0;
  margin: 0;

  body {
    padding: 0;
    margin: 0;
  }
}
</style>
