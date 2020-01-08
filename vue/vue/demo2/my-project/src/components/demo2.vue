<template>
  <div>
    <p v-if="seen">现在你看到我了</p>
  </div>
</template>
<script>
export default {
  name: 'demo2',
  data () {
    return {
      seen: true
    }
  }
}
</script>
<style scoped>
</style>
