<template>
  <div class="boxcontent">
    <div class="energbox">
      <Echart :option="option" :height="190" />
      <div class="carousel_foot" v-if="option">{{ title }}</div>
    </div>
  </div>
</template>
  
<script>
import Echart from '@/components/echarts'
export default {
  name: 'UnitCard',
  components: {
    Echart,
  },
  data() {
    return {
      option: null,
      title: '',
      unit:'',
      color: ['91, 99, 110', '150, 161, 214','255,255,255'], // UI色卡-3色
      color16: ['#5B636E', '#96A1D6','#ffffff'], // UI色卡-3色
    }
  },
  props: ['cardData'],
  inject: ['headData'],
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.title = this.cardData.name
      this.unit = this.cardData.unit
      let year = this.headData().year
      let lastyear = this.getYear(year)
      let newarr = this.cardData.data.map((item) => {
        return {
          name: item.name,
          '走势': item.now,
          [year]: item.now,
          [lastyear]: item.last,
        }
      })
      let data = {
        data: newarr,
        lastyear: lastyear,
        year: year,
      }
      this.option = this.getOption(data)
    },
    getOption(data) {
      let that = this
      return {
        color: this.color16,
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(1, 13, 19, 0.5)',
          textStyle: {
            color: 'rgba(212, 232, 254, 1)',
          },
          formatter: function (params) {
            let name = `${params[0].name}</br>`
            let con = ''
            for(let i=0; i < params.length - 1; i++){
              let item = params[i]
              con += `${item.marker} ${item.seriesName}：${item.data[item.seriesName]}</br>`
            }
            return name + con
          },
          confine: true
          // appendToBody: true
        },
        legend: {
          x: 'center',
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
        dataset: {
          dimensions: ['name', data.year, data.lastyear,'走势'],
          source: data.data,
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,//使x轴文字显示全
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
          name: `单位：${this.unit}`,
          nameTextStyle: {
            color: 'rgb(169, 182, 200)',
            fontSize: 12,
            fontFamily: 'PingFang SC',
            padding: [0, 0, 0, 20],
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
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
        series: [
          {
            type: 'bar',
            barWidth: 6,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255,255,255,0.08)',
            },
          },
          {
            type: 'bar',
            barWidth: 6,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255,255,255,0.08)',
            },
          },
          {
            type: 'line',
            showSymbol: false,
            smooth: true, //平滑
            stack: '',
          },
        ],
      }
    },
    getYear(y) {
      let last = Number(y) - 1
      return last
    },
  },
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  .energbox {
    .carousel_foot {
      width: 100%;
      height: 22px;
      line-height: 22px;
      text-align: center;
      background: rgba(49, 56, 72, 0.5);
      color: rgb(188, 199, 214);
      font-family: Source Han Sans CN;
      font-size: 14px;
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  