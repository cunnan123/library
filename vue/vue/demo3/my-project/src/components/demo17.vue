<template>
<div>
    <!-- 值绑定 -->
    <!-- 复选框 -->
    <input type="checkbox" @click="aa" v-model="toggle" true-value="yes" false-value="no">
    <!-- 单选按钮 -->
    <br>
    <input type="radio" v-model="pick" v-bind:value="a">
    <br>
    <!-- 选择框的选项 -->
    <select v-model="selected">
        <!-- 内联对象字面量 -->
        <option v-bind:value="{ number: 123 }">123</option>
    </select>
    <!-- 修饰符 -->
    <br>
     <input v-model="msg">
     <br>
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg">
    <!-- 如果想自动将用户的输入值转为数值类型， -->
    <br>
    <input v-model.number="age" type="number">
    <!-- 如果要自动过滤用户输入的首尾空白字符， -->
    <br>
    <input v-model.trim="msg">
</div>
</template>

<script>
export default {
    name: 'demo17',
    data() {
        return {
            toggle: "",
            pick: '',
            a: 'lvbo',
            selected: '',
            msg: '',
            age: ''
        }

    },
    methods: {
        aa() {
            console.log(this.toggle)
            console.log(this.pick)
            console.log(this.selected)
        }
    },
    watch:{
        msg(n){
            console.log(n)
        },
        age(n){
            console.log(n)
        }
    }

}
</script>

<style scoped>

</style>
