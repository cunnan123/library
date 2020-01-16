<template>
<div>
    <div class="div">{{index}}</div>
    <button @click="btn">按钮</button>
</div>
</template>

<script>
export default {
    name: 'index',
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        next(vm => {
            console.log('beforeRouteEnter')

        })
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('beforeRouteUpdate')
        next()
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('beforeRouteLeave')
        next()
    },
    props: ['route'], //{{route}}
    data() {
        return {
            index: 'index页面'
        }
    },
    created() {

    },
    mounted() {
        console.log('mounted', this.route)
    },

    methods: {
        btn() {
            if (this.index == 'aaaaaa') {
                this.index = 'index页面'
            } else {
                this.index = 'aaaaaa'
            }
        },
        test() {
            // router.push({ name: 'user', params: { userId: '123' },query: { plan: 'private' }})
            // router.replace({ name: 'user', params: { userId: '123' },query: { plan: 'private' }})
            // router.go(1)
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
