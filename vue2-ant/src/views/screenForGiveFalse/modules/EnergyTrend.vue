<template>
  <div class="WorkshopAnalysis">
    <headline headtitle="能源使用趋势" :styleShow="false" :shortTpye="true"></headline>
    <div class="main">
      <div id="mychart2" class="charts"></div>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import headline from './CarbonHeadline'
import moment from 'moment'

export default {
  components: {
    headline
  },
  data() {
    return {
      url: {
        WorkshopAnalysis: '/useScreen/energyEfficiencyAnalysis'
      },
      pageList: [],
      spinning: false,
      queryParam: {},
      textColor: '#BCC7D6',
      lineColor: 'rgba(255,255,255,0.25)',
      color1: ['#FDB021', '#FD4401', '#7681AE', '#0D9BFF', '#FFFFFF']
    }
  },
  props: {
    getHeadData: {
      type: Function,
      default: null
    }
  },

  mounted() {
    if (this.getHeadData) {
      this.queryParam = this.getHeadData()
    }
    this.getList(this.queryParam)
  },
  methods: {
    moment,
    getMoney(data) {
      let m = moment(new Date(data)).format('MM')
      let num = Number(m)
      return num + '月'
    },
    getList(data) {
      let echartData = {
        energyData: {
          电: {
            '2023-01-01': 20,
            '2023-02-01': 40,
            '2023-03-01': 60,
            '2023-04-01': 70,
            '2023-05-01': 80,
            '2023-06-01': 120,
            '2023-07-01': 110,
            '2023-08-01': 100,
            '2023-09-01': 70,
            '2023-10-01': 50,
            '2023-11-01': 20,
            '2023-12-01': 2
          },
          压缩空气: {
            '2023-01-01': 206,
            '2023-02-01': 406,
            '2023-03-01': 606,
            '2023-04-01': 706,
            '2023-05-01': 806,
            '2023-06-01': 1206,
            '2023-07-01': 1106,
            '2023-08-01': 1006,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 206,
            '2023-12-01': 26
          },
          天然气: {
            '2023-01-01': 500,
            '2023-02-01': 600,
            '2023-03-01': 700,
            '2023-04-01': 200,
            '2023-05-01': 300,
            '2023-06-01': 400,
            '2023-07-01': 500,
            '2023-08-01': 600,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 500,
            '2023-12-01': 300
          },
          自来水: {
            '2023-01-01': 200,
            '2023-02-01': 180,
            '2023-03-01': 240,
            '2023-04-01': 150,
            '2023-05-01': 220,
            '2023-06-01': 160,
            '2023-07-01': 230,
            '2023-08-01': 220,
            '2023-09-01': 221,
            '2023-10-01': 222,
            '2023-11-01': 223,
            '2023-12-01': 190
          },
          原水: {
            '2023-01-01': 150,
            '2023-02-01': 230,
            '2023-03-01': 140,
            '2023-04-01': 150,
            '2023-05-01': 160,
            '2023-06-01': 120,
            '2023-07-01': 100,
            '2023-08-01': 500,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 206,
            '2023-12-01': 500
          },
        },
        tceData: {
          电: {
            '2023-01-01': 20,
            '2023-02-01': 40,
            '2023-03-01': 60,
            '2023-04-01': 70,
            '2023-05-01': 80,
            '2023-06-01': 120,
            '2023-07-01': 110,
            '2023-08-01': 100,
            '2023-09-01': 70,
            '2023-10-01': 50,
            '2023-11-01': 20,
            '2023-12-01': 2
          },
          压缩空气: {
            '2023-01-01': 206,
            '2023-02-01': 406,
            '2023-03-01': 606,
            '2023-04-01': 706,
            '2023-05-01': 806,
            '2023-06-01': 1206,
            '2023-07-01': 1106,
            '2023-08-01': 1006,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 206,
            '2023-12-01': 26
          },
          天然气: {
            '2023-01-01': 500,
            '2023-02-01': 600,
            '2023-03-01': 700,
            '2023-04-01': 200,
            '2023-05-01': 300,
            '2023-06-01': 400,
            '2023-07-01': 500,
            '2023-08-01': 600,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 500,
            '2023-12-01': 300
          },
          自来水: {
            '2023-01-01': 200,
            '2023-02-01': 180,
            '2023-03-01': 240,
            '2023-04-01': 150,
            '2023-05-01': 220,
            '2023-06-01': 160,
            '2023-07-01': 230,
            '2023-08-01': 220,
            '2023-09-01': 221,
            '2023-10-01': 222,
            '2023-11-01': 223,
            '2023-12-01': 190
          },
          原水: {
            '2023-01-01': 150,
            '2023-02-01': 230,
            '2023-03-01': 140,
            '2023-04-01': 150,
            '2023-05-01': 160,
            '2023-06-01': 120,
            '2023-07-01': 100,
            '2023-08-01': 500,
            '2023-09-01': 706,
            '2023-10-01': 506,
            '2023-11-01': 206,
            '2023-12-01': 500
          },
        },
        unit: 'tce',
        legend: ['电', '压缩空气', '天然气', '自来水', '原水'],
        xaxisList: [
          '2023-01-01',
          '2023-02-01',
          '2023-03-01',
          '2023-04-01',
          '2023-05-01',
          '2023-06-01',
          '2023-07-01',
          '2023-08-01',
          '2023-09-01',
          '2023-10-01',
          '2023-11-01',
          '2023-12-01'
        ]
      }
      let e_series = []
      echartData.legend.forEach(item => {
        let tooltip_data = echartData.energyData[item]
        let ylist_data = echartData.tceData[item]
        let y_list = []
        let t_list = []
        let data_all = echartData.xaxisList.map(x => {
          return {
            name: this.getMoney(x),
            value: ylist_data[x],
            toopvalue: tooltip_data[x]
          }
        })
        let s_value = {
          name: item,
          type: 'line',
          showSymbol: false,
          smooth: true, //平滑
          stack: '',
          data: data_all,
          label: {
            show: false
          }
        }
        e_series.push(s_value)
      })
      let tooltip = {
        trigger: 'axis',
        formatter: function(params) {
          var res = '<div style="padding-bottom: 5px;">' + params[0].name + '</div>'
          for (var i = 0; i < params.length; i++) {
            res += `<div style="display: flex; justify-content: space-between;">
                            <div>${params[i].marker} ${params[i].seriesName}：</div>
                            <div style="font-weight: 600;">${params[i].data.toopvalue} ${
              params[i].seriesName.indexOf('电') !== -1 ? ' kwh' : 'm³'
            }</div>
                          </div>`
          }
          return res
        }
      }
      this.$nextTick(() => {
        // id, series, color, unit, tooltip, xlist
        this.getChartLine(
          'mychart2',
          e_series,
          this.color1,
          '单位:' + echartData.unit,
          tooltip,
          echartData.xaxisList.map(x => {
            return this.getMoney(x)
          })
        )
      })
    },
    // // id , data, color , xlist(得处理), unit
    getChartLine(id, series, color, unit, tooltip, xlist) {
      let myChart = this.$echarts.init(document.getElementById(id))
      let option = {
        title: {
          text: unit ? unit : 'tce',
          show: true,
          textStyle: {
            fontSize: 12,
            color: this.textColor,
            paddingTop: 10
          },
          // x: 'center',
          y: 10
        },
        color: color,
        tooltip: tooltip,
        legend: {
          right: 0,
          top: 10,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 8,
          itemHeight: 2,
          itemGap: 13
        },
        grid: {
          bottom: 20,
          top: 40,
          left: 0,
          right: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xlist,
          axisLine: {
            //x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: this.textColor,
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            //x轴文字的配置
            show: true,
            interval: 0,
            textStyle: {
              color: this.textColor,
              fontSize: 12
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0000000D'
            }
          },
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: this.textColor
            }
          }
        },
        series: series
      }
      myChart.clear()
      option && myChart.setOption(option)
    },
    getTooltip(res, typeList) {
      let list = Object.keys(res) // key数组
      let return_data = `<div class="chartTooltip">`
      list.forEach(item => {
        if (typeList[item]) {
          return_data += `<p class="textTooltip"> ${typeList[item].keyName}：${res[item]} ${typeList[item].keyUnit}</p>`
        }
      })
      return_data += `</div>`
      return return_data
    },
    // 保留两位小数
    getNumTwo(num_0, n = 2) {
      let num = Number(num_0)
      var f = parseFloat(num)
      if (isNaN(f)) {
        return num
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
      var s = f.toString()
      return s
    }
  }
}
</script>

<style lang="less" scoped>
.WorkshopAnalysis {
  font-family: 'D-DIN';
  .main {
    .charts {
      height: 180px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>

