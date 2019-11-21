实时日志
    var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null

    module.exports = {
    info() {
        if (!log) return
        log.info.apply(log, arguments)
    },
    warn() {
        if (!log) return
        log.warn.apply(log, arguments)
    },
    error() {
        if (!log) return
        log.error.apply(log, arguments)
    },
    setFilterMsg(msg) { // 从基础库2.7.3开始支持
        if (!log || !log.setFilterMsg) return
        if (typeof msg !== 'string') return
        log.setFilterMsg(msg)
    },
    addFilterMsg(msg) { // 从基础库2.8.1开始支持
        if (!log || !log.addFilterMsg) return
        if (typeof msg !== 'string') return
        log.addFilterMsg(msg)
    }
    }


    var log = require('./log.js') // 引用上面的log.js文件
    log.info('hello test hahaha') // 日志会和当前打开的页面关联，建议在页面的onHide、onShow等生命周期里面打
    log.warn('warn')
    log.error('error')
    log.setFilterMsg('filterkeyword')
    log.setFilterMsg('addfilterkeyword')


    注意事项
        由于后台资源限制，“实时日志”使用规则如下：

        为了定位问题方便，日志是按页面划分的，某一个页面，在onShow到onHide（切换到其它页面、右上角圆点退到后台）之间打的日志，会聚合成一条日志上报，并且在小程序管理后台上可以根据页面路径搜索出该条日志。
        每个小程序账号每天限制500万条日志，日志会保留7天，建议遇到问题及时定位。
        一条日志的上限是5KB，最多包含200次打印日志函数调用（info、warn、error调用都算），所以要谨慎打日志，避免在循环里面调用打日志接口，避免直接重写console.log的方式打日志。
        意见反馈里面的日志，可根据OpenID搜索日志。
        setFilterMsg可以设置过滤的Msg。这个接口的目的是提供某个场景的过滤能力，例如setFilterMsg('scene1')，则在MP上可输入scene1查询得到该条日志。比如上线过程中，某个监控有问题，可以根据FilterMsg过滤这个场景下的具体的用户日志。FilterMsg仅支持大小写字母。如果需要添加多个关键字，建议使用addFilterMsg替代setFilterMsg。