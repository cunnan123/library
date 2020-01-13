<template>
<div id="app">
    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/demo33/144">Go to demo33</router-link>
        <router-link to="/demo33/145">Go to demo33</router-link>
        <router-link to="/demo34/120/post/20">Go to demo34</router-link>
        <router-link to="/demo35">Go to demo35</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
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
