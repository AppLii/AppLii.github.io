<template>
  <TopTitle title="「どうこむ」について" />

  <SectionComponent>
    <h2>アプリの概要</h2>
    <p>
      このアプリは、大学食堂の混雑状況をスマホで確認できるようにするアプリです。食堂周辺に設置したIoT機器から、食堂の混雑状況を分析し、アプリ上でチェックすることが出来ます。
    </p>
    <ul>
      <li>食堂の待ち時間（推定値）を確認することが出来ます。</li>
      <li>食堂の待ち時間について、数分後の予測値も確認することが出来ます。</li>
      <li>
        食堂周辺にいるユーザーは、混雑状況を投票することが出来ます。
        また、他のユーザーはその投票状況を見ることが出来ます。
      </li>
    </ul>
  </SectionComponent>

  <SectionComponent>

    <h2>開発背景</h2>
    <p>
      大学食堂の混雑は、学生にとって深刻な問題です。混雑していると、食事の時間が長くかかったり、次の授業に間に合わなかったりする可能性があります。また、新型コロナウイルス感染拡大防止の観点からも、混雑を避けることは重要です。
    </p>
    <p>
      私たちは、この問題を解決するために、大学食堂の混雑状況をスマホで確認できるアプリを開発しました。このアプリを使えば、学生は混雑状況を事前に確認して、混雑していない時間帯に食堂に行くことができます。
    </p>
  </SectionComponent>

  <SectionComponent>
    <h2>リリース予定</h2>
    <p>未定です。現在データの計測を始め、混雑状況の推定・予測モデルの構築に取り組んでおります。</p>
  </SectionComponent>

  <SectionComponent>
    <h2>個人情報について</h2>

    <h3>私たちが扱うデータ・利用目的</h3>
    <p>
      私たちは、食堂内に設置したIoTデバイスを用いてBluetoothの識別情報を取得しています。具体的には「Bluetoothアドレス」やそれに付随する端末情報（デバイス名・製造企業など）を取得しています。これらのデータから食堂内の電子デバイスを計測し、ルールベースや機械学習によって滞在人数を推定しています。
    </p>

    <h3>個人を特定することはできますか？</h3>
    <p>
      私たちが扱うデータは、それ単体では特定の個人を識別することが出来ません。つまり、「どのBluetoothアドレスの端末が食堂内に存在するか」を取得することが出来ても「その端末の持ち主が誰か」「その端末がどのような内容の通信を行っているか」までは取得することが出来ないということになります。
    </p>
    <p>
      そして、Bluetoothアドレスは端末によって自動的に更新される仕組みとなっています。たとえば、iPhoneやiPadには「Bluetoothデバイスのアドレスを頻繁に変更することで一定期間内にBLEデバイスが追跡される可能性を低減する機能」が備えられていることが明記されています。（<a
        href="https://support.apple.com/ja-jp/guide/security/sec82597d97e/web">Apple社より</a>）このような機能により、Bluetoothアドレスを用いた個人の特定・追跡はより難しくなっています。
    </p>
    <h3>個人情報保護法や通信の秘密について</h3>
    <p>
      これらのデータは特定の個人を識別することができない情報であり、いかなる個人情報とも紐づかないため、個人情報保護法における個人情報には該当しません。
    </p>
    <p>
      データの取得時には、スマートフォンなどのBluetooth端末から発せられる問い合わせ（Inquiry）信号を受信しています。これは、それぞれの端末が通信を確立するための前提として発せられている情報のため、受信することは通信の秘密にあたらないと考えられます。
    </p>
  </SectionComponent>
</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
import TopTitle from '~/components/TopTitle.vue';

export default {
  name: "AboutCafeApp",
  components: {
    SectionComponent,
    TopTitle,
  },
};
</script>

<script setup>
useHead({
  title: '食堂混雑アプリ(仮)について｜AppLii',
  meta: [
    { name: 'description', content: '食堂混雑アプリ(仮)についてご紹介します。' },
    { property: 'og:title', content: '食堂混雑アプリ(仮)｜AppLii' },
    { property: 'og:description', content: '食堂混雑アプリ(仮)についてご紹介します' },
  ],
})
</script>