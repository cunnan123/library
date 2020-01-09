<template>
<div>
    <base-input v-model="username" :a="a" required placeholder="Enter your username"></base-input>
</div>
</template>

<script>
export default {
    name: 'demo1',
    data() {
        return {
            username: '',
            a:'aaa'
        }

    },
    methods: {

    },
    watch: {

    }

}
</script>

<style scoped>

</style>
