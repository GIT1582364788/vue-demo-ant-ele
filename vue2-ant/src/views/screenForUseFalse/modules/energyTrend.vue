<template>
  <div class="boxcontent">
    <div class="bar"></div>
    <CarbonHeadline headtitle="用能趋势" headtitleEnglish="MOM"></CarbonHeadline>
    <div class="energbox">
      <div class="energbox-con" v-for="(e,i) in lineArr" :key="i">
        <Echart :option="e.option" :spinning="e.spinning" :height="190" />
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
  name: 'Energytrend',
  components: {
    CarbonHeadline,
    Echart
  },
  data() {
    return {
      color: ['253,176,33', '253, 68, 1', '118, 129, 174', '13, 155, 255', '130, 204, 205'], // UI色卡-5色
      color16: ['#FDB021', '#FD4401', '#7681AE', '#0D9BFF', '#82CCCD'], // UI色卡-5色
      lineArr: [
        {
          option: null,
          spinning: false,
          url: 'useScreen/energyUseTrend'
        }
      ],
      queryParam: {
        year: '',
        orgCode: ''
      },
      energyData: []
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
  methods: {
    getStart() {
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
        this.queryParam.orgCode = this.getHeadData().orgCode
      }
      this.getLineData()
    },
    getLineData() {
      this.lineArr.forEach(item => {
        // item.spinning = true
        // getAction(item.url, this.queryParam)
        //   .then(res => {
        //     let { success, result, message } = res
        //     console.log(result)
        //     if (success) {
        let result = {
          energyData: {
            压缩空气: {
              '2023-01-01 00:00:00': '0(m³)',
              '2023-02-01 00:00:00': '20(m³)',
              '2023-03-01 00:00:00': '500(m³)',
              '2023-04-01 00:00:00': '0(m³)',
              '2023-05-01 00:00:00': '0(m³)',
              '2023-06-01 00:00:00': '300(m³)',
              '2023-07-01 00:00:00': '200(m³)',
              '2023-08-01 00:00:00': '40(m³)',
              '2023-09-01 00:00:00': '50(m³)',
              '2023-10-01 00:00:00': '100(m³)',
              '2023-11-01 00:00:00': '500(m³)',
              '2023-12-01 00:00:00': '400(m³)'
            },
            原水: {
              '2023-01-01 00:00:00': '400(m³)',
              '2023-02-01 00:00:00': '100(m³)',
              '2023-03-01 00:00:00': '300(m³)',
              '2023-04-01 00:00:00': '200(m³)',
              '2023-05-01 00:00:00': '50(m³)',
              '2023-06-01 00:00:00': '90(m³)',
              '2023-07-01 00:00:00': '400(m³)',
              '2023-08-01 00:00:00': '50(m³)',
              '2023-09-01 00:00:00': '660(m³)',
              '2023-10-01 00:00:00': '440(m³)',
              '2023-11-01 00:00:00': '90(m³)',
              '2023-12-01 00:00:00': '200(m³)'
            },
            天然气: {
              '2023-01-01 00:00:00': '100(m³)',
              '2023-02-01 00:00:00': '200(m³)',
              '2023-03-01 00:00:00': '400(m³)',
              '2023-04-01 00:00:00': '550(m³)',
              '2023-05-01 00:00:00': '60(m³)',
              '2023-06-01 00:00:00': '90(m³)',
              '2023-07-01 00:00:00': '500(m³)',
              '2023-08-01 00:00:00': '440(m³)',
              '2023-09-01 00:00:00': '222(m³)',
              '2023-10-01 00:00:00': '200(m³)',
              '2023-11-01 00:00:00': '110(m³)',
              '2023-12-01 00:00:00': '230(m³)'
            },
            电力: {
              '2023-01-01 00:00:00': '0(kwh)',
              '2023-02-01 00:00:00': '20(kwh)',
              '2023-03-01 00:00:00': '500(kwh)',
              '2023-04-01 00:00:00': '0(kwh)',
              '2023-05-01 00:00:00': '0(kwh)',
              '2023-06-01 00:00:00': '300(kwh)',
              '2023-07-01 00:00:00': '200(kwh)',
              '2023-08-01 00:00:00': '40(kwh)',
              '2023-09-01 00:00:00': '50(kwh)',
              '2023-10-01 00:00:00': '100(kwh)',
              '2023-11-01 00:00:00': '500(kwh)',
              '2023-12-01 00:00:00': '400(kwh)'
            },
            自来水: {
              '2023-01-01 00:00:00': '100(m³)',
              '2023-02-01 00:00:00': '200(m³)',
              '2023-03-01 00:00:00': '400(m³)',
              '2023-04-01 00:00:00': '550(m³)',
              '2023-05-01 00:00:00': '60(m³)',
              '2023-06-01 00:00:00': '90(m³)',
              '2023-07-01 00:00:00': '500(m³)',
              '2023-08-01 00:00:00': '440(m³)',
              '2023-09-01 00:00:00': '222(m³)',
              '2023-10-01 00:00:00': '200(m³)',
              '2023-11-01 00:00:00': '110(m³)',
              '2023-12-01 00:00:00': '230(m³)'
            }
          },
          tceData: {
            压缩空气: {
              '2023-01-01 00:00:00': '410',
              '2023-02-01 00:00:00': '420',
              '2023-03-01 00:00:00': '328.55',
              '2023-04-01 00:00:00': '310',
              '2023-05-01 00:00:00': '330',
              '2023-06-01 00:00:00': '440',
              '2023-07-01 00:00:00': '300',
              '2023-08-01 00:00:00': '410',
              '2023-09-01 00:00:00': '330',
              '2023-10-01 00:00:00': '440',
              '2023-11-01 00:00:00': '370',
              '2023-12-01 00:00:00': '390'
            },
            原水: {
              '2023-01-01 00:00:00': '300',
              '2023-02-01 00:00:00': '350',
              '2023-03-01 00:00:00': '258.55',
              '2023-04-01 00:00:00': '256',
              '2023-05-01 00:00:00': '270',
              '2023-06-01 00:00:00': '246',
              '2023-07-01 00:00:00': '290',
              '2023-08-01 00:00:00': '310',
              '2023-09-01 00:00:00': '350',
              '2023-10-01 00:00:00': '320',
              '2023-11-01 00:00:00': '320',
              '2023-12-01 00:00:00': '220'
            },
            天然气: {
              '2023-01-01 00:00:00': '200',
              '2023-02-01 00:00:00': '210',
              '2023-03-01 00:00:00': '168.55',
              '2023-04-01 00:00:00': '300',
              '2023-05-01 00:00:00': '230',
              '2023-06-01 00:00:00': '260',
              '2023-07-01 00:00:00': '240',
              '2023-08-01 00:00:00': '280',
              '2023-09-01 00:00:00': '290',
              '2023-10-01 00:00:00': '200',
              '2023-11-01 00:00:00': '290',
              '2023-12-01 00:00:00': '244'
            },
            电力: {
              '2023-01-01 00:00:00': '110',
              '2023-02-01 00:00:00': '120',
              '2023-03-01 00:00:00': '174.55',
              '2023-04-01 00:00:00': '110',
              '2023-05-01 00:00:00': '130',
              '2023-06-01 00:00:00': '140',
              '2023-07-01 00:00:00': '200',
              '2023-08-01 00:00:00': '110',
              '2023-09-01 00:00:00': '130',
              '2023-10-01 00:00:00': '140',
              '2023-11-01 00:00:00': '150',
              '2023-12-01 00:00:00': '190'
            },
            自来水: {
              '2023-01-01 00:00:00': '100',
              '2023-02-01 00:00:00': '130',
              '2023-03-01 00:00:00': '88.55',
              '2023-04-01 00:00:00': '90',
              '2023-05-01 00:00:00': '90',
              '2023-06-01 00:00:00': '80',
              '2023-07-01 00:00:00': '120',
              '2023-08-01 00:00:00': '110',
              '2023-09-01 00:00:00': '150',
              '2023-10-01 00:00:00': '90',
              '2023-11-01 00:00:00': '80',
              '2023-12-01 00:00:00': '70'
            }
          },
          legend: ['电力', '天然气', '自来水', '原水', '压缩空气'],
          unit: 'tce',
          xaxisList: [
            '2023-01-01 00:00:00',
            '2023-02-01 00:00:00',
            '2023-03-01 00:00:00',
            '2023-04-01 00:00:00',
            '2023-05-01 00:00:00',
            '2023-06-01 00:00:00',
            '2023-07-01 00:00:00',
            '2023-08-01 00:00:00',
            '2023-09-01 00:00:00',
            '2023-10-01 00:00:00',
            '2023-11-01 00:00:00',
            '2023-12-01 00:00:00'
          ]
        }
        this.energyData = result.energyData
        this.$nextTick(() => {
          item.option = this.getOption(result)
        })

        //   } else {
        //     this.$message.warning(message)
        //   }
        // })
        // .finally(() => {
        //   item.spinning = false
        // })
      })
    },
    getOption(data) {
      let that = this
      let xaxisList = Array.from({ length: 12 }, (_, i) => 1 + i + '月') // xaxisList 特殊，这里是从1月到12月
      return {
        color: this.color16,
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(1, 13, 19, 0.5)',
          textStyle: {
            color: 'rgba(212, 232, 254, 1)'
          },
          formatter: function(params) {
            let name = `${that.handleTime(params[0].name)}</br>`
            let con = ''
            params.forEach(item => {
              con += `${item.marker} ${item.seriesName}：${that.energyData[item.seriesName][item.name]}</br>`
            })
            return name + con
          },
          confine: true
          // appendToBody: true
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
            fontFamily: 'Source Han Sans CN'
          }
        },
        grid: {
          top: '20%',
          left: '4%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data.xaxisList,
          axisLabel: {
            formatter: params => {
              return this.handleTime(params)
            }
          },
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
          name: `单位：${data.unit ? data.unit : 'tce'}`,
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
        series: Object.keys(data.tceData).map((key, i) => {
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
            data: Object.values(data.tceData[key]),
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 1, color: 'rgba(0,29,61,0)' },
                    { offset: 0.8, color: 'rgba(' + colorCur + ',0.2)' },
                    { offset: 0.5, color: 'rgba(' + colorCur + ',0.4)' },
                    { offset: 0, color: 'rgba(' + colorCur + ',0.9)' }
                  ],
                  global: false
                }
              }
            }
          }
        })
      }
    },
    handleTime(data) {
      return moment(new Date(data)).format('M') + '月'
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
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  