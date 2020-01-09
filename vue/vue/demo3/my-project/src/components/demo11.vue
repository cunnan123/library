<template>
<div>
    <ul>
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>
    <!-- 在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。 -->
    <ul>
        <li v-for="value in object">
            {{ value }}
        </li>
    </ul>
    <div v-for="(value, name) in object">
        {{ name }}: {{ value }}
    </div>
    <div v-for="(value, name, index) in object">
        {{ index }}. {{ name }}: {{ value }}
    </div>
</div>
</template>

<script>
export default {
    name: 'demo11',
    data() {
        return {
            parentMessage: 'Parent',
            items: [{
                    message: 'Foo'
                },
                {
                    message: 'Bar'
                }
            ],
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
