<template>
  <div class="WorkshopAnalysis">
    <headline headtitle="预警信息提醒" :styleShow="false" :shortTpye="true"></headline>
    <div class="main">
      <img class="ceshiimg" :src="require('@/assets/screenForGive/c_r_2_ceshi.png')">
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
      pageList: [{}, {}, {}, {}],
      spinning: false,
      queryParam: {},
      textColor: '#BCC7D6'
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
      let list = [
        // 工序名称, 产量, 时间, 能耗
        { name: '热工', dataX: '100', dataY: '1月', dataZ: '200' }
      ]
      list.forEach(item => {
        item.dataX = Number(item.dataX)
        item.dataZ = Number(item.dataZ)
      })
      let typeList = {
        dataX: { keyName: '产量', keyUnit: 't' },
        dataY: { keyName: '时间', keyUnit: '' },
        dataZ: { keyName: '能耗', keyUnit: 'tce' },
        name: { keyName: '工序名称', keyUnit: '' }
      }
      this.$nextTick(() => {
        // this.getchartByscatter3D3('mychart1', list, typeList)
      })
    },
    getchartByscatter3D3(id, list, typeList) {
      let myChart = this.$echarts.init(document.getElementById(id))
      let maxColor = 0
      let minColor = list && list.length ? Number(list[0].dataZ) : 0
      list.forEach(item => {
        if (Number(item.dataZ) > maxColor) {
          maxColor = Number(item.dataZ)
        }
        if (Number(item.dataZ) < minColor) {
          minColor = Number(item.dataZ)
        }
      })
      let option = {
        tooltip: {
          alwaysShowContent: false,
          hideDelay: 100,
          formatter: params => {
            let return_data = this.getTooltip(params.data, typeList)
            return return_data
          }
        },
        grid3D: {
          axisPointer: {
            show: false,
            type: 'none'
          },
          viewControl: {
            beta: 20,
            alpha: 16
          },
          show: true,
          zlevel: -10,
          left: 20,
          top: 0,
          width: '100%',
          height: '100%',
          environment: 'auto',
          boxWidth: 140,
          boxHeight: 70,
          boxDepth: 70
        },
        xAxis3D: {
          name: 'tce',
          type: 'category',
          nameGap: 25,
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: this.textColor,
              fontSize: 8
            }
          },
          axisLine: {
            //x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: this.textColor,
              width: 1,
              type: 'solid'
            }
          }
        },
        yAxis3D: {
          type: 'category',
          name: ' ',
          nameGap: 30,
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: this.textColor,
              fontSize: 8
            }
          },
          axisLine: {
            //x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: this.textColor,
              width: 1,
              type: 'solid'
            }
          }
        },
        zAxis3D: {
          name: '能耗(tce)',
          nameGap: 25,
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: this.textColor,
              fontSize: 8
            }
          },
          axisLine: {
            //x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: this.textColor,
              width: 1,
              type: 'solid'
            }
          }
        },
        visualMap: {
          max: maxColor,
          min: minColor,
          dimension: 'dataZ',
          inRange: {
            color: [
              '#313695',
              '#4575b4',
              '#74add1',
              '#abd9e9',
              '#e0f3f8',
              '#ffffbf',
              '#fee090',
              '#fdae61',
              '#f46d43',
              '#d73027',
              '#a50026'
            ]
          }
        },
        dataset: {
          source: list
        },
        series: [
          {
            type: 'bar3D',
            shading: 'lambert',
            encode: {
              x: 'dataY',
              y: 'dataX',
              z: 'dataZ'
            }
          }
        ]
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
  color: #fff;
  .main {
    .ceshiimg{
      position: relative;
      display: block;
      padding: 13px 20px;
    }
    .grey {
      color: #bcc7d6;
    }
    .box {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
    }
    .box_left_1 {
      position: relative;
      padding: 15px;
      .img {
        display: block;
        width: 106px;
        height: auto;
      }
      .box_left_center {
        position: absolute;
        top: 60px;
        width: calc(100% - 30px);
        text-align: center;
      }
      .box_left_unit {
        position: absolute;
        bottom: 15px;
        width: calc(100% - 30px);
        text-align: center;
      }
    }
    .box_left_2 {
      position: relative;
      text-align: center;
      width: 100%;
    }
    .box_right {
      position: relative;
      width: calc(100% - 136px);
      .box_r_item > div {
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
      }
    }
  }
}
</style>

