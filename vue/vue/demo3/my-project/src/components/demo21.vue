<template>
<div>
    <component v-bind:is="currentTabComponent">gfgdsgfgds</component>
</div>
</template>

<script>
export default {
    name: 'demo21',
    data() {
        return {
            currentTabComponent: 'alert-box'
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
