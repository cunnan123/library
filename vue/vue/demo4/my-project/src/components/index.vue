<template>
<div>
    <br>
    <br>
    <button @click="btn1">btn1</button>
    <button @click="btn2">btn2</button>
    <button @click="btn3">btn3</button>
    <br>
    <br>
    <div>{{index}}</div>
    <div>{{indexcomputed}}</div>
    <br>
    <br>
    <div>{{state}}</div>
    <div>{{state1}}</div>
    <div>{{state2}}</div>
    <br>
    <br>
    <div>{{getters}}</div>
    <div>{{getters333('getters333')}}</div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'
import TYPE from './../module/global/types'
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
            index: 'index'
        }
    },
    mounted() {
        console.log('mounted', this.route)
    },
    computed: {
        indexcomputed() {
            return this.index + '  computed'
        },
        ...mapState(['state']),
        ...mapState({
            state1: 'state',
            state2() {
                return this.$store.state.state + '2'
            },
        }),
        ...mapGetters(['getters']),
        ...mapGetters({
            getters333: 'getters3'
        }),
    },
    methods: {
        ...mapMutations({
            mutations: TYPE.MUTATIONS.MUTATIONS
        }),
        ...mapMutations([TYPE.MUTATIONS.MUTATIONS]),
        ...mapActions([TYPE.ACTIONS.ACTIONS]),
        btn1() {
            this.mutations({
                type: TYPE.MUTATIONS.MUTATIONS,
                mutations: 'mutations1'
            })
        },
        btn2() {
            this[TYPE.MUTATIONS.MUTATIONS]({
                type: TYPE.MUTATIONS.MUTATIONS,
                mutations: 'mutations2'
            })
        },
        btn3() {
            this[TYPE.ACTIONS.ACTIONS]({
                type: TYPE.MUTATIONS.MUTATIONS,
                actions: 'actions1'
            })
        },
    }
}
</script>

<style scoped>

</style>
