<template>
<div>
    <input type="text" v-focus>
    <div v-demo:foo.a.b="message"></div>
    <div v-demo2="messages"></div>
    <div v-my-directive="'111'"></div>
</div>
</template>

<script>
// 定义一个混入对象
var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}
export default {
    name: 'demo29',
    mixins: [myMixin],
    data() {
        return {
            message: 'hello!',
            messages: { color: 'white', text: 'hello!' }
        }

    },
    provide: function () {
        return {
            getMap: this.getMap
        }
        // inject: ['getMap'] 后代组件中挂载
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
        },
        demo: {
            bind: function (el, binding, vnode) {
                var s = JSON.stringify
                el.innerHTML =
                    'name: ' + s(binding.name) + '<br>' +
                    'value: ' + s(binding.value) + '<br>' +
                    'expression: ' + s(binding.expression) + '<br>' +
                    'argument: ' + s(binding.arg) + '<br>' +
                    'modifiers: ' + s(binding.modifiers) + '<br>' +
                    'vnode keys: ' + Object.keys(vnode).join(', ')
            }
        },
        demo2(el, binding) {//简写  在 bind 和 update 时触发相同行为，而不关心其它的钩子
            console.log(binding.value)
        }
    }

}
</script>

<style scoped>

</style>
