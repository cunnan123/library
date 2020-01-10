<template>
<div>
    <current-user>
        <template v-slot:default="slotProps">
            {{ slotProps.user.firstName }}
        </template>
    </current-user>

    <current-user v-slot="slotProps">
        {{ slotProps.user.firstName }}
    </current-user>

    <current-users v-slot="{ user:person = { firstName: 'Guest' } }">
        {{ person.firstName }}
    </current-users>

    <base-layout>
        <template #header>
            <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </base-layout>
</div>
</template>

<script>
export default {
    name: 'demo26',
    data() {
        return {

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
