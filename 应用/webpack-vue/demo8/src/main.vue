<template>
  <div>
    <div class="example">{{ msg }}</div>
    <div class="example2">{{ msg }}</div>
    <div>
      <img src="@/icon.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
<style lang="scss" scoped>
$red:red;
.example {
  color:$red;
}
</style>
<style>
/* 全局样式 */
.example2 {
  color:blue;
}
</style>