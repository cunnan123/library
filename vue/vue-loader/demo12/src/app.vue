<template>
  <div>
    <div :class="[$style.red, $style.bold]">
      hello world
    </div>
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
$color:red;
$primary: blue;

.red {
  display: flex;
  color: $color;
}

.bold {
  background: $primary;
}
</style>
