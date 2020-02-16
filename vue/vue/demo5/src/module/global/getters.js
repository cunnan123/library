export default {

  getters(state, getters) {
    return state.state + getters.getters2
  },
  getters2(state, getters) {
    return 'getters2'
  },
  getters3(state, getters) {
    return function (param) {
      return param
    }
  }

}
