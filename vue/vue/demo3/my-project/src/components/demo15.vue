<template>
<div>
    <!-- 按键修饰符 -->
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="submit">
    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button @click.ctrl="onClick">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button @click.ctrl.exact="onCtrlClick">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button @click.exact="onClick">A</button>
</div>
</template>

<script>
export default {
    name: 'demo15',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
