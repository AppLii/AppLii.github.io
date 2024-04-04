<template>
    <div class="body-designer">
        <slot></slot>
    </div>
    <div class="information-icon">
        <div class="icon-body">
            <a href="https://discord.gg/GJUUr8cr8e" target="_blank">
                <span style="font-size: 1.2rem;">新歓Discordサーバーは</span>
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
                        border-top: 0.5px solid rgb(200, 200, 200);
                        border-bottom: 0.5px solid rgb(200, 200, 200);

                        th {
                            font-weight: 400;
                            background-color: $pale;
                            padding: 0.6rem 0.5rem;
                            justify-content: center;
                            white-space: nowrap;
                        }

                        td {
                            background-color: white;
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
                margin: 16px 0 8px 4px;
                padding: 0 0 0 8px;
            }


            h1 {
                font-size: 1.6rem;
                font-weight: 500;
                padding: 0 0 0 1.1rem;
                border: 0.2rem solid $main-color;
                position: relative;
            }

            h1::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                border-width: 1.1rem 1.1rem 0 0;
                border-style: solid;
                border-color: $main-color transparent transparent transparent;
            }

            h2 {
                font-size: 1.2rem;
                font-weight: 500;
                border-left: 4px solid $main-color;
                background-color: $main-color-pale;
            }

            h3 {
                font-size: 1.0rem;
                font-weight: 600;
                border-left: 4px solid $main-color;
                border-bottom: 1px solid $main-color;
            }

            h4 {
                font-size: 1.0rem;
                font-weight: 600;
                border-left: 4px solid $main-color;
            }

            h5 {
                font-size: 1.0rem;
                font-weight: 600;
            }

            h6 {
                font-size: 1.0rem;
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
                background-color: white;
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