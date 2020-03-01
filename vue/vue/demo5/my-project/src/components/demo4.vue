<template>
  <div>
    <div>{{ message }}</div>
    <div>{{state3}}</div>
    <div>{{gettersindexcomponent}}</div>
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
    name: 'demo4',
    data() {
      return {
        message: 'hello demo4'
      }
    },
    computed: {
       ...mapState('index', ['state3']),
        ...mapGetters('index', ['gettersindexcomponent']),
    },
  }

</script>
<style scoped>
</style>
