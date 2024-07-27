<template>
    <div class="top-title-box">
        <div class="top-title">{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
.top-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    color: white;
    background: radial-gradient(circle at 84.6% 77.8%, rgb(86, 89, 218) 0%, rgb(95, 208, 248) 90%);
    box-shadow: inset 4px 4px 16px 12px rgba(0, 0, 0, 0.1);
}

.top-title {
    font-size: 32px;
    font-weight: 600;
    max-width: 1200px;
    margin: 1rem;
}
</style>