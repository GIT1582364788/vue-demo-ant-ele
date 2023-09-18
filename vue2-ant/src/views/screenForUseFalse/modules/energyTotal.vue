<template>
  <div class="boxcontent">
    <div class="bar"></div>
    <CarbonHeadline headtitle="用能总量" headtitleEnglish="MOM"></CarbonHeadline>
    <div class="energbox">
      <div class="energbox-con" v-for="(e,i) in barArr" :key="i">
        <Echart :option="e.option" :spinning="e.spinning" :height="205" />
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
  name: 'Energytotal',
  components: {
    CarbonHeadline,
    Echart
  },
  data() {
    return {
      barArr: [
        {
          option: null,
          spinning: false,
          url: '/useScreen/energyCarbonOverview' //real url
        }
      ],
      bardata: [],
      queryParam: {
        year: '',
        orgCode: ''
      }
    }
  },
  props: {
    getHeadData: {
      type: Function,
      default: null
    }
  },
  created() {
    this.getStart()
  },
  computed: {
    energyDataX() {
      let arr = []
      for (var i = 0; i < this.bardata.length; i++) {
        arr.push(this.bardata[i].name)
      }
      return arr
    },
    energyDataY() {
      let arr = []
      for (var i = 0; i < this.bardata.length; i++) {
        arr.push(this.bardata[i].value)
      }
      return arr
    }
  },
  methods: {
    getStart() {
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
        this.queryParam.orgCode = this.getHeadData().orgCode
      }
      this.getBarData()
    },
    getBarData() {
      this.barArr.forEach(item => {
        let result_data = [
          { energyValue: '1020.61(kW·h)', name: '电力', tceValue: '8304.43' },
          { energyValue: '2343(m³)', name: '天然气', tceValue: '9304.43' },
          { energyValue: '1234(m³)', name: '自来水', tceValue: '6304.43' },
          { energyValue: '578(m³)', name: '原水', tceValue: '4304.43' },
          { energyValue: '1078.87(m³)', name: '压缩空气', tceValue: '8604.43' }
        ]
        this.bardata = result_data.map(item => {
          return {
            name: item.name,
            value: item.tceValue,
            energyValue: item.energyValue
          }
        })
        this.$nextTick(() => {
          item.option = this.getOption()
        })

        this.$forceUpdate()
      })
      this.$forceUpdate()
    },
    getOption() {
      let that = this
      return {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(1, 13, 19, 0.5)',
          textStyle: {
            color: 'rgba(212, 232, 254, 1)'
          },
          formatter: function(params) {
            return params.marker + params.name + '：' + params.value + 'tce'
          }
        },
        grid: {
          top: 30,
          right: 10,
          left: 15,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.energyDataX,
          axisLine: {
            lineStyle: {
              color: 'rgb(169, 182, 200)',
              fontSize: 12,
              fontFamily: 'PingFang SC'
            }
          },
          axisTick: {
            show: false
            // inside: true //刻度内置
          }
        },
        yAxis: {
          type: 'value',
          name: `单位：tce`,
          nameTextStyle: {
            color: 'rgb(169, 182, 200)',
            fontSize: 12,
            fontFamily: 'PingFang SC',
            padding: [0, 20, 0, 0]
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'rgba(104, 133, 186, 0.18)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(169, 182, 200)',
              fontSize: 12,
              fontFamily: 'PingFang SC'
            }
          }
        },
        series: [
          {
            type: 'pictorialBar',
            barCategoryGap: '-10%',
            symbol: (value, params) => {
              //数据为0时 会出现错位 symbol处理为'none'；
              const num = isNaN(value) ? 0 : Number(value)
              if (num > 0) {
                return 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'
              } else {
                return 'none'
              }
            },
            data: this.energyDataY,
            label: {
              show: true,
              position: 'top',
              formatter: function(params) {
                const num = Number(params.value) == 0 ? '' : that.bardata[params.dataIndex].energyValue
                return num
              },
              textStyle: {
                color: 'rgb(188, 199, 214)', // 标签字体颜色
                fontSize: 12, // 标签字体大小
                fontWeight: '400', // 标签字体加粗
                fontFamily: 'D-DIN' // 标签字体
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear ', // linear 线性渐变  radial径向渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(255, 255, 255, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 255, 255, 0.1)' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 1,
                borderColor: 'rgb(255, 255, 255)'
              },
              // 移入
              emphasis: {
                color: {
                  type: 'linear ', // linear 线性渐变  radial径向渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(253, 176, 33, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(253, 176, 33, 0.1)' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 1,
                borderColor: 'rgb(253, 176, 33)'
              }
            }
          }
        ]
      }
    },
    handleTime(data) {
      return moment(new Date(data)).format('D')
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
    }
  }
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  position: relative;
  padding: 0 0 0 8px;
  .bar {
    position: absolute;
    width: 1px;
    height: 200px;
    left: 0;
    top: 18px;
    background: rgb(255, 255, 255);
    opacity: 0.15;
  }
  .energbox {
    margin-top: 16px;
    &-title {
      margin-bottom: 12px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      .bar {
        display: inline-block;
        width: 1px;
        height: 10px;
        background: #ffffff;
        border: 1px solid #707070;
        margin: 0 6px;
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  