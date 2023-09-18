<template>
  <div class="boxcontent">
    <div class="bar"></div>
    <CarbonHeadline headtitle="车间工序能耗" headtitleEnglish="MOM"></CarbonHeadline>
    <div class="energbox">
      <div class="tabbox">
        <div
          class="tabbox-item"
          v-for="(e, i) in tabArr"
          :key="i + 't'"
          :class="{ curTab: i == curIn }"
        >
          {{ e.name }}
          <div v-if="i == curIn" class="curdiv"></div>
        </div>
      </div>
      <a-carousel ref="carouselBox" :dots="false" class="j-carousel" :beforeChange="getNext">
        <div class="energbox-con" v-for="(e, i) in barArr" :key="i">
          <Echart :option="e.option" :spinning="e.spinning" :height="155" />
        </div>
      </a-carousel>
    </div>
  </div>
</template>
  
<script>
import moment from 'moment'
import CarbonHeadline from './CarbonHeadline'
import Echart from '@/components/echarts'
import { getAction } from '@/api/manage'

export default {
  name: 'Workshopconsumption',
  components: {
    CarbonHeadline,
    Echart
  },
  data() {
    return {
      color: ['91, 99, 110', '150, 161, 214'], // UI色卡-2色
      color16: ['#5B636E', '#96A1D6'], // UI色卡-2色
      barArr: [
        {
          option: null,
          spinning: false,
          energyCode: 'electricity',
          data: [
            {
              name: '热工车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '涂装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '包装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '机加车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            }
          ],
          lastyear: '2022',
          year: '2023'
        },
        {
          option: null,
          spinning: false,
          energyCode: 'natural_gas',
          data: [
            {
              name: '热工车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '涂装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '包装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '机加车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            }
          ],
          lastyear: '2022',
          year: '2023'
        },
        {
          option: null,
          spinning: false,
          energyCode: 'tap_w',
          data: [
            {
              name: '热工车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '涂装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '包装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '机加车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            }
          ],
          lastyear: '2022',
          year: '2023'
        },
        {
          option: null,
          spinning: false,
          energyCode: 'raw_w',
          data: [
            {
              name: '热工车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '涂装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '包装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '机加车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            }
          ],
          lastyear: '2022',
          year: '2023'
        },
        {
          option: null,
          spinning: false,
          energyCode: 'compressed_air',
          data: [
            {
              name: '热工车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '涂装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '包装车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            },
            {
              name: '机加车间',
              2023: 1569.56,
              currentPeriodEnergy: '12771(kW·h)',
              2022: 1269.56,
              priorPeriodEnergy: '12771(kW·h)'
            }
          ],
          lastyear: '2022',
          year: '2023'
        }
      ],
      tabArr: [
        {
          name: '电力'
        },
        {
          name: '天然气'
        },
        {
          name: '自来水'
        },
        {
          name: '原水'
        },
        {
          name: '压缩空气'
        }
      ],
      curIn: 0,
      myTime: null,
      queryParam: {
        year: '',
        orgCode: ''
      },
      url: {
        list: '/useScreen/getShopProcessEnergy'
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
  beforeDestroy() {
    if (this.myTime) {
      clearInterval(this.myTime)
    }
  },
  methods: {
    getStart() {
      if (this.myTime) {
        clearInterval(this.myTime)
      }
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
        this.queryParam.orgCode = this.getHeadData().orgCode
      }
      this.getLineData()
    },
    changeNext() {
      this.curIn = (this.curIn + 1) % this.tabArr.length
      this.$refs.carouselBox.next()
    },
    getNext() {},
    async getLineData() {
      for (let i = 0; i < this.barArr.length; i++) {
        let item = this.barArr[i]
        let data = {
          data: item.data,
          lastyear: '2022',
          year: '2023'
        }
        this.$nextTick(() => {
          item.option = this.getOption(data)
        })
      }
    },
    getOption(data) {
      let that = this
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
            let name = `${params[0].name}</br>`
            let con = ''
            params.forEach(item => {
              let cur = data.data.find(e => {
                return e.name === item.name
              })
              let curcon = ''
              if (item.seriesIndex == 0) {
                curcon = cur.priorPeriodEnergy // 上年
              } else {
                curcon = cur.currentPeriodEnergy // 本年
              }
              con += `${item.marker} ${item.seriesName}：${curcon}</br>`
            })
            return name + con
          },
          confine: true
          // appendToBody: true
        },
        legend: {
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
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        dataset: {
          dimensions: ['name', data.lastyear, data.year],
          source: data.data
        },
        xAxis: {
          type: 'category',
          axisLabel: {},
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
            fontFamily: 'PingFang SC'
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
            type: 'bar',
            barWidth: 12,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255,255,255,0.08)'
            }
          },
          {
            type: 'bar',
            barWidth: 12,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255,255,255,0.08)'
            }
          }
        ]
      }
    },
    getYear(y) {
      let last = Number(y) - 1
      return last
    },
    setTime() {
      this.myTime = setInterval(() => {
        this.curIn = (this.curIn + 1) % this.tabArr.length
        this.$refs.carouselBox.next()
        // this.getLineData(this.tabArr[this.curIn])
      }, 10 * 1000)
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
    .tabbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      margin-bottom: 10px;
      &-item {
        position: relative;
        width: 80px;
        height: 24px;
        background: rgb(62, 73, 92);
        text-align: center;
        line-height: 24px;
        color: rgb(188, 199, 214);
        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: 400;
      }
      .curTab {
        color: rgb(255, 255, 255);
        .curdiv::before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 10px;
          left: 0;
          top: 8.17px;
          background: rgb(220, 225, 220);
        }
        .curdiv::after {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 10px;
          right: 0;
          top: 8.17px;
          background: rgb(220, 225, 220);
        }
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
/deep/ .j-carousel .slick-dots-bottom {
  bottom: 0;
}
</style>
  