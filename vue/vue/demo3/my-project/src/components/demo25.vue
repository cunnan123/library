<template>
<div>
    <text-document v-bind:title="title" v-on:update:title="title = $event"></text-document>
    <text-document v-bind:title.sync="title"></text-document>
    <text-document v-bind:title.sync="title2"></text-document>
</div>
</template>

<script>
export default {
    name: 'demo25',
    data() {
        return {
            title: 'title',
            title2: 'title2',
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
