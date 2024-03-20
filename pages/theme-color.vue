<template>
    <SideBarComponent>
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
        <h1>h1タグ</h1>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <h2>h2タグ</h2>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <h3>h3タグ</h3>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <h4>h4タグ</h4>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <h5>h5タグ</h5>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <h6>h6タグ</h6>
        <p>この段落は、Webページの典型的なテキストコンテンツを示しています。ここでは、フォントのサイズ、行間、色などの視覚的な要素がどのようにテキストと相互作用するかを評価します。このテキストには、リンク、強調表示されたテキスト、または異なるスタイルのテキストが含まれる場合があります。
        </p>
        <p>テーブル</p>
        <table>
            <thead>
                <tr>
                    <th>色</th>
                    <th>色名</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="color in palette" :key="color">
                    <td :style="`background-color: ${color};`"></td>
                    <td>{{ color }}</td>
                </tr>
            </tbody>
        </table>
    </SideBarComponent>
</template>

<script>
import SideBarComponent from '~/components/SideBarComponent.vue';

export default {
    name: 'ThemeColor',
    components: {
        SideBarComponent
    },
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
useHead({
    title: 'テーマカラー',
    meta: [
        { name: 'description', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
    ],
})

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
