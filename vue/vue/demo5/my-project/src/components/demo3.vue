<template>
  <div>
    <div>{{ message }}</div>
    <button @click="btn1">btn1</button>
    <button @click="btn2">btn2</button>
    <button @click="btn3">btn3</button>

    <div>{{state }}</div>
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  import TYPE from './../state/types'
  export default {
    name: 'demo3',
    data() {
      return {
        message: 'hello demo3'
      }
    },
    computed: {
      ...mapState(['state']),
    },
    methods: {
      ...mapMutations({
        mutations: TYPE.MUTATIONS.MUTATIONS
      }),
      btn1() {
        this.mutations({
          type: TYPE.MUTATIONS.MUTATIONS,
          mutations: 'btn1'
        })
      },
      ...mapMutations([TYPE.MUTATIONS.MUTATIONS]),

      btn2() {
        this[TYPE.MUTATIONS.MUTATIONS]({
          type: TYPE.MUTATIONS.MUTATIONS,
          mutations: 'btn2'
        })
      },
      ...mapActions([TYPE.ACTIONS.ACTIONS]),
      btn3() {
          this[TYPE.ACTIONS.ACTIONS]({
              type: TYPE.MUTATIONS.MUTATIONS,
              actions: 'btn3'
          })
      },

    },
  }

</script>
<style scoped>
</style>
