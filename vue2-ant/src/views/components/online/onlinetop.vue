<template>
  <div class="">
    <a-card>
      <Echarts :option="option"  />
      <a-button @click="getAxios">getAxios</a-button>
    </a-card>
  </div>
</template>
<script>
import Echarts from '@/components/echarts.vue'
import moment from 'moment'

export default {
  name: "",
  components:{
    Echarts
  },
  data() {
    return {
      myChart: null,
      ThresholdTotalDTO: {
        rangePole: 0,
        id: "",
        routine: 0,
        warning: 0,
        exceeding: 10,
      },
      queryParam: {
        dataType:'compressor',  // 默认：空压机 compressor
        frequency: 'month', // 默认：月,
        endTime: `${moment(new Date()).format('YYYY-MM-DD')} 23:59:59`,
        startTime: `${moment(new Date()).format('YYYY-MM-DD')} 00:00:00`
      },
      option:null
    };
  },
  mounted() {
    this.getChart();
  },
  methods: {
    getChart() {
      let that = this.ThresholdTotalDTO;
      let a = Number(that.rangePole / that.exceeding);
      let b = Number(that.routine / that.exceeding);
      let c = Number(that.warning / that.exceeding);
      let d = Number(that.exceeding / that.exceeding);
      this.option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "70%"],
            radius: "100%",
            min: 0,
            max: that.exceeding,
            splitNumber: 4,
            axisLine: {
              lineStyle: {
                width: 12,
                color: [
                  [a, "#34C759"],
                  [b, "#3673F5"],
                  [c, "#FFB202"],
                  [d, "#F33229"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-50%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 2,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            splitLine: {
              length: 3,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            axisLabel: {
              color: "#000000DE",
              fontSize: 20,
              distance: -20,
            },
            title: {
              offsetCenter: [0, "20%"],
              fontSize: 26,
            },
            detail: {
              fontSize: 24,
              offsetCenter: [0, "0%"],
              // valueAnimation: true,
              // formatter: function (value) {
              //   return value
              // },
              color: "inherit",
            },
            data: [
              {
                value: 500,
                name: `${500}tce`,
              },
            ],
          },
        ],
      };
    },
    getAxios() {
      this.$axios.get("/jn-boot/statisticAnalysis/accumulativePowerConsume", {
          // 还可以直接把参数拼接在url后边
          params: this.queryParam
        })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.chart {
  height: 260px;
  width: 340px;
}
</style>


