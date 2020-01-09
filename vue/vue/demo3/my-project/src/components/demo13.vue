<template>
<div>
    <li v-for="n in evenNumbers">{{ n }}</li>
    <li v-for="n in even(numbers)">{{ n }}</li>
    <br>
    <br>
    <br>
    <br>
    <div>
        <span v-for="n in 10">{{ n }} </span>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div>
      <div v-for="item in items">
            <div>{{item.msg}}</div>
            <div>aaa</div>
      </div>
    </div>
</div>
</template>

<script>
// 由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除
// var vm = new Vue({
//   data: {
//     a: 1
//   }
// })
// // `vm.a` 现在是响应式的
// vm.b = 2
// // `vm.b` 不是响应式的
// // 对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。例如，对于：
// var vm = new Vue({
//   data: {
//     userProfile: {
//       name: 'Anika'
//     }
//   }
// })
// // 你可以添加一个新的 age 属性到嵌套的 userProfile 对象：
// Vue.set(vm.userProfile, 'age', 27)
// // 你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
// vm.$set(vm.userProfile, 'age', 27)

// 有时你可能需要为已有对象赋值多个新属性，比如使用 Object.assign() 或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，
// 不要像这样：
// Object.assign(vm.userProfile, {
//   age: 27,
//   favoriteColor: 'Vue Green'
// })
// 你应该这样做：
// vm.userProfile = Object.assign({}, vm.userProfile, {
//   age: 27,
//   favoriteColor: 'Vue Green'
// })
export default {
    name: 'demo13',
    data() {
        return {
            presentation: 'ddd',
            numbers: [1, 2, 3, 4, 5],
            items: [{
                    msg: 'ddd'
                },
                {
                    msg: 'ddd'
                },
                {
                    msg: 'ddd'
                },
            ]
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
}
</script>

<style scoped>

</style>
