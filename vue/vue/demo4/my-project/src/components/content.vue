<template>
<div>
    <div class="div">{{content}}</div>
    <button @click="btn">按钮</button>
</div>
</template>

<script>
export default {
    name: 'content',
    data() {
        return {
            content: 'content页面'
        }
    },
    methods: {
        btn() {
            if (this.index == 'aaaaaa') {
                this.index = 'content页面'
            } else {
                this.index = 'aaaaaa'
            }
        }
    }
}
</script>

<style scoped>
.div {
    width: 300px;
    height: 200px;
    background: #faf;
}
</style>
