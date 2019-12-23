<template lang="pug">
//- <div class="example">
//-   <div> {{msg}}</div>
//- <img src="./logo.png">
//- </div>
div
  h1 Hello world!
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
<style lang="scss">
 $primary:blue;
  .example{
    display: flex;
   background: $primary;
   color: $color;
  }
 

 

</style>