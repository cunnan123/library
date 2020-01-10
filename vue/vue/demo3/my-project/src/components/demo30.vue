<template>
<div>
    <div>{{ message | filterA | filterB }}</div>
    <!-- filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，
     普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数  -->
    <div>{{ message | filterA('arg1', arg2) }}</div>
</div>
</template>

<script>
export default {
    name: 'demo30',
    data() {
        return {

        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }

}
</script>

<style scoped>

</style>
