<template>
    <link rel="preload" href="/index/top-movie.mp4" as="video" type="video/mp4">
    <div class="movie-container">
        <div class="video-container">
            <video preload="metadata" autoplay loop muted id="top-movie">
                <source src="/index/top-movie.mp4" type="video/mp4">
                お使いのブラウザでは、動画を再生できません。
            </video>
        </div>
        <div class="movie-text">
            <div>
                <span class="large">ソフトウェア</span>
                <span class="small">で</span>
            </div>
            <div>
                <span class="large">社会課題</span>
                <span class="small" style="margin-right: 0.25rem;">を</span>
                <span class="large">解決</span>
                <span class="small">へ</span>
            </div>
        </div>
    </div>

    <SectionComponent>
        <div class="top-texts">
            <div class="project-name">
                <span class="text">AppLii</span>
                <div class="underline"></div>
            </div>
            <div class="project-sub-name">
                <span>ITものづくり</span>
                <span>プロジェクト</span>
                <span>AppLii</span>
                <span>（アプリー）</span>
            </div>
            <div class="project-description">
                <p>「AppLii」は、プログラミングを中心とした活動を行う和歌山大学のクリエです。</p>
                <p>ソフトウェアの開発から運営までを自主的に行うことで、技術者としてのスキル獲得を目指しています。</p>
            </div>
        </div>
    </SectionComponent>

    <SectionComponent>
        <h2>はじめましての方へ</h2>
        <div class="box-a-container">
            <a class="box-a" href="/newcomers">
                <div>
                    <HumanGreeting size="60px" />
                </div>
                <div>AppLiiについて知る</div>

            </a>
            <a class="box-a" href="/about-us">
                <div>
                    <Information size="60px" />
                </div>
                <div>団体概要</div>

            </a>
            <a class="box-a" href="/contact">
                <div>
                    <EmailFast size="60px" />
                </div>
                <div>お問い合わせ</div>


            </a>
        </div>
    </SectionComponent>

    <SectionComponent>
        <h2>AppLiiが開発・運営するサービス</h2>
        <p>私たちは、さまざまなサービスを開発・運営しています。主に学内向けに提供しているサービスをこちらで紹介します。</p>
        <div class="box-a-container">
            <a href="/about-cafe-app" class="box-a" target="_blank">
                <div>
                    <Coffee size="60px" />
                </div>
                <div>「どうこむ」<br />和大の食堂混雑度アプリ</div>
            </a>
            <a href="https://applii-wu.net/find-free-classroom/" class="box-a" target="_blank">
                <div>
                    <CalendarMonth size="60px" />
                </div>
                <div>空き教室検索システム</div>
            </a>
        </div>

        <!--
            <h1>サービス</h1>
            <p>私たちが開発したソフトウェア</p>
            <h1>特徴</h1>
            <p>私たちの特徴</p>
            <h1>ニュース</h1>
        -->
    </SectionComponent>

    <SectionComponent>
        <h2>ニュース</h2>
        <table class="responsive-enabled news-table">
            <tbody>
                <!--
                <tr>
                    <th>2024-00-00</th>
                    <td>
                        <a target="_blank" href="https">text</a>
                    </td>
                </tr>
                -->
                <tr>
                    <th>2024-11-30</th>
                    <td>
                        <a target="_blank"
                            href="https://www.tokushima-u.ac.jp/docs/58875.html">徳島大学イノベーションプラザ開所20周年記念式典・講演会</a>の学生プロジェクト発表会において、AppLiiの活動について発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-11-17</th>
                    <td>
                        <a target="_blank"
                            href="https://www.wakayama-u.ac.jp/news/2024111800111/">和歌山大学大学祭（和大祭）</a>において出展を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-11-04</th>
                    <td>
                        <a target="_blank"
                            href="https://www.wakayama-u.ac.jp/crea/news/2024102100060/">青少年のための科学の祭典2024おもしろ科学まつり</a>において出展を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-09-24</th>
                    <td>
                        <a target="_blank" href="https://www.pref.wakayama.lg.jp/prefg/020400/d00218019.html">
                            和歌山大学の学生団体と企業・自治体の交流イベント「NexGen Synergy」</a>
                        において『和歌山大の食堂混雑度アプリ「どうこむ」を支える技術』の発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-07-02</th>
                    <td>
                        「大学混雑度提供アプリ対応施設の拡大と予測モデルの構築」が2024クリエプロジェクトミッションとして採択されました。
                    </td>
                </tr>
                <tr>
                    <th>2024-06-17</th>
                    <td>
                        <a target="_blank"
                            href="https://www.wakayama-u.ac.jp/crea/news/2024060700012/">2024年度クリエプロジェクト・ミッション審査会</a>
                        において「大学混雑度提供アプリ対応施設の拡大と予測モデルの構築」
                        に関する発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-04-01</th>
                    <td>
                        <a href="/newcomers">新入生歓迎会に関する情報</a>を掲載しました！
                    </td>
                </tr>
                <tr>
                    <th>2024-03-04</th>
                    <td>
                        <a target="_blank"
                            href="https://www.wakayama-u.ac.jp/crea/news/2024020600055/">2023年度クリエプロジェクト・ミッション成果報告会</a>
                        において
                        <a target="_blank" href="/about-cafe-app">「大学混雑度提供アプリ」</a>
                        に関する発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2024-01-15</th>
                    <td>学生会館内にBluetooth受信機器を設置し、混雑状況の分析に関する実験を始めました。</td>
                </tr>
                <tr>
                    <th>2023-12-17</th>
                    <td>
                        <a target="_blank" href="https://www.wakayama-u.ac.jp/crea/news/2023121100037/">2023年度学生自主プロジェクト
                            合同発表会</a>
                        において
                        <a target="_blank" href="/about-cafe-app">「大学混雑度提供アプリ」</a>
                        に関する発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2023-12-13</th>
                    <td>AppLiiのホームページを作成しました。</td>
                </tr>
                <tr>
                    <th>2023-07-11</th>
                    <td>
                        「大学混雑度提供アプリ」
                        の開発が2023年度クリエプロジェクト・ミッションに採択されました！
                    </td>
                </tr>
                <tr>
                    <th>2023-06-19</th>
                    <td>
                        <a target="_blank"
                            href="https://www.wakayama-u.ac.jp/crea/news/2023060900026/">2023年度クリエプロジェクト・ミッション審査会</a>
                        において
                        <a target="_blank" href="/about-cafe-app">「大学混雑度提供アプリ」</a>
                        に関する発表を行いました。
                    </td>
                </tr>
                <tr>
                    <th>2023-06-05</th>
                    <td>「ITものづくりプロジェクト AppLii」が立ち上げられました。</td>
                </tr>
            </tbody>
        </table>
    </SectionComponent>

</template>

<script>
import SectionComponent from '~/components/SectionComponent.vue';
// MEMO: https://pictogrammers.com/library/mdi/ これ見ながら良いアイコンを探す
import HumanGreeting from 'vue-material-design-icons/HumanGreeting.vue';
import EmailFast from "vue-material-design-icons/EmailFast.vue";
import Information from "vue-material-design-icons/Information.vue";
import Coffee from "vue-material-design-icons/Coffee.vue";
import CalendarMonth from "vue-material-design-icons/CalendarMonth.vue";

export default {
    name: 'MainPage',
    components: {
        SectionComponent,
        HumanGreeting,
        EmailFast,
        Information,
        Coffee,
        CalendarMonth,
    },
    mounted() {
        const topMovie = document.getElementById('top-movie');
        if (topMovie) {
            topMovie.playbackRate = 0.75;
        }
    }
}
</script>

<script setup>
useHead({
    title: 'ホームページ｜AppLii',
    meta: [
        { name: 'description', content: 'このホームページでは、和歌山大学クリエAppLiiについてご紹介します。' },
        { property: 'og:title', content: 'ホームページ｜AppLii' },
        { property: 'og:description', content: 'このホームページでは、和歌山大学クリエAppLiiについてご紹介します。' },
    ],
})
</script>

<style scoped lang="scss">
.movie-container {
    position: relative;
    width: 100%;
    height: 400px;
    max-height: 40vh;

    .video-container {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 400px;
        max-height: 40vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        video {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            object-fit: cover;
        }
    }

    .movie-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        color: white;
        background-color: rgba($color: #404040, $alpha: 0.75);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 300;

        div {
            white-space: nowrap;
        }

        span.large {
            font-size: clamp(1.5rem, 8vw, 5rem);
        }

        span.small {
            font-size: clamp(1rem, 5vw, 3rem);
        }
    }
}

div.top-texts {
    padding: 0 0.5rem 0.5rem 0.5rem;

    p {
        margin: 0;
    }

    .project-name {
        position: relative;
        font-weight: 300;

        span.text {
            font-size: 3rem;
            z-index: 999;
            position: relative;
            white-space: nowrap;
        }

        div.underline {
            position: relative;
            top: -1.4rem;
            left: 0;
            width: 136px;
            height: 0.75rem;
            border-radius: 0.25rem;
            background-color: rgba(0, 153, 153, 0.25);
            animation: widthChange 1.2s ease-in-out forwards;

            @keyframes widthChange {
                from {
                    width: 0;
                }

                to {
                    width: 136px;
                }
            }
        }
    }

    .project-sub-name {
        background-color: rgba(64, 64, 64, 0);
        font-size: 1rem;
        border-radius: 0.4rem;
        margin: 0.1rem 0 0.1rem 0;
        padding: 0.1rem 0 0.1rem 0.6rem;
        display: inline-block;
        animation: backgroundChange 1.2s ease-in-out 1.2s forwards;

        @keyframes backgroundChange {
            from {
                background-color: rgba(64, 64, 64, 0);
            }

            to {
                background-color: rgba(64, 64, 64, 0.15);
            }

        }

        span {
            white-space: nowrap;
        }
    }

    .project-description {
        padding-top: 0.5rem;
        font-size: 1.2rem;
    }
}

.news-table {
    display: block;
    width: 100%;
    max-height: 70vh;
    overflow-y: auto;

    a {
        color: #404040;
    }
}

.box-a-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;

    .box-a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        border: 0.15rem solid #404040;
        color: #404040;
        border-radius: 0.25rem;
        margin: 0.5rem;
        padding: 0.5rem;
        width: 20rem;
        min-height: 120px;
        text-align: center;
        font-size: 1.5rem;
        white-space: nowrap;
    }

    .box-a:hover {
        animation: hover-box-a 0.1s ease-in-out forwards;

        @keyframes hover-box-a {
            0% {
                background-color: white;
                color: #404040;
            }

            100% {
                color: white;
                background-color: #404040;
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .box-a-container {
        flex-wrap: wrap;

        .box-a {
            width: 100%;
        }
    }
}
</style>