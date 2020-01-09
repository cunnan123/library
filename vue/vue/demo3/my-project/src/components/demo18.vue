<template>
<div>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <br>
    <blog-post title="My journey with Vue"></blog-post>
    <blog-post title="Blogging with Vue"></blog-post>
    <blog-post title="Why Vue is so fun"></blog-post>
    <br>
    <br>
    <br>
    <br>
    <br>

    <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></blog-post>
</div>
</template>

<script>
export default {
    name: 'demo18',
    data() {
        return {
            posts: [{
                    id: 1,
                    title: 'My journey with Vue'
                },
                {
                    id: 2,
                    title: 'Blogging with Vue'
                },
                {
                    id: 3,
                    title: 'Why Vue is so fun'
                }
            ]
        }

    },
    methods: {

    },
    watch: {

    }

}
</script>

<style scoped>

</style>
