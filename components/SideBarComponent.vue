<template>
    <div id="sidebar-flex-container">
        <div id="main-contents" ref="contents">
            <slot></slot>
        </div>
        <div id="side-bar">
            <div id="table-of-contents" class="for-pc">
                <div class="mark for-pc">目次</div>
                <ul>
                    <li v-for="item in headings" :key="item.id">
                        <a :href="`#${item.id}`" :style="{ marginLeft: `${item.level * 8}px` }">{{ item.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            headings: [],
            is_table_of_contents_shown: false,
        };
    },
    mounted() {
        this.generateTableOfContents();
    },
    methods: {
        generateTableOfContents() {
            this.headings = [];
            const content = this.$refs.contents;
            const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                const level = parseInt(heading.tagName[1]) - 1; // h1 => 0, h2 => 1, h3 => 2
                this.headings.push({
                    id,
                    text: heading.textContent,
                    level,
                });
            });
        },
    },
};
</script>

<style scoped lang="scss">
$responsive: 700px;

// common
#sidebar-flex-container {
    display: flex;
}

#side-bar {
    padding: 16px 0 0 0;
}

.mark {
    background-color: #404040;
    color: #fff;
    padding: 0.5rem;
    text-align: center;
    font-size: 20px;
    box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.25);
}

#table-of-contents {
    background-color: #fafafa;

    ul {
        list-style: none;
        padding: 0.5rem;
        margin: 1rem 0;
    }

    li {
        padding: 0;
        margin: 0 0 0.25rem 0;

        a {
            color: #404040;
        }
    }

}

// smartphone
@media screen and (max-width: ($responsive - 1)) {
    .for-pc {
        display: none;
    }

    #sidebar-flex-container {
        flex-direction: column-reverse;
    }

    #table-of-contents {
        ul {
            max-height: 20vh;
            overflow-y: auto;
        }
    }
}

// computer
@media screen and (min-width: $responsive) {
    .for-mobile {
        display: none;
    }

    #sidebar-flex-container {
        flex-direction: row;
    }

    #side-bar {
        margin: 0 0 0 2rem;
        min-width: 320px;
    }

    #table-of-contents {
        margin-bottom: 60px;
        position: sticky;
        top: 60px;

        ul {
            max-height: calc(100vh - 240px);
            overflow-y: auto;
        }
    }

    #main-contents {
        flex-grow: 1;
    }
}
</style>
