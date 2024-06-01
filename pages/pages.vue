<template>
    <div>
        <h1>Redirecting...</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        window.location.href = '/';
    }
}
/*
    もともと「pages」というリポジトリでコードが管理されていました。
    そのため、URLはすべて「applii-wu.net/pages/{{path}}」でした。その名残でURLがここにアクセスされたら、リダイレクトするようにしています。
*/
</script>
