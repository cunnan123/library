import state from './global/state'
import getters from './global/getters'
import mutations from './global/mutations'
import actions from './global/actions'
import modules from './global/modules'
import {createWebSocketPlugin,myPluginWithSnapshot } from './../plugin/MyPlugin3'
import createLogger from 'vuex/dist/logger'
const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
  filter (mutation, stateBefore, stateAfter) {
    // 若 mutation 需要被记录，就让它返回 true 即可
    // 顺便，`mutation` 是个 { type, payload } 对象
    return mutation.type !== "aBlacklistedMutation"
  },
  transformer (state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.subTree
  },
  mutationTransformer (mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type
  },
  logger: console, // 自定义 console 实现，默认为 `console`
})

// const plugin = createWebSocketPlugin(socket)
export default {
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
  modules,
  // plugins: process.env.NODE_ENV !== 'production'? [plugin,logger,myPluginWithSnapshot]: [plugin,logger]
}
