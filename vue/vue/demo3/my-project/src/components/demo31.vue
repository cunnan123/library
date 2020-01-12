<template>
<div>
    <div>{{ count1 }}</div>
    <div>{{ count }}</div>
    <div>{{ doneTodosCount }}</div>
    <div>{{ query }}</div>
    <div>{{ doneCount2 }}</div>
    <button @click="increment">btn1</button>
    <button @click="incrementBy('aaaaaaaaa')">btn2</button>
    <button @click="add">btn3</button>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    name: 'demo31',
    data() {
        return {

        }
    },
    created(){
        this.incrementBy({a:'aaaaaaaaa'})
    },
    methods: {
        ...mapMutations([
            'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

            // `mapMutations` 也支持载荷：
            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
        ]),
        ...mapMutations({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        })
    },
    computed: {
        count1() {
            return this.$store.state.count
        },
        doneTodosCount() {
            return this.$store.getters.doneTodosCount
        },
        query() {
            // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
            return this.$store.getters.getTodoById(2)
        },
        ...mapState({
            // 箭头函数可使代码更简练
            count: state => state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`
            countAlias: 'count',

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState(state) {
                return state.count + this.localCount
            },

        }),
        ...mapGetters({
            // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            doneCount2: 'doneTodosCount'
        })
    },
}
</script>

<style scoped>

</style>
