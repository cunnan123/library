<template>
  <div>
    <div>{{ message }}</div>
    <div>{{getters}}</div>
    <div>{{getters333('getters333')}}</div>
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    name: 'demo2',
    data() {
      return {
        message: 'hello demo2'
      }
    },
    computed: {
       ...mapGetters(['getters']),
        ...mapGetters({
            getters333: 'getters3'
        }),
    },
  }

</script>
<style scoped>
</style>
