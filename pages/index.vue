<template>
    <div class="movie-container">
        <video autoplay loop muted id="top-movie">
            <source src="/index/top-movie.mp4" type="video/mp4">
            お使いのブラウザでは、動画を再生できません。
        </video>
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
    <div>
        <!--
            <h1>サービス</h1>
            <p>私たちが開発したソフトウェア</p>
            <h1>特徴</h1>
            <p>私たちの特徴</p>
            <h1>ニュース</h1>
        -->
            <h1>初めての方へ</h1>
        <p>私たちの活動について、以下のページでまとめております。ぜひご覧ください。</p>
        <ul>
            <li><a href="/pages/about-us">AppLiiについて</a></li>
            <li><a href="/pages/about-cafe-app">私たちが開発しているアプリについて</a></li>
            <li><a href="/pages/about-dev">私たちの開発環境について</a></li>
            <li><a href="/pages/contact">連絡先</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
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
    height: 0;
    padding-bottom: 56.25%; // 16:9

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
            font-size: clamp(1.5rem, 8vw, 8rem);
        }

        span.small {
            font-size: clamp(1rem, 5vw, 5rem);
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
</style>