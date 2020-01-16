<template>
<div id="app">
    <router-link to="/index/222?plan=private">index页</router-link>
    <router-link to="/contents">content页</router-link>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            transitionName:'slide-left'
        }
    },
    watch: {
        '$route'(to, from) {
            console.log('transitionName')
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            console.log('transitionName',this.transitionName)
        }
    }
}
</script>

<style>

</style>
