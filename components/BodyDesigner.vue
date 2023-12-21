<template>
    <div class="body-designer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BodyDesigner',
}
</script>

<style lang="scss">
html {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #e4e4e4;

    body {
        margin: 0;
        padding: 0;
        width: 100%;

        font-family: 'Klee One', cursive;
        font-family: 'Noto Sans JP', sans-serif;

        .body-designer {
            max-width: 720px;
            margin: 0 auto;
            padding: 32px 24px;
            background-color: white;

            table {
                tr {
                    th {
                        text-align: left;
                    }
                }
            }

            // h
            h1,
            h2,
            h3 {
                margin: 16px 0 8px 4px;
                padding: 0 0 0 8px;
                border-left: 8px solid #e98c00;
            }


            h1 {
                font-size: 24px;
                font-weight: 600;
            }

            h2 {
                font-size: 20px;
                font-weight: 600;
            }

            h3 {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
}
</style>