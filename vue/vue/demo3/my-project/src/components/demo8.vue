<template>
<div>
    <div class="static" v-bind:class="classObject">ddd</div>
    <div v-bind:class="[activeClass, errorClass]">zzzzz</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">sssss</div>
    <div v-bind:class="[{ active: isActive }, errorClass]">cccc</div>
</div>
</template>

<script>
export default {
    name: 'demo8',
    data() {
        return {
            isActive: true,
            error: null,

            activeClass: 'active',
            errorClass: 'text-danger'
        }
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>

<style scoped>
.static {
    background: #ffa;
}

.active {
    color: red;
}

.text-danger {
    font-size: 40px;
}
</style>
