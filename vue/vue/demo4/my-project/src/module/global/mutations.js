import TYPE from './types'
export default{
  [TYPE.MUTATIONS.MUTATIONS] (state, payload) {
    state.state=state.state+payload.mutations
  }
}
