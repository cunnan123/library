<template lang="pug">
<div>
  <div :class="[$style.red, $style.bold]">hello world</div>
</div>
</template>
<script>
export default {
  created () {
    console.log(this.$style)
  }
}

</script>
<style lang="scss" scoped module>
  $primary:blue;

  .red {
    display: flex;
    color: $color;
  }

  .bold {
    background: $primary;
  }
</style>
