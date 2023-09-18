<template>
  <div class="boxcontent">
    <CarbonHeadline headtitle="能碳总览" headtitleEnglish="MOM"></CarbonHeadline>
    <div class="energbox">
      <div class="energbox-con" v-for="(e, i) in pieArr" :key="i">
        <Echart :option="e.option" :spinning="e.spinning" :height="200" />
      </div>
      <div class="content pl">
        <div v-for="(e, i) in conLeft" :key="i + 'l'" class="content-box">
          <div class="content-box-tit">{{ e.name }}</div>
          <div class="content-box-con">
            <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
              <template slot="title">{{ e.value }}</template>
              {{ e.value }}
            </a-tooltip>
          </div>
        </div>
      </div>
      <div class="content pr">
        <div v-for="(e, i) in conRight" :key="i + 'r'" class="content-box">
          <div class="content-box-tit">{{ e.name }}</div>
          <div class="content-box-con">
            <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
              <template slot="title">{{ e.value }}</template>
              {{ e.value }}
            </a-tooltip>
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
  name: 'Carbonoverview',
  components: {
    CarbonHeadline,
    Echart
  },
  data() {
    return {
      color: ['#FDB021', '#EE8F02', '#FFEA21', '#EE7349', '#96A1D6'], // UI色卡-5色
      pieArr: [
        {
          option: null,
          spinning: false,
          url: '/useScreen/energyCarbonOverview' //real url
        }
      ],
      echart_pie_bg: require('@/assets/screenForUse/total.png'),
      conLeft: [],
      conRight: [],
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
  methods: {
    getStart() {
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
        this.queryParam.orgCode = this.getHeadData().orgCode
      }
      this.getPieData()
    },
    getPieData() {
      this.pieArr.forEach(item => {
        // item.spinning = true
        // getAction(item.url,this.queryParam)
        //   .then((res) => {
        //     let { success, result, message } = res
        // if (success) {
        let result = {
          data: [
            { energyValue: '1138.26(kW·h)', name: '电力', tceValue: '9261.65' },
            { energyValue: '266000(m³)', name: '天然气', tceValue: '200000' },
            { energyValue: '0.6(m³)', name: '自来水', tceValue: '0.65' },
            { energyValue: '0(m³)', name: '原水', tceValue: '0' },
            { energyValue: '56(m³)', name: '压缩空气', tceValue: '1400.65' }
          ]
        }
        let newdata = result.data.map(item => {
          return {
            name: item.name,
            value: item.tceValue,
            energyValue: item.energyValue
          }
        })
        let sum = 0
        this.conRight = newdata.slice(0, 3)
        this.conLeft = newdata.slice(3)
        newdata.forEach(item => {
          item.value = this.getNumTwo(item.value) || 0
          sum += Number(item.value)
        })
        newdata.forEach(item => {
          item.percent = (this.getNumTwo((Number(item.value) / sum) * 100) || 0) + '%'
        })
        this.$nextTick(() => {
          item.option = this.getOption(newdata)
        })

        // } else {
        //   this.$message.warning(message)
        // }
        // })
        // .finally(() => {
        //   item.spinning = false
        // })
      })
    },
    getOption(data) {
      let that = this
      return {
        color: this.color,
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: this.echart_pie_bg,
                width: 176,
                height: 176
              },
              left: 134,
              top: 12
            }
          ]
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(1, 13, 19, 0.5)',
          textStyle: {
            color: 'rgba(212, 232, 254, 1)'
          },
          formatter: function(params) {
            const result = params.marker + params.name + '：' + params.percent + '%'
            return result
          }
        },
        legend: {
          show: false
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '60%'],
            // center: ['25%', '50%'],
            data: data, // 传递进来的数据
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              show: false
            }
          }
        ]
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
    }
  }
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  .energbox {
    position: relative;
    margin: 5px 10px 0;
    .pl {
      position: absolute;
      top: 20px;
      left: 0;
    }
    .pr {
      position: absolute;
      top: 20px;
      right: 0;
    }
    .content {
      &-box {
        width: 106px;
        margin-bottom: 9px;
        position: relative;
        &-tit {
          color: rgb(188, 199, 214);
          font-family: Source Han Sans CN;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 21px;
          padding-left: 8px;
        }
        &-tit::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          background: rgb(248, 217, 159);
          position: absolute;
          left: 0;
          top: 8px;
        }
        &-con {
          margin-left: 8px;
          color: rgb(255, 255, 255);
          font-family: D-DIN;
          font-size: 18px;
          font-weight: 400;
          max-width: 98px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background-image: url('~@/assets/screenForUse/total_1.png');
        }
        &-con::before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 3px;
          height: 3px;
          left: 8px;
          top: 35.07px;
          background: rgb(255, 255, 255);
          opacity: 0.3;
          box-shadow: 0px 0px 3px rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  