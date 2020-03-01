<template>
  <div>
    <div>{{ message0 }}</div>
    <input v-model="messages">
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
    name: 'demo6',
    data() {
      return {
        message0: 'hello demo6'
      }
    },
    computed: {
      ...mapState(['message']),
      messages: {
        get() {
          return this.message
        },
        set(value) {
          this.updateMessage(value)
        }
      }
    },
    methods: {
      ...mapMutations(['updateMessage']),
    }
  }

</script>
<style scoped>
</style>
