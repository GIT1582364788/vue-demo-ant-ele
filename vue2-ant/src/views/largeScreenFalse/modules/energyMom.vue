<template>
  <div>
    <div class="boxcontent mt30">
      <CarbonHeadline headtitle="能耗月环比" headtitleEnglish="MOM"></CarbonHeadline>
      <div class="energbox" v-for="(e, i) in lineArr" :key="i">
        <div class="energbox-title">
          <span class="tit">{{ e.tit }}</span>
          <span class="num">{{ e.num }}</span>
          <span class="unit">{{ e.unit }}</span>
          <span class="bar"></span>
          <span class="unit">月环比</span>
          <span class="changeup" :class="{ changedown: e.changenum < 0 ? true : false }"></span>
          <span class="changenum" :class="{ changenumdown: e.changenum < 0 ? true : false }">{{ e.changenum }} %</span>
        </div>
        <div class="energbox-con">
          <Echart :option="e.option" :spinning="e.spinning" :height="160" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import moment from 'moment'
import CarbonHeadline from './CarbonHeadline'
import Echart from '@/components/echarts'
import { getAction } from '@/api/manage'

export default {
  name: 'Energymom',
  components: {
    CarbonHeadline,
    Echart,
  },
  data() {
    return {
      color: ['118,161,250', '255,255,255'], // UI色卡-2色
      color16: ['#76A1FA', '#FFFFFF'], // UI色卡-2色
      lineArr: [
        {
          tit: '站房本月累计耗电量',
          num: 130,
          unit: '万kWh',
          changenum: 1,
          option: null,
          spinning: false,
          url: 'compressorSpectaculars/stationBuildingElectricityMonth', // 站房本月累计耗电量
          data: {
            legend: ['本月', '上月'],
            data: {
              本月: {
                '2023-06-01 00:00:00': '10',
                '2023-06-02 00:00:00': '10',
                '2023-06-03 00:00:00': '12',
                '2023-06-04 00:00:00': '13',
                '2023-06-05 00:00:00': '10',
                '2023-06-06 00:00:00': '10',
                '2023-06-07 00:00:00': '12',
                '2023-06-08 00:00:00': '13',
                '2023-06-09 00:00:00': '10',
                '2023-06-10 00:00:00': '10',
                '2023-06-11 00:00:00': '12',
                '2023-06-12 00:00:00': '13',
                '2023-06-13 00:00:00': '10',
                '2023-06-14 00:00:00': '10',
                '2023-06-15 00:00:00': '12',
                '2023-06-16 00:00:00': '13',
                '2023-06-17 00:00:00': '10',
                '2023-06-18 00:00:00': '10',
                '2023-06-19 00:00:00': '12',
                '2023-06-20 00:00:00': '13',
                '2023-06-21 00:00:00': '10',
                '2023-06-22 00:00:00': '10',
                '2023-06-23 00:00:00': '12',
                '2023-06-24 00:00:00': '13',
                '2023-06-25 00:00:00': '10',
                '2023-06-26 00:00:00': '10',
                '2023-06-27 00:00:00': '12',
                '2023-06-28 00:00:00': '13',
                '2023-06-29 00:00:00': '15',
                '2023-06-30 00:00:00': '10',
              },
              上月: {
                '2023-05-01 00:00:00': '9',
                '2023-05-02 00:00:00': '9',
                '2023-05-04 00:00:00': '7',
                '2023-05-05 00:00:00': '6',
                '2023-05-06 00:00:00': '9',
                '2023-05-07 00:00:00': '10',
                '2023-05-08 00:00:00': '12',
                '2023-05-09 00:00:00': '8',
                '2023-05-10 00:00:00': '9',
                '2023-05-11 00:00:00': '7',
                '2023-05-12 00:00:00': '7',
                '2023-05-13 00:00:00': '7',
                '2023-05-14 00:00:00': '8',
                '2023-05-15 00:00:00': '7',
                '2023-05-16 00:00:00': '9',
                '2023-05-17 00:00:00': '6',
                '2023-05-18 00:00:00': '8',
                '2023-05-19 00:00:00': '8',
                '2023-05-20 00:00:00': '9',
                '2023-05-21 00:00:00': '7',
                '2023-05-22 00:00:00': '8',
                '2023-05-23 00:00:00': '10',
                '2023-05-24 00:00:00': '12',
                '2023-05-25 00:00:00': '9',
                '2023-05-26 00:00:00': '8',
                '2023-05-27 00:00:00': '9',
                '2023-05-28 00:00:00': '7',
                '2023-05-29 00:00:00': '7',
                '2023-05-30 00:00:00': '8',
                '2023-05-31 00:00:00': '9',
              },
            },
            unit: '万kWh',
            xaxisList: [
              '2023-06-01 00:00:00',
              '2023-06-02 00:00:00',
              '2023-06-03 00:00:00',
              '2023-06-04 00:00:00',
              '2023-06-05 00:00:00',
              '2023-06-06 00:00:00',
              '2023-06-07 00:00:00',
              '2023-06-08 00:00:00',
              '2023-06-09 00:00:00',
              '2023-06-10 00:00:00',
              '2023-06-11 00:00:00',
              '2023-06-12 00:00:00',
              '2023-06-13 00:00:00',
              '2023-06-14 00:00:00',
              '2023-06-15 00:00:00',
              '2023-06-16 00:00:00',
              '2023-06-17 00:00:00',
              '2023-06-18 00:00:00',
              '2023-06-19 00:00:00',
              '2023-06-20 00:00:00',
              '2023-06-21 00:00:00',
              '2023-06-22 00:00:00',
              '2023-06-23 00:00:00',
              '2023-06-24 00:00:00',
              '2023-06-25 00:00:00',
              '2023-06-26 00:00:00',
              '2023-06-27 00:00:00',
              '2023-06-28 00:00:00',
              '2023-06-29 00:00:00',
              '2023-06-30 00:00:00',
            ],
          },
        },
        {
          tit: '站房本月累计产气量',
          num: 700,
          unit: '万Nm³',
          changenum: 1,
          option: null,
          spinning: false,
          url: 'compressorSpectaculars/stationBuildingGasMonth', // 站房本月累计产气量
          data: {
            legend: ['本月', '上月'],
            data: {
              本月: {
                '2023-06-01 00:00:00': '57',
                '2023-06-02 00:00:00': '58',
                '2023-06-04 00:00:00': '59',
                '2023-06-05 00:00:00': '40',
                '2023-06-06 00:00:00': '46',
                '2023-06-07 00:00:00': '45',
                '2023-06-08 00:00:00': '43',
                '2023-06-09 00:00:00': '47',
                '2023-06-10 00:00:00': '45',
                '2023-06-11 00:00:00': '48',
                '2023-06-12 00:00:00': '47',
                '2023-06-13 00:00:00': '47',
                '2023-06-14 00:00:00': '48',
                '2023-06-15 00:00:00': '49',
                '2023-06-16 00:00:00': '57',
                '2023-06-17 00:00:00': '58',
                '2023-06-18 00:00:00': '59',
                '2023-06-19 00:00:00': '54',
                '2023-06-20 00:00:00': '47',
                '2023-06-21 00:00:00': '48',
                '2023-06-22 00:00:00': '49',
                '2023-06-23 00:00:00': '47',
                '2023-06-24 00:00:00': '58',
                '2023-06-25 00:00:00': '59',
                '2023-06-26 00:00:00': '57',
                '2023-06-27 00:00:00': '58',
                '2023-06-28 00:00:00': '49',
                '2023-06-29 00:00:00': '47',
                '2023-06-30 00:00:00': '48',
              },
              上月: {
                '2023-05-01 00:00:00': '47',
                '2023-05-02 00:00:00': '48',
                '2023-05-03 00:00:00': '49',
                '2023-05-04 00:00:00': '40',
                '2023-05-05 00:00:00': '46',
                '2023-05-06 00:00:00': '45',
                '2023-05-07 00:00:00': '43',
                '2023-05-08 00:00:00': '37',
                '2023-05-09 00:00:00': '35',
                '2023-05-10 00:00:00': '38',
                '2023-05-11 00:00:00': '37',
                '2023-05-12 00:00:00': '37',
                '2023-05-13 00:00:00': '38',
                '2023-05-14 00:00:00': '39',
                '2023-05-15 00:00:00': '47',
                '2023-05-16 00:00:00': '48',
                '2023-05-17 00:00:00': '49',
                '2023-05-18 00:00:00': '44',
                '2023-05-19 00:00:00': '47',
                '2023-05-20 00:00:00': '48',
                '2023-05-21 00:00:00': '49',
                '2023-05-22 00:00:00': '47',
                '2023-05-23 00:00:00': '38',
                '2023-05-24 00:00:00': '39',
                '2023-05-25 00:00:00': '37',
                '2023-05-26 00:00:00': '38',
                '2023-05-27 00:00:00': '39',
                '2023-05-28 00:00:00': '37',
                '2023-05-29 00:00:00': '48',
                '2023-05-30 00:00:00': '49',
                '2023-05-31 00:00:00': '49',
              },
            },
            unit: '万Nm³',
            xaxisList: [
              '2023-06-01 00:00:00',
              '2023-06-02 00:00:00',
              '2023-06-03 00:00:00',
              '2023-06-04 00:00:00',
              '2023-06-05 00:00:00',
              '2023-06-06 00:00:00',
              '2023-06-07 00:00:00',
              '2023-06-08 00:00:00',
              '2023-06-09 00:00:00',
              '2023-06-10 00:00:00',
              '2023-06-11 00:00:00',
              '2023-06-12 00:00:00',
              '2023-06-13 00:00:00',
              '2023-06-14 00:00:00',
              '2023-06-15 00:00:00',
              '2023-06-16 00:00:00',
              '2023-06-17 00:00:00',
              '2023-06-18 00:00:00',
              '2023-06-19 00:00:00',
              '2023-06-20 00:00:00',
              '2023-06-21 00:00:00',
              '2023-06-22 00:00:00',
              '2023-06-23 00:00:00',
              '2023-06-24 00:00:00',
              '2023-06-25 00:00:00',
              '2023-06-26 00:00:00',
              '2023-06-27 00:00:00',
              '2023-06-28 00:00:00',
              '2023-06-29 00:00:00',
              '2023-06-30 00:00:00',
            ],
          },
        },
      ],
    }
  },
  props: {},
  mounted() {
    this.getLineData()
  },
  methods: {
    getLineData() {
      for (let i = 0; i < this.lineArr.length; i++) {
        let item = this.lineArr[i]
        // 图表数据
        console.log(item.data);
        item.option = this.getOption(item.data)
      }
    },
    getOption(data) {
      let that = this
      let xaxisList = Array.from({ length: 31 }, (_, i) => 1 + i) // xaxisList 特殊，这里是从1日到31日
      return {
        color: this.color16,
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (value) {
            let cur = '',
              last = ''
            // let name = `${that.handleTime(value[0].name)}日</br>`
            let name = `${value[0].name}日</br>`
            if (value.length === 2) {
              cur = `${value[0].marker}${value[0].seriesName}:${value[0].value}${data.unit}</br>`
              last = `${value[1].marker}${value[1].seriesName}:${value[1].value}${data.unit}`
            } else {
              cur = `${value[0].marker}${value[0].seriesName}:${value[0].value}${data.unit}</br>`
            }
            return name + cur + last
          },
        },
        legend: {
          data: data.legend,
          x: 'right',
          y: 0,
          icon: 'roundRect',
          itemHeight: 3, //修改icon图形大小
          itemWidth: 8,
          textStyle: {
            color: 'rgb(255, 255, 255)',
            fontSize: 12,
            fontFamily: 'Source Han Sans CN',
          },
        },
        grid: {
          top: '20%',
          left: '4%',
          right: '2%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xaxisList,
          // axisLabel: {
          //   formatter: (params) => {
          //     return this.handleTime(params)
          //   },
          //   interval: 5, // 'auto' 最后一天需要调整
          // },
          axisLabel: {
            formatter: (params) => {
              return params
            },
            interval: 5,
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(169, 182, 200)',
              fontSize: 12,
              fontFamily: 'PingFang SC',
            },
          },
          axisTick: {
            show: false,
            // inside: true //刻度内置
          },
        },
        yAxis: {
          type: 'value',
          name: `单位：${data.unit}`,
          nameTextStyle: {
            color: 'rgb(169, 182, 200)',
            fontSize: 12,
            fontFamily: 'PingFang SC',
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: 'rgba(104, 133, 186, 0.18)',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(169, 182, 200)',
              fontSize: 12,
              fontFamily: 'PingFang SC',
            },
          },
        },
        series: Object.keys(data.data).map((key, i) => {
          let colorCur = this.color[i]
          if (i >= this.color.length) {
            colorCur = this.color[i % this.color.length]
          }
          return {
            name: key,
            type: 'line',
            showSymbol: false,
            smooth: true, //平滑
            stack: '',
            data: Object.values(data.data[key]),
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 1, color: 'rgba(0,29,61,0.1)' },
                    { offset: 0.8, color: 'rgba(' + colorCur + ',0.2)' },
                    { offset: 0.5, color: 'rgba(' + colorCur + ',0.3)' },
                    { offset: 0, color: 'rgba(' + colorCur + ',0.5)' },
                  ],
                  global: false,
                },
              },
            },
          }
        }),
      }
    },
    handleTime(data) {
      return moment(new Date(data)).format('D')
    },
    // 环比增长率 =（本期数－上期数）÷ 上期数 × 100%。
    getAddFun(a, b) {
      let end = 0
      if (a == 0 && b != 0) {
        end = -100
      } else if (a != 0 && b == 0) {
        end = 100
      } else if (a == 0 && b == 0) {
        end = 0
      } else {
        end = ((a - b) / b) * 100
      }
      return end
    },
    showUpandDown(str) {
      let num = this.getNumTwo(Number(str))
      // 保留两位小数
      if (num > 0) {
        return '+' + num
      } else {
        return num
      }
    },
    getNumTwo(num_0, n = 2) {
      let num = Number(num_0)
      var f = parseFloat(num)
      if (isNaN(f)) {
        return num
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
      var s = f.toString()
      var rs = s.indexOf('.')
      //判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + n) {
        s += '0'
      }
      return s
    },
  },
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  &-son {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    &-son {
      width: calc(50% - 7px);
      height: 100%;
      overflow: hidden;
    }
  }
  /*能耗月环比*/
  .energbox {
    margin-top: 16px;
    &-title {
      margin-bottom: 12px;
      background: url('~@/assets/largeScreen/energ_title.png') no-repeat center/100% 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      .tit {
        color: rgb(255, 255, 255);
        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: 500;
        float: left;
      }
      .num {
        font-size: 32px;
        font-family: D-DIN, D-DIN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        margin-left: 12px;
        margin-right: 4px;
      }
      .unit {
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #adc9e9;
      }
      .bar {
        display: inline-block;
        width: 1px;
        height: 10px;
        background: #ffffff;
        border: 1px solid #707070;
        margin: 0 6px;
      }
      .changeup {
        display: inline-block;
        width: 9px;
        height: 12px;
        margin: 0 4px;
        background: url('~@/assets/largeScreen/energ_up.png') no-repeat center/100% 100%;
      }
      .changedown {
        background: url('~@/assets/largeScreen/energ_down.png') no-repeat center/100% 100%;
      }
      .changenum {
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        color: #b6fb84;
      }
      .changenumdown {
        color: #fd7636;
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  