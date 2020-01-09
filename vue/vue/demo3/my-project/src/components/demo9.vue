<template>
<div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">xxxx</div>
    <div v-bind:style="{ color: activeColor, 'font-size': fontSize + 'px' }">xxxx</div>
    <div v-bind:style="styleObject">zzzzz</div>
    <div v-bind:style="[baseStyles, overridingStyles]">xxxxx</div>
    <!-- 这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。 -->
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">aaaaa</div>
</div>
</template>

<script>
export default {
    name: 'demo9',
    data() {
        return {
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            baseStyles: {
                color: 'red',
            },
            overridingStyles: {
                fontSize: '13px',
                transform:'translate(200px)'
            }
        }
    },

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
