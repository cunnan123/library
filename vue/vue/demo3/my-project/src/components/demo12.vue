<template>
<div>
    <!-- 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。 -->
    <div v-for="(item,index) in items" v-bind:key="index">
        内容{{item.message}}---{{index}}
    </div>
    <button @click="test1">btnbtn1</button>
    <button @click="test2">btnbtn2</button>
</div>
</template>

<script>
export default {
    name: 'demo12',
    data() {
        return {

            items: [{
                    message: 'Foo'
                },
                {
                    message: 'Bar'
                }
            ],

        }
    },
    created() {

    },
    methods: {
        test1() {
            // 变异方法
            // push()pop()shift()unshift()splice()sort()reverse()
            this.items.push({
                message: 'Baz'
            })
        },
        test2() {
            // 非变异 (non-mutating method) 方法
            // filter()、concat() 和 slice()
            this.items=this.items.filter(function (item) {
                return item.message.match(/Foo/)
            })
        },
    }
}
// 由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
// 1当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
// 2当你修改数组的长度时，例如：vm.items.length = newLength

// var vm = new Vue({
//   data: {
//     items: ['a', 'b', 'c']
//   }
// })
// vm.items[1] = 'x' // 不是响应性的
// vm.items.length = 2 // 不是响应性的


//解决办法

// // 为了解决第一类问题，
// 以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果，同时也将在响应式系统内触发状态更新：

// // Vue.set
// Vue.set(vm.items, indexOfItem, newValue)
// // Array.prototype.splice
// vm.items.splice(indexOfItem, 1, newValue)

// 你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
// vm.$set(vm.items, indexOfItem, newValue)


// // 为了解决第二类问题，你可以使用 splice：
// vm.items.splice(newLength)
</script>

<style scoped>

</style>
