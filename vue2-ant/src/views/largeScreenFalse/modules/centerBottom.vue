<template>
  <div>
    <div class="boxcontent">
      <CarbonHeadline
        headtitle="近7日能耗趋势"
        headtitleEnglish="TREND"
        :longTpye="true"
        :styleShow="false"
      ></CarbonHeadline>
      <div class="boxcontent-son">
        <div class="energbox" v-for="(e, i) in lineArr" :key="i">
          <div class="energbox-title">{{ e.tit }}</div>
          <div class="energbox-con">
            <Echart :option="e.option" :spinning="e.spinning" :height="155" />
          </div>
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
  name: 'ScreenLeft',
  components: {
    CarbonHeadline,
    Echart,
  },
  data() {
    return {
      color16: ['#6F8197'], // UI色卡-1色
      lineArr: [
        {
          tit: '站房耗电量',
          option: null,
          spinning: false,
          url: 'compressorSpectaculars/stationBuildingElectricityDate', // 站房耗电量
          padding: 70,
          result: {
            legend: ['站房产气效率'],
            data: {
              站房产气效率: {
                '2023-06-08 00:00:00': '9',
                '2023-06-09 00:00:00': '8',
                '2023-06-10 00:00:00': '9',
                '2023-06-11 00:00:00': '8',
                '2023-06-12 00:00:00': '7',
                '2023-06-13 00:00:00': '8',
                '2023-06-14 00:00:00': '9',
              },
            },
            unit: '万kW·h/万Nm³',
            xaxisList: [
              '2023-06-08 00:00:00',
              '2023-06-09 00:00:00',
              '2023-06-10 00:00:00',
              '2023-06-11 00:00:00',
              '2023-06-12 00:00:00',
              '2023-06-13 00:00:00',
              '2023-06-14 00:00:00',
            ],
          },
          maxs:10
        },
        {
          tit: '站房产气量',
          option: null,
          spinning: false,
          url: 'compressorSpectaculars/stationBuildingGasDate', // 站房产气量
          padding: 9,
          result: {
            legend: ['站房产气量'],
            data: {
              站房产气量: {
                '2023-06-08 00:00:00': '60',
                '2023-06-09 00:00:00': '70',
                '2023-06-10 00:00:00': '63',
                '2023-06-11 00:00:00': '65',
                '2023-06-12 00:00:00': '61',
                '2023-06-13 00:00:00': '65',
                '2023-06-14 00:00:00': '60',
              },
            },
            unit: '万Nm³',
            xaxisList: [
              '2023-06-08 00:00:00',
              '2023-06-09 00:00:00',
              '2023-06-10 00:00:00',
              '2023-06-11 00:00:00',
              '2023-06-12 00:00:00',
              '2023-06-13 00:00:00',
              '2023-06-14 00:00:00',
            ],
          },
          maxs:100
        },
        {
          tit: '站房产气效率',
          option: null,
          spinning: false,
          url: 'compressorSpectaculars/gasProductionEfficiencyDate', // 站房产气效率
          padding: 77,
          result: {
            legend: ['站房产气效率'],
            data: {
              站房产气效率: {
                '2023-06-08 00:00:00': '7',
                '2023-06-09 00:00:00': '8',
                '2023-06-10 00:00:00': '9',
                '2023-06-11 00:00:00': '6',
                '2023-06-12 00:00:00': '8',
                '2023-06-13 00:00:00': '7',
                '2023-06-14 00:00:00': '6',
              },
            },
            unit: '万kW·h/万Nm³',
            xaxisList: [
              '2023-06-08 00:00:00',
              '2023-06-09 00:00:00',
              '2023-06-10 00:00:00',
              '2023-06-11 00:00:00',
              '2023-06-12 00:00:00',
              '2023-06-13 00:00:00',
              '2023-06-14 00:00:00',
            ],
          },
          maxs:10
        },
      ],
      queryParams: {
        frequency: 'month',
        startTime: `${moment(new Date()).format('YYYY-MM-DD')}`,
        endTime: `${moment(new Date()).format('YYYY-MM-DD')}`,
      },
      imgsrc: require('@/assets/largeScreen/seven_rec.png'),
    }
  },
  props: {},
  mounted() {
    this.getLineData()
  },
  methods: {
    getLineData() {
      // 近7日
      let days = this.getDays()
      this.queryParams.startTime = days.startTime
      this.queryParams.endTime = days.endTime
      for (let i = 0; i < this.lineArr.length; i++) {
        let item = this.lineArr[i]
        // 标题数据
        let data = item.result
        item.unit = data.unit
        // 图表数据
        item.option = this.getOption(data, item.padding, item.maxs)
      }
    },
    getOption(data, padding = 0, maxs=0) {
      let imageDom = document.createElement('img')
      imageDom.src = this.imgsrc
      let that = this
      let series = []
      let max = 0
      series = Object.keys(data.data).map((key, i) => {
        max = Math.max.apply(null, Object.values(data.data[key]))
        return {
          name: key,
          type: 'line',
          symbol: 'image://' + require('@/assets/largeScreen/seven_dot.png'),
          symbolSize: [20, 20],
          lineStyle: {
            color: '#6F8197',
          },
          smooth: false, //平滑
          stack: '',
          data: Object.values(data.data[key]),
          markArea: {
            itemStyle: {
              color: '#6588C7',
            },
          },
        }
      })
      max = max === 0 ? 1 : max
      let bar = {
        type: 'bar',
        yAxisIndex: 0,
        data: data.xaxisList.map(() => {
          return max
        }),
        itemStyle: {
          color: {
            type: 'linear ', // linear 线性渐变  radial径向渐变
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(101, 136, 199, 0.3)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(101, 136, 199, 0)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      }
      series.push(bar)
      return {
        color: this.color16,
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (value) {
            let name = that.handleTime(value[0].name)
            return `${name}</br>${value[0].marker}${value[0].seriesName}:${value[0].value}${data.unit}`
          },
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '8%',
          bottom: '2%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: data.xaxisList,
          boundaryGap: true, // 坐标轴有两边留白
          axisLabel: {
            formatter: (params) => {
              return this.handleTime(params)
            },
            padding: [5, 0, 0, 0], // 四个数字分别为上右下左与原位置距离
            interval: 0,
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
          // splitArea: {
          //   show: true,
          //   areaStyle: {
          //     color: {
          //       type: 'linear ', // linear 线性渐变  radial径向渐变
          //       x: 0,
          //       y: 0,
          //       x2: 0,
          //       y2: 1,
          //       colorStops: [
          //         {
          //           offset: 0,
          //           color: 'rgba(101, 136, 199, 0.2)', // 0% 处的颜色
          //         },
          //         {
          //           offset: 1,
          //           color: 'rgba(101, 136, 199, 0)', // 100% 处的颜色
          //         },
          //       ],
          //       global: false, // 缺省为 false

          //       // image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
          //       // repeat: 'repeat-x' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
          //     },
          //   },
          // },
        },
        yAxis: {
          type: 'value',
          name: `单位：${data.unit}`,
          min: 0,
          max: maxs,
          // boundaryGap: ['0%', '1%'],
          nameTextStyle: {
            color: 'rgb(169, 182, 200)',
            fontSize: 12,
            fontFamily: 'PingFang SC',
            padding: [0, 0, 0, padding],
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
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            // formatter:'{value}(万元)',
            textStyle: {
              align: 'right',
            },
          },
        },
        series: series,
      }
    },
    handleTime(data) {
      return moment(new Date(data)).format('MM.DD')
    },
    getDays() {
      let oneDay = 24 * 60 * 60 * 1000
      let startTime = new Date(Date.now() - 7 * oneDay)
      let endTime = new Date(Date.now() - oneDay)
      // let startTime = new Date(Date.now() - 6 * oneDay)
      // let endTime = new Date(Date.now())
      startTime = `${moment(startTime).format('YYYY-MM-DD')} 00:00:00`
      endTime = `${moment(endTime).format('YYYY-MM-DD')} 23:59:59`
      const days = {
        startTime,
        endTime,
      }
      return days
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
    padding: 0 20px;
    /* 近7日能耗趋势 */
    .energbox {
      width: calc(33% - 4px);
      height: 100%;
      margin-top: 16px;
      z-index: 999;
      &-title {
        margin-bottom: 12px;
        background: url('~@/assets/largeScreen/seven_title.png') no-repeat center/100% 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: rgb(228, 234, 242);
        font-family: DingTalk JinBuTi;
        font-size: 18px;
      }
    }
  }
}
</style>
  