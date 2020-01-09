<template>
<div>
    <!-- 文本 -->
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <span>Multiline message is:</span>
    <br>
    <!-- 多行文本 -->
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <!-- 单个复选框 -->
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br>
    <!-- 多个复选框 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <!-- 单选按钮 -->
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>
    <!-- 选择框 -->
    <!-- 单选时 -->
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <!-- 多选时 -->
    <br>
    <select v-model="selectedd" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selectedd }}</span>
    <br>
    <!--  -->
    <select v-model="selecteda">
        <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selecteda }}</span>
</div>
</template>

<script>
export default {
    name: 'demo16',
    data() {
        return {
            message: '',
            checked: true,
            checkedNames: [],
            picked: '',
            selected: '',
            selectedd: [],
            selecteda: 'A',
            options: [{
                    text: 'One',
                    value: 'A'
                },
                {
                    text: 'Two',
                    value: 'B'
                },
                {
                    text: 'Three',
                    value: 'C'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
