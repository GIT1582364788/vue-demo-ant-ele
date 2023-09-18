<template>
  <div class="">
    <h1>循环图表</h1>
    
    <a-card v-for="(e, i) in allData" :key="'card' + i">
      <Echarts :option="optionBack(e.option)" />
      <a-button @click="Fn(e.method)">{{ e.method }}</a-button>
    </a-card>
  </div>
</template>
<script>
import Echarts from "@/components/echarts.vue";
export default {
  name: "onlinemid",
  components: {
    Echarts,
  },
  data() {
    return {
      option1: null,
      option2: null,
      option3: null,
      allData: [
        {
          option: "option1",
          method: "getOption1",
        },
        {
          option: "option2",
          method: "getOption2",
        },
        {
          option: "option3",
          method: "getOption3",
        },
      ],
      color: ["#3673F5", "#0AC199", "#FCBC2E", "#FD6464", "#51D8DE", "#6C74CD"], // 柱状图默认颜色
    };
  },
  methods: {
    Fn(method) {
      this[method](); // getOption1 getOption2
    },
    optionBack(option) {
      return this[option]; // option1 option2
    },
    getOption1() {
      this.option1 = {
        title: {
          text: "Male and female height and weight distribution",
        },
        grid: {
          left: "3%",
          right: "7%",
          bottom: "10%",
          containLabel: true,
        },
        tooltip: {
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                params.seriesName +
                " :<br/>" +
                params.value[0] +
                "cm " +
                params.value[1] +
                "kg "
              );
            } else {
              return (
                params.seriesName +
                " :<br/>" +
                params.name +
                " : " +
                params.value +
                "kg "
              );
            }
          },
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1,
            },
          },
        },
        legend: {
          data: ["Female", "Male"],
          left: "center",
          bottom: 10,
        },
        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} cm",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} kg",
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Female",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: [
              [161.2, 51.6],
              [167.5, 59.0],
              [159.5, 49.2],
              [157.0, 63.0],
              [155.8, 53.6],
              [170.0, 59.0],
              [159.1, 47.6],
              [166.0, 69.8],
              [176.2, 66.8],
              [160.2, 75.2],
            ],
          },
          {
            name: "Male",
            type: "scatter",
            emphasis: {
              focus: "series",
            },
            data: [
              [174.0, 65.6],
              [175.3, 71.8],
              [193.5, 80.7],
              [186.5, 72.6],
              [187.2, 78.8],
              [181.5, 74.8],
              [184.0, 86.4],
              [184.5, 78.4],
              [175.0, 62.0],
              [184.0, 81.6],
              [180.0, 76.6],
              [177.8, 83.6],
              [192.0, 90.0],
              [176.0, 74.6],
              [174.0, 71.0],
            ],
          },
        ],
      };
    },
    getOption2() {
      this.option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["Evaporation", "Temperature"],
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Evaporation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " ml";
              },
            },
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            itemStyle: {
              color: {
                type: "linear ", // linear 线性渐变  radial径向渐变
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(101, 136, 199, 0.3)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(101, 136, 199, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " °C";
              },
            },
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };
    },
    getOption3() {
      let that = this;
      this.option3 = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Evaporation",
            min: 0,
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6],
            itemStyle: {
              color: function (params) {
                let colorCur = that.color[params.dataIndex];
                if (params.dataIndex >= that.color.length) {
                  colorCur = that.color[params.dataIndex % that.color.length];
                }
                return colorCur;
              },
            },
            barWidth: '60%',
          },
        ],
      };
    },
  },
};
</script>


