<template>
<div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <template v-if="ok">
        <p>Paragraph 1</p>
    </template>
    <template v-else>
        <p>Paragraph 2</p>
    </template>
    <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>

    <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
    </template>
    <br>
    <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="tooglelogintype">toogle login type</button>

    <h1 v-show="ok">Hello!</h1>
</div>
</template>

<script>
export default {
    name: 'demo10',
    data() {
        return {
            awesome: true,
            ok: true,
            type: "B",
            loginType: 'username'
        }
    },
    methods: {
        tooglelogintype() {
            this.loginType = this.loginType == '' ? 'username' : ''
        }
    }
}
</script>

<style scoped>

</style>
