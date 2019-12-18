<template lang="pug">
<div>
  <div :class="[$style.red, $style.bold]">hello world</div>
</div>
</template>
<script>
export default {
   created () {
    console.log(this.$style)
    // -> "red_1VyoJ-uZ"
    // 一个基于文件名和类名生成的标识符
  }
}

</script>
<style lang="scss" scoped module>
 $primary:blue;
  .red{
   color: $color;
  }
  .bold{
   background: $primary;
  }
</style>