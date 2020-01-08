<template>
  <div >
   <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
    <input v-model="message">
      <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      message: 'Hello Vue.js!',
       groceryList: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
