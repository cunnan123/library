<template>
  <div>
    <div>{{ message }}</div>
     <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>
<script>
export default {
  name: 'demo1',
  data () {
    return {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  }
}
</script>
<style scoped>
</style>
