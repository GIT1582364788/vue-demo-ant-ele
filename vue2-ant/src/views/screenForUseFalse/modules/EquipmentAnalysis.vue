<template>
  <div class="EquipmentAnalysis">
    <headline headtitle="重点用能设备能效分析" :styleShow="false" :longTpye="true">
      <div style="width: calc(100% - 280px);height: 28px;margin-right: -20px;margin-bottom: -2px;">
        <a-carousel :dots="false" ref="carouselName">
          <div v-for="i in (Math.ceil(deviceList.length/carouselNum))" :key="i+'autoplay'">
            <div class="content_name">{{deviceList[i-1].name}}</div>
          </div>
        </a-carousel>
      </div>
    </headline>
    <div class="main">
      <!-- spinning -->
      <a-spin :spinning="spinning">
        <a-carousel ref="carouselBox" :dots="false" class="j-carousel" :beforeChange="getNext">
          <div v-for="i in (Math.ceil(deviceList.length/carouselNum) || 1)" :key="i+'autoplay'">
            <div class="content">
              <div class="content_item">
                <div class="c_title">设备能耗</div>
                <EchartCard :option="chart['chart_e_'+i]" :spinning="spinning" :height="205"></EchartCard>
              </div>
              <div class="content_item">
                <div class="c_title">设备公斤单耗</div>
                <EchartCard :option="chart['chart_d_'+i]" :spinning="spinning" :height="205"></EchartCard>
              </div>
            </div>
            <div class="carousel_foot"></div>
          </div>
        </a-carousel>
      </a-spin>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import headline from './CarbonHeadline'
import EchartCard from '@/components/echarts'
import moment from 'moment'
export default {
  components: {
    headline,
    EchartCard
  },
  data() {
    return {
      url: {
        echart1: '/useScreen/energyIntensiveEquipmentConsumption',
        echart2: '/useScreen/energyIntensiveEquipmentUnitConsumption',
        device: '/useScreen/queryEnergyIntensiveEquipmentList'
      },
      queryParam: {},
      pageList: [],
      spinning: false,
      carouselNum: 1,
      time: 10 * 1000,
      deviceList: [
        { name: '设备001', id: '01' },
        { name: '设备002', id: '02' },
        { name: '设备003', id: '03' }
      ],
      showNum: 0,
      color1: ['#FDB021', '#FD4401', '#7681AE', '#0D9BFF', '#FFFFFF'],
      color2: ['#FFFFFF', '#96A1D6'],
      textColor: '#BCC7D6',
      lineColor: 'rgba(255,255,255,0.25)',
      chart: {
        chart_e_1: null,
        chart_d_1: null
      }
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
    this.getDevice(this.queryParam)
  },
  methods: {
    moment,
    getNext(form, to) {
      // this.$refs.carouselName.goTo(to)
    },
    changeNext() {
      this.$refs.carouselBox.next()
      this.$refs.carouselName.next()
    },
    getDevice(data) {
      this.getList(data)
    },
    getMoney(data) {
      let m = moment(new Date(data)).format('MM')
      let num = Number(m)
      return num + '月'
    },
    getList(data) {
      this.pageList = []
      this.deviceList.forEach((item, i) => {
        this.chart['chart_e_' + (i + 1)] = null
        this.chart['chart_d_' + (i + 1)] = null
        // getAction(this.url.echart1, { ...data, deviceId: item.id }).then(res => {
        //   if (res.success) {
        //     let echartData = res.result
        let echartData = {
          energyData: {
            压缩空气: {
              '2023-01-01': '0',
              '2023-02-01': '20',
              '2023-03-01': '500',
              '2023-04-01': '0',
              '2023-05-01': '0',
              '2023-06-01': '300',
              '2023-07-01': '200',
              '2023-08-01': '40',
              '2023-09-01': '50',
              '2023-10-01': '100',
              '2023-11-01': '500',
              '2023-12-01': '400'
            },
            原水: {
              '2023-01-01': '400',
              '2023-02-01': '100',
              '2023-03-01': '300',
              '2023-04-01': '200',
              '2023-05-01': '50',
              '2023-06-01': '90',
              '2023-07-01': '400',
              '2023-08-01': '50',
              '2023-09-01': '660',
              '2023-10-01': '440',
              '2023-11-01': '90',
              '2023-12-01': '200'
            },
            天然气: {
              '2023-01-01': '100',
              '2023-02-01': '200',
              '2023-03-01': '400',
              '2023-04-01': '550',
              '2023-05-01': '60',
              '2023-06-01': '90',
              '2023-07-01': '500',
              '2023-08-01': '440',
              '2023-09-01': '222',
              '2023-10-01': '200',
              '2023-11-01': '110',
              '2023-12-01': '230'
            },
            电力: {
              '2023-01-01': '0',
              '2023-02-01': '20',
              '2023-03-01': '500',
              '2023-04-01': '0',
              '2023-05-01': '0',
              '2023-06-01': '300',
              '2023-07-01': '200',
              '2023-08-01': '40',
              '2023-09-01': '50',
              '2023-10-01': '100',
              '2023-11-01': '500',
              '2023-12-01': '400'
            },
            自来水: {
              '2023-01-01': '100',
              '2023-02-01': '200',
              '2023-03-01': '400',
              '2023-04-01': '550',
              '2023-05-01': '60',
              '2023-06-01': '90',
              '2023-07-01': '500',
              '2023-08-01': '440',
              '2023-09-01': '222',
              '2023-10-01': '200',
              '2023-11-01': '110',
              '2023-12-01': '230'
            }
          },
          tceData: {
            压缩空气: {
              '2023-01-01': '410',
              '2023-02-01': '420',
              '2023-03-01': '328.55',
              '2023-04-01': '310',
              '2023-05-01': '330',
              '2023-06-01': '440',
              '2023-07-01': '300',
              '2023-08-01': '410',
              '2023-09-01': '330',
              '2023-10-01': '440',
              '2023-11-01': '370',
              '2023-12-01': '390'
            },
            原水: {
              '2023-01-01': '300',
              '2023-02-01': '350',
              '2023-03-01': '258.55',
              '2023-04-01': '256',
              '2023-05-01': '270',
              '2023-06-01': '246',
              '2023-07-01': '290',
              '2023-08-01': '310',
              '2023-09-01': '350',
              '2023-10-01': '320',
              '2023-11-01': '320',
              '2023-12-01': '220'
            },
            天然气: {
              '2023-01-01': '200',
              '2023-02-01': '210',
              '2023-03-01': '168.55',
              '2023-04-01': '300',
              '2023-05-01': '230',
              '2023-06-01': '260',
              '2023-07-01': '240',
              '2023-08-01': '280',
              '2023-09-01': '290',
              '2023-10-01': '200',
              '2023-11-01': '290',
              '2023-12-01': '244'
            },
            电力: {
              '2023-01-01': '110',
              '2023-02-01': '120',
              '2023-03-01': '174.55',
              '2023-04-01': '110',
              '2023-05-01': '130',
              '2023-06-01': '140',
              '2023-07-01': '200',
              '2023-08-01': '110',
              '2023-09-01': '130',
              '2023-10-01': '140',
              '2023-11-01': '150',
              '2023-12-01': '190'
            },
            自来水: {
              '2023-01-01': '100',
              '2023-02-01': '130',
              '2023-03-01': '88.55',
              '2023-04-01': '90',
              '2023-05-01': '90',
              '2023-06-01': '80',
              '2023-07-01': '120',
              '2023-08-01': '110',
              '2023-09-01': '150',
              '2023-10-01': '90',
              '2023-11-01': '80',
              '2023-12-01': '70'
            }
          },
          unit: 'tce',
          legend: ['电力', '压缩空气', '天然气', '自来水', '原水'],
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
          this.chart['chart_e_' + (i + 1)] = this.getChartLine(
            'chart_e_' + (i + 1),
            e_series,
            this.color1,
            '单位:' + echartData.unit,
            tooltip,
            echartData.xaxisList.map(x => {
              return this.getMoney(x)
            })
          )
          this.$forceUpdate()
        })
        //   } else {
        //     this.pageList = []
        //     this.$message.error(res.message)
        //   }
        // })
        // getAction(this.url.echart2, { ...data, deviceId: item.id }).then(res => {
        //   if (res.success) {
        //     let echartData = res.result
        let echartData2 = {
          data: {
            2022: {
              '2022-01-01': 80,
              '2022-02-01': 70,
              '2022-03-01': 60,
              '2022-04-01': 70,
              '2022-05-01': 80,
              '2022-06-01': 120,
              '2022-07-01': 110,
              '2022-08-01': 100,
              '2022-09-01': 70,
              '2022-10-01': 90,
              '2022-11-01': 80,
              '2022-12-01': 70
            },
            2023: {
              '2023-01-01': 206,
              '2023-02-01': 236,
              '2023-03-01': 306,
              '2023-04-01': 306,
              '2023-05-01': 206,
              '2023-06-01': 216,
              '2023-07-01': 186,
              '2023-08-01': 196,
              '2023-09-01': 106,
              '2023-10-01': 146,
              '2023-11-01': 206,
              '2023-12-01': 201
            }
          },
          unit: 'tce/t',
          legend: ['2022', '2023'],
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
        let e_series2 = []
        echartData2.legend.forEach(item => {
          let ylist_data = echartData2.data[item]
          let xlist = echartData2.xaxisList.map(x => {
            return item + '-' + moment(new Date(x)).format('MM-DD')
          })

          let data_all = xlist.map(x => {
            return {
              name: this.getMoney(x),
              value: ylist_data[x]
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
          e_series2.push(s_value)
        })
        let tooltip2 = {
          trigger: 'axis',
          formatter: function(params) {
            var res = '<div style="padding-bottom: 5px;">' + params[0].name + '</div>'
            for (var i = 0; i < params.length; i++) {
              res += `<div style="display: flex; justify-content: space-between;">
                            <div>${params[i].marker} ${params[i].seriesName}：</div>
                            <div style="font-weight: 600;">${params[i].data.value} ${echartData2.unit}</div>
                          </div>`
            }
            return res
          }
        }
        this.$nextTick(() => {
          this.chart['chart_d_' + (i + 1)] = this.getChartLine(
            'chart_d_' + (i + 1),
            e_series2,
            this.color2,
            '单位:' + echartData2.unit,
            tooltip2,
            echartData2.xaxisList.map(x => {
              return this.getMoney(x)
            })
          )
          this.$forceUpdate()
        })
        //   } else {
        //     this.pageList = []
        //     this.$message.error(res.message)
        //   }
        // })
      })
    },
    getStart() {
      this.setInterval15 = setInterval(() => {
        if (this.chooseNumber < this.pageList.length - 1) {
          this.chooseNumber++
        } else {
          this.chooseNumber = 0
        }
      }, this.time)
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
    },
    // // id , data, color , xlist(得处理), unit
    getChartLine(id, series, color, unit, tooltip, xlist) {
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
      return option
    }
  }
}
</script>

<style lang="less" scoped>
.EquipmentAnalysis {
  font-family: 'D-DIN';

  .main {
    padding: 15px 30px 0;
    .carousel_foot {
      width: 100%;
      height: 10px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content_item {
        width: calc(50% - 10px);
        .c_title {
          color: #bcc7d6;
          font-size: 13px;
          background: rgba(49, 56, 72, 0.8);
          width: 100%;
          height: 22px;
          line-height: 22px;
          text-align: center;
        }
        .c_echart {
          height: 185px;
        }
      }
    }
  }
  /deep/ .j-carousel .slick-dots-bottom {
    bottom: 0;
  }
  .content_name {
    text-align: right;
    color: #ffffff;
    font-size: 14px;
    background: #202835;
    line-height: 28px;
    padding: 0 20px;
    float: right;
  }
}
</style>

