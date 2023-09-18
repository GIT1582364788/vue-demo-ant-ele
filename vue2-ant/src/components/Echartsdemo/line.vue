<template>
  <Echarts :option="option" :spinning="spinning" :height="height" />
</template>
    
<script>
import Echarts from "@/components/echarts.vue";
export default {
  data() {
    return {
      option: null,
      spinning: false,
      color: ['253,176,33', '253, 68, 1', '118, 129, 174', '13, 155, 255', '130, 204, 205'], // UI色卡-5色
      color16: ['#FDB021', '#FD4401', '#7681AE', '#0D9BFF', '#82CCCD'], // UI色卡-5色
    };
  },
  components: {
    Echarts,
  },
  props:{
    height: {
      type: Number,
      default: 300,
    },
    optionData:{
      type: Object,
      default: null,
    }
  },
  mounted() {},
  methods: {
    getOption() {
      this.option = {
        
      };
    },
  },
};
</script>
    
  <style>
</style>