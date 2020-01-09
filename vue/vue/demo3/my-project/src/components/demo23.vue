<template>
<div>
    <base-checkbox v-model="lovingVue"></base-checkbox>
</div>
</template>

<script>
export default {
    name: 'demo23',
    data() {
        return {
            lovingVue: false
        }

    },
    methods: {

    },
    watch: {
        lovingVue(n) {
            console.log(n)
        }
    }

}
</script>

<style scoped>

</style>
