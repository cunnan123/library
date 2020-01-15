<template>
<div>
    <div class="div">{{index}}</div>
    <button @click="btn">按钮</button>
</div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            index: 'index页面'
        }
    },
    methods: {
        btn() {
            if (this.index == 'aaaaaa') {
                this.index = 'index页面'
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
    background: #afa;
}
</style>
