<template>
<div>
    <transition name="slide">
        <div>
            <div class="div">{{content}}</div>
            <button @click="btn">按钮</button>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'contents',
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
