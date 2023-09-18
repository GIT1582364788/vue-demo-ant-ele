<template>
  <div class="boxcontents">
    <div class="energboxs">
      <div class="title">
        {{ cardData.title }}
        <span>各产线用能/单耗占比</span>
      </div>
      <div class="con">
        <div class="con-item">
          <Echart :option="energOption" :height="103" class="echartbox" />
          <div class="con-item-info">
            <div v-for="(e,i) in cardData.energData" :key="i + 'e'" class="info">
              <div class="dot" :style="{background:color[(i % color.length)]}"></div>
              <div class="tit">{{ e.name }}</div>
              <div class="cons">
                <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
                  <template slot="title">{{ e.value }}{{cardData.unit}}</template>
                  {{ e.value }}{{cardData.unit}}
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="con-item">
          <Echart :option="unitOption" :height="103" class="echartbox" />
          <div class="con-item-info">
            <div v-for="(e,i) in cardData.unitData" :key="i + 'ee'" class="info">
              <div class="dot" :style="{background:color[(i % color.length)]}"></div>
              <div class="tit">{{ e.name }}</div>
              <div class="cons">
                <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
                  <template slot="title">{{ e.value }}{{cardData.unit}}</template>
                  {{ e.value }}{{cardData.unit}}
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Echart from '@/components/echarts'
export default {
  name: 'EquipCard',
  components: {
    Echart,
  },
  data() {
    return {
      energOption:null,
      unitOption:null,
      color: ['#FDB021', '#EE8F02', '#FFEA21', '#EE7349', '#96A1D6', '#FFFFFF'], // UI色卡-6色
      echart_pie_bg1:require('@/assets/screenForGive/right_1.png'), // 用能
      echart_pie_bg2:require('@/assets/screenForGive/right_2.png') // 单耗
    }
  },
  props: ['cardData'],
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.energOption = this.getOption(this.getBack(this.cardData.energData), this.echart_pie_bg1)
      this.unitOption = this.getOption(this.getBack(this.cardData.unitData), this.echart_pie_bg2)
    },
    getOption(data, img) {
      let that = this
      return {
        color: this.color,
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: img,
                width: 116,
                height: 116,
              },
              left: 0,
              top: -6,
            },
          ],
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: "rgba(1, 13, 19, 0.5)",
          textStyle: {
            color: "rgba(212, 232, 254, 1)",
            fontSize:12
          },
          formatter: function (params) {
            const result = params.marker + params.name + '：' + params.percent + '%'
            return result
          },
          confine: true
          // appendToBody: true
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['80%', '90%'],
            // center: ['25%', '50%'],
            data: data, // 传递进来的数据
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              show: false,
            },
          },
        ],
      }
    },
    getBack(data){
      let d = data
      let sum = 0
      d.forEach((i) => {
        i.value = this.getNumTwo(i.value) || 0
        sum += Number(i.value)
      })
      d.forEach((i) => {
        i.percent = (this.getNumTwo((Number(i.value) / sum) * 100) || 0) + '%'
      })
      return d
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
.boxcontents {
  width: 100%;
  .energboxs {
    padding-left: 12px;
    padding-top: 19px;
    width: 100%;
    .title{
      height: 22px;
      padding-left: 18px;
      background: url('~@/assets/screenForGive/right_3.png') no-repeat;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      color: rgb(255, 255, 255);
      font-family: Source Han Sans CN;
      font-size: 14px;
      span{
        color: rgb(188, 199, 214);
        float: right;
      }
    }
    .con{
      width: 100%;
      padding: 0 17px;
      &-item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        .echartbox{
          width:116px !important;
          margin-top: 20px;
        }
        &-info{
          width: 182px;
          overflow: hidden;
          box-sizing: border-box;
          .info{
            width:44px;
            float: left;
            margin-right: 25px;
            position: relative;
            margin-top: 14px;
            .dot{
              position: absolute;
              width: 4px;
              height: 4px;
              top:9px;
              left: 0;
            }
            .tit {
              color: rgb(188, 199, 214);
              font-family: Source Han Sans CN;
              font-size: 12px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 21px;
              padding-left: 8px;
            }
            .cons{
              margin-left: 1px;
              color: rgb(255, 255, 255);
              font-family: D-DIN;
              font-size: 12px;
              font-weight: 400;
              max-width: 98px;
              padding-left: 8px;
              text-align: start;
              white-space:nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .info:nth-child(3n){
            margin-right: 0;
          }
          
        }
      }
    }
  }
}
</style>
  