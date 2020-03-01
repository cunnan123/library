<template>
  <div>
    <div>{{ message }}</div>
    <div>{{state }}</div>
    <div>{{state1 }}</div>
    <div>{{state2 }}</div>
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
    name: 'demo1',
    beforeRouteEnter(to, from, next) {
       console.log('beforeRouteEnter1')
      next(vm => {
        console.log('beforeRouteEnter2')

      })
    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate')
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave')
      next()
    },
    props: ['route'], //{{route}}
    data() {
      return {
        message: 'hello demo1'

      }
    },
    mounted() {
      console.log('mounted', this.route)
    },
    computed: {
      ...mapState(['state']),
      ...mapState({
        state1: 'state',
        state2() {
          return this.$store.state.state + '2'
        },
      }),
    },
  }

</script>
<style scoped>
</style>
