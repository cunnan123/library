<template>
  <div>
    <div>{{ message }}</div>

    <button @click="btn4">btn4</button>
    <button @click="btn5">btn5</button>

    <div>{{state}}</div>
    <div>{{state1}}</div>
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
    name: 'demo5',
    data() {
      return {
        message: 'hello demo5'
      }
    },
    computed: {
      ...mapState({
        state1: 'state',
      }),
      ...mapState('index', ['state']),
    },
    methods: {
      ...mapMutations('index', ['mutationsindexcomponent']),
      btn4() {
        this.mutationsindexcomponent({
          type: 'mutationsindexcomponent',
          mutationsindexcomponent: 'btn4'
        })
      },
      ...mapActions('index', ['actionsindexcomponent']),
      btn5() {
        this.actionsindexcomponent({
          type: 'mutationsindexcomponent',
          actionsindexcomponent: 'btn5'
        })
      },
    }
  }

</script>
<style scoped>
</style>
