import TYPE from './types'
export default{
  [TYPE.MUTATIONS.MUTATIONS] (state, payload) {
    state.state=state.state+payload.mutations
  },
  updateMessage (state, payload) {
    console.log('aa',state, payload)
    state.message=payload
    console.log('bb',state, payload)
  }
}
