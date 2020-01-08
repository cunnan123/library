<template>
  <div >
     <p>{{ foo }}</p>
    <!-- 这里的 `foo` 不会更新！ -->
    <button v-on:click="foo = 'baz'">Change it</button>
  </div>
</template>

<script>
export default {
  name: 'demo4',
  data () {
      var obj = {
      foo: 'bar'
      }

      Object.freeze(obj)
      return obj
  },
  methods: {
   
  }
}
</script>

<style scoped>

</style>
