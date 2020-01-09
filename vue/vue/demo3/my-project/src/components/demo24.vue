<template>
<div>
    <base-input v-on:focus="onFocus" v-bind:value="value" v-bind:label="label"></base-input>
</div>
</template>

<script>
export default {
    name: 'demo24',
    data() {
        return {
           value:'lvbo',
           label:'输入姓名:'
        }

    },
    methods: {
        onFocus() {
            console.log('aaaaaaaaaa')
        }
    },
    watch: {

    }

}
</script>

<style scoped>

</style>
