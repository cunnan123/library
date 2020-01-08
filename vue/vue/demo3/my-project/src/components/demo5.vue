<template>
<div>
   <button v-bind:disabled="isButtonDisabled1">Button</button>
   <button v-bind:disabled="isButtonDisabled2">Button</button>
   <div>{{ message.split('').reverse().join('') }}</div>
</div>
</template>

<script>
export default {
    name: 'demo5',
    data() {
        return {
            isButtonDisabled1:true,
            isButtonDisabled2:false,
            message:'lvbo'
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
