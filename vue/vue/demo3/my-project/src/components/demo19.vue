<template>
<div>
    <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
</div>
</template>

<script>
export default {
    name: 'demo19',
    data() {
        return {
            posts: [{
                    id: 1,
                    title: 'My journey with Vue',
                    content:'dddddd'
                },
                {
                    id: 2,
                    title: 'Blogging with Vue',
                    content:'dddddd'
                },
                {
                    id: 3,
                    title: 'Why Vue is so fun',
                    content:'dddddd'
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
