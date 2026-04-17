<template>
  <TopTitle title="ミーティングルーム予約システムについて" />

  <SectionComponent>
    <h2>準備中。以下のサイトをご参照ください。</h2>
    <p>このページは準備中です。</p>
    <p>「ミーティングルーム予約システム」の詳細については以下のサイトにも掲載されていますので、ぜひご参照ください。</p>
    <p><a href="https://www.wakayama-u.ac.jp/crea/crea-project/project/2025_mission.html">2025年度クリエプロジェクト・ミッション一覧</a>にアクセスして、一番下に詳細のPDFが掲載されています。</p>
  </SectionComponent>
</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
import TopTitle from '~/components/TopTitle.vue';

export default {
  name: "AboutMeetingRoomReservationSystem",
  components: {
    SectionComponent,
    TopTitle,
  },
};
</script>

<script setup>
useHead({
  title: 'ミーティングルーム予約システムについて｜AppLii',
  meta: [
    { name: 'description', content: 'ミーティングルーム予約システムの説明ページ（近日公開）です。' },
    { property: 'og:title', content: 'ミーティングルーム予約システムについて｜AppLii' },
    { property: 'og:description', content: 'ミーティングルーム予約システムの説明ページ（近日公開）です。' },
  ],
})
</script>
