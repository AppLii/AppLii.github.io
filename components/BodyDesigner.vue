<template>
    <div class="body-designer">
        <slot></slot>
    </div>
    <div class="information-icon">
        <div class="icon-body">
            <a href="/newcomers">
                <span style="font-size: 1.2rem;">新歓に関する情報は</span>
                <span style="font-size: 1.5rem;">こちらから！</span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BodyDesigner',
}
</script>

<style lang="scss">
$orange: rgb(238, 123, 0);
$orange-pale: rgba(238, 123, 0, 0.188);
$green: rgb(85, 181, 53);
$green-pale: rgba(85, 181, 53, 0.188);
$blue: rgb(0, 153, 153);
$blue-pale: rgba(0, 153, 153, 0.188);
$gray: rgb(64, 64, 64);
$gray-pale: rgba(64, 64, 64, 0.188);
$pale: rgb(242, 242, 242);
$pale-pale: rgba(242, 242, 242, 0.188);

$main-color: $blue;
$main-color-pale: $blue-pale;

html {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #e4e4e4;

    body {
        color: #404040;
        margin: 0;
        padding: 0;
        width: 100%;

        //font-family: 'Klee One', cursive;
        font-weight: 400;
        font-family: 'Noto Sans JP', sans-serif;

        .body-designer {
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
                            font-weight: 500;
                        }
                    }
                }

                tbody {
                    tr {
                        border-top: 0.5px solid hsl(0, 0%, 85%);
                        border-bottom: 0.5px solid hsl(0, 0%, 85%);

                        th {
                            font-weight: 400;
                            padding: 0.6rem 0.5rem;
                            text-align: left;
                            font-weight: 600;
                            white-space: nowrap;
                        }

                        td {
                            padding: 0.6rem 0.5rem;
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
                margin: 16px 0 8px 0;
                padding: 0 0 0 0;
            }


            h1 {
                font-size: 32px;
                font-weight: 500;
            }

            h2 {
                font-size: 28px;
                font-weight: 500;
            }

            h3 {
                font-size: 24px;
                font-weight: 600;
            }

            h4 {
                font-size: 20px;
                font-weight: 600;
            }

            h5 {
                font-size: 20px;
                font-weight: 600;
            }

            h6 {
                font-size: 20px;
                font-weight: 600;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    .body-designer {
        table.responsive-enabled {
            // スマホなど横幅が狭い端末において、テーブルの表示方法を変える
            width: 100%;

            th {
                display: block;
                text-align: left;
                font-weight: 500;
                font-size: 1.1rem;
                padding: 0.3rem 0 0.3rem 0.2rem;
                margin: 0 0 0 0;
            }

            td {
                display: block;
                text-align: left;
                padding: 0.3rem 0 0.3rem 0.5rem;
                margin: 0 0 0.8rem 0;
            }

            tr:nth-of-type(odd) {
                background-color: hsl(0, 0%, 98%);
            }
        }
    }
}

@media screen and (min-width: 501px) {
    .body-designer {
        table.responsive-enabled {
            th {
                background-color: hsl(0, 0%, 98%);
            }

            td {
                background-color: white;
            }
        }
    }
}

.information-icon {
    .icon-body {
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 0.5rem 1.5rem;
        margin: 1rem;
        border-radius: 1rem;
        font-weight: 550;
        background-image: linear-gradient(160deg, rgb(230, 110, 0), rgb(230, 230, 40));
        box-shadow: 0.4rem 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: 0.3s;

        span {
            color: white;
            white-space: nowrap;
            text-decoration: none;
        }

        a {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
        }

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>