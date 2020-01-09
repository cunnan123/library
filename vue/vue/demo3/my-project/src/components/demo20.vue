<template>
<div>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <blog-post v-on:enlarge-text="onEnlargeText" v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post>
    </div>
    <custom-input v-model="searchText"></custom-input>
    <alert-box>
        Something bad happened.
    </alert-box>
</div>
</template>

<script>
export default {
    name: 'demo20',
    data() {
        return {
            searchText: 'zzz',
            postFontSize: 1,
            posts: [{
                    id: 1,
                    title: 'My journey with Vue',
                    content: 'dddddd'
                },
                {
                    id: 2,
                    title: 'Blogging with Vue',
                    content: 'dddddd'
                },
                {
                    id: 3,
                    title: 'Why Vue is so fun',
                    content: 'dddddd'
                }
            ]
        }

    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    },
    watch: {
        searchText(n) {
            console.log(n)
        }
    }

}
</script>

<style scoped>

</style>
