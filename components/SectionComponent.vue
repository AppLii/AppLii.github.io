<template>
    <div class="section">
        <div class="width-adjust">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionComponent',
}
</script>

<style lang="scss">
.section {
    padding: 1.0rem 1.5rem;
    margin: 0;

    .width-adjust {
        max-width: 1200px;
        margin: 0 auto;
    }
}

.section:nth-of-type(odd) {
    background-color: hsl(0, 0%, 97%);
}

.section:nth-of-type(even) {
    background-color: hsl(0, 0%, 100%);
}
</style>