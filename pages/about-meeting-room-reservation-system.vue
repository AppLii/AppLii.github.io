<template>
  <TopTitle title="ミーティングルーム予約システムについて" />

  <SectionComponent>
    <h2>説明ページを準備中です</h2>
    <p>このページは現在「近日公開」です。内容は今後の更新で順次公開します。</p>
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
