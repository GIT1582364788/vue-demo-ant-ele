<template>
    <a-spin :spinning="spinning">
      <div v-if="option" class="charts" :style="{height: height + 'px'}" ref="chartRef"></div>
      <a-empty
          v-else
          :style="{height: height + 'px'}"
          :description="false"
          :image="simpleImage"
          :image-style="{height: height + 'px'}"
      />
    </a-spin>
  </template>
    
  <script>
  export default {
    props: {
      option: {
        type: Object,
        default: null,
      },
      height: {
        type: Number,
        default: 300,
      },
      spinning:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        simpleImage: require('@/assets/no-data.png'),
        myChart:null,
        resizeFn:null
      }
    },
    watch: {
      option:{
        deep:true,
        handler(){
          this.getBarChart()
        }
      },
    },
    mounted() {},
    methods: {
      getBarChart() {
        this.$nextTick(()=>{
          let chartDom = this.$refs.chartRef // do not use Id to init echart
          if (this.myChart != null && this.myChart != "" && this.myChart != undefined) {
            this.myChart.dispose()
          }
          this.myChart = this.option && this.$echarts.init(chartDom)  // 有option再初始化图表
          if(this.myChart){
            this.myChart.clear()
            this.myChart.setOption(this.option)
          }
          this.resizeFn = ()=>{
            this.myChart.resize()
          }
          window.addEventListener('resize', this.resizeFn)
          this.$on("hook:beforeDestroy", () => {
            window.removeEventListener('resize',this.resizeFn)
          })
        })
      },
    },
  }
  </script>
    
  <style>
  </style>