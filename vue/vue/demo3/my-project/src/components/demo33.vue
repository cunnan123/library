<template>
<div>
    <div>demo33</div>
    <button @click="goBack">btn</button>
</div>
</template>

<script>
export default {
    name: 'demo33',
    created() {
        console.log(this.$route.params)
    },
    watch: {
        '$route'(to, from) {
            // 对路由变化作出响应...
            console.log('to',to)
            console.log('from',from)
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>
