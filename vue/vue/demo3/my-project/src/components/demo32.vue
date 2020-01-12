<template>
<div>

</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: 'demo32',
    data() {
        return {

        }
    },
    created() {
        this.incrementBy('dddddddddd')
    },
    methods: {
        ...mapActions([
            'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

            // `mapActions` 也支持载荷：
            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
        ]),
        ...mapActions({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
        })
    },
    computed: {

    },
}
</script>

<style scoped>

</style>
