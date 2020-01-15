<template>
<div id="app">
    <router-link to="/index">index页</router-link>
    <router-link to="/content">content页</router-link>
    <router-view/>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
