<template>
    <div class="top-photo">
        <img src="/top-photo.jpg" alt="">
    </div>
    <div>
        <p class="title">AppLii</p>
        <p class="description">
            <span>ITものづくりプロジェクト AppLiiは、和歌山大学学生自主創造支援部門（クリエ）に立ち上げられたプロジェクトです。私たちは、テクノロジーを通じて社会にポジティブな影響を与えることを目指しています。</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
}
</script>

<style scoped lang="scss">
.top-photo {
    img {
        width: 100%;
    }
}

.title {
    padding: 0;
    margin: 0;
    font-size: 48px;
}

.description {
    font-size: 1rem;
}
</style>