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
$orange: #ee7b00;
$orange-pale: #ee7b0030;
$green: #55b535;
$blue: #009999;
$gray: #404040;
$pale: #f2f2f2;

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
            max-width: 1280px;
            margin: 0 auto;
            padding: 4px 24px;
            background-color: white;

            div.wrap-container {
                overflow-x: auto;
            }

            // table
            table {
                border-collapse: collapse;

                thead {
                    tr {
                        th {
                            background-color: $gray;
                            color: white;
                            padding: 2px 12px;
                            justify-content: center;
                        }
                    }
                }

                tbody {
                    tr {
                        border-top: 0.5px solid $gray;
                        border-bottom: 0.5px solid $gray;

                        th {
                            background-color: $pale;
                            padding: 2px 12px;
                            justify-content: center;
                        }

                        td {
                            background-color: white;
                            padding: 2px 12px;
                            justify-content: center;
                        }
                    }
                }

                &.no-wrap {
                    max-width: 100%;

                    td,
                    th {
                        white-space: nowrap;
                    }
                }

                .right {
                    text-align: right;
                }

                .center {
                    text-align: center;
                }

                .left {
                    text-align: left;
                }
            }

            //ul li
            ul {
                box-shadow: 0px 0px 3px silver;
                border: solid 1px whitesmoke;
                padding: 0.5em 1em 0.5em 2.3em;
                position: relative;
                background: #fafafa;
            }

            ul li {
                line-height: 1.5;
                padding: 0.5em 0;

            }

            // h
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin: 16px 0 8px 4px;
                padding: 0 0 0 8px;
            }


            h1 {
                font-size: 24px;
                font-weight: 600;
                color: $orange;
                border-top: 2px solid $orange;
                border-bottom: 2px solid $orange;
            }

            h2 {
                font-size: 20px;
                font-weight: 600;
                border-left: 4px solid $orange;
                background-color: $orange-pale;
            }

            h3 {
                font-size: 16px;
                font-weight: 600;
                border-left: 4px solid $orange;
                border-bottom: 1px solid $orange;
            }

            h4 {
                font-size: 16px;
                font-weight: 600;
                border-left: 4px solid $orange;
            }

            h5 {
                font-size: 16px;
                font-weight: 600;
            }

            h6 {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
}
</style>