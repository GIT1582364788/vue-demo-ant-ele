<template>
    <div class="flex-wrap">
        <div class="flex-item" v-for="i in 5" :key="i">
            <LineDemo :lineData="lineData"></LineDemo>
        </div>
    </div>
</template>

<script>
import LineDemo from '@/components/Echartsdemo/line.vue'
export default {
    name: "EchartsDemo",
    components:{
        LineDemo
    },
    data() {
        return {
            lineData:[

            ]
        };
    },
    methods: {

    },
}
</script>

<style lang="less" scoped>
// flex布局，多行元素，换行，左对齐，一行最多2个元素，两端对齐
.flex-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    .flex-item {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
    }
}
</style>