<template>
  <div >
    <ol>
      <li v-for="todo in todos" v-bind:key="todo">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'demo2',
  data () {
    return {
       todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
        ]
    }
  }
}
</script>

<style scoped>

</style>
