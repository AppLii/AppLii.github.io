<template>
    <h1>テーマカラー</h1>
    <p>私たちが資料作成やプロダクト開発に使用するテーマカラーを紹介します。クリックすると、クリップボードにコピーされます。</p>
    <div class="palettes">
        <div v-for="color in palette" class="palette" :key="color" :style="`background-color: ${color};`"
            @click="copyClipboardOnClicked(color)">
            <span>{{ color }}</span>
            <span style="color: white;">{{ color }}</span>
            <span :style="`color: ${color}; background-color: white;`">{{ color }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThemeColor',
    methods: {
        copyClipboardOnClicked: function (color) {
            navigator.clipboard.writeText(color)
            message.value = 'copied!' + color
        },
    }
}
</script>

<script setup>
const palette = [
    '#009999',
    '#55b535',
    '#ee7a00',
    '#404040',
    '#f2f2f2',
]
</script>

<style lang="scss" scoped>
.palettes {
    font-size: 28px;
    font-weight: 900;

    .palette {
        height: 100px;

        &:hover {
            cursor: pointer;
        }

        &:active {
            opacity: 0.5;
        }

        span {
            display: inline-block;
            margin: 8px;
            padding: 8px;
        }
    }
}
</style>
