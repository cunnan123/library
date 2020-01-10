import Vue from 'vue'
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  },
  methods:{
    setMessage(){
      store.setMessageAction('aaa')
    },
    clearMessage(){
      store.clearMessageAction()
    }
  }
})

var vmB = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  },
  methods:{
    setMessage(){
      store.setMessageAction('aaa')
    },
    clearMessage(){
      store.clearMessageAction()
    }
  }
})