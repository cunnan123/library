<template>
<div>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <p>{{ foo }}</p>

    <!-- 这里的 `foo` 不会更新！ -->
    <button v-on:click="foo = 'baz'">Change it</button>
</div>
</template>

<script>
export default {
    name: 'demo4',
    data() {
        var obj = {
            rawHtml: '<div>ddd</div>',
            foo: 'bar'
        }

        Object.freeze(obj)
        return obj
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
