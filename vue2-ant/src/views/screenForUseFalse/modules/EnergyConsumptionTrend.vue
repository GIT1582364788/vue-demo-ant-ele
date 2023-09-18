<template>
  <div class="EnergyConsumptionTrend">
    <headline headtitle="用能趋势" :styleShow="false" :longTpye="true">
      <div class="chart_tip">
        <span class="sp1">-</span>
        {{queryParam.year}}
        <span class="sp1 sp2">-</span>
        {{getYear(queryParam.year)}}
      </div>
    </headline>
    <div class="main">
      <!-- spinning -->
      <a-spin :spinning="spinning">
        <a-carousel class="j-carousel" :dots="false" ref="carouselBox">
          <div v-for="i in (Math.ceil(pageList.length/carouselNum) || 1)" :key="i+'autoplay'">
            <div class="carouselPage">
              <div v-for="(item,index) in pageList" :key="index+'TrendCard'">
                <TrendCard
                  v-if="index < i*carouselNum && index >= (i-1)*carouselNum"
                  :cardData="item"
                ></TrendCard>
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
import TrendCard from '../components/TrendCard'
export default {
  components: {
    headline,
    TrendCard
  },
  data() {
    return {
      url: {
        energyUseTrendBottom: '/useScreen/energyUseTrendBottom'
      },
      queryParam: {
        year: ''
      },
      pageList: [],
      spinning: false,
      carouselNum: 12,
      time: 10 * 1000
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
    changeNext() {
      this.$refs.carouselBox.next()
    },
    getYear(y) {
      let last = Number(y) - 1
      return last
    },
    getList(data) {
      this.pageList = [
        { name: '设备001[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备002[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备003[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备004[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备005[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备006[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备007[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备008[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备009[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备010[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备011[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备012[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
        { name: '设备013[压缩空气(m³)]', v1: 20, v2: 40, p1:60, p2:80 },
      ]
      this.$forceUpdate()
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
.EnergyConsumptionTrend {
  font-family: 'D-DIN';
  .chart_tip {
    background: #202835;
    width: 122px;
    height: 28px;
    margin-bottom: -2px;
    margin-right: -20px;
    font-size: 12px;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 14px;
    .sp1 {
      font-size: 16px;
      font-weight: bold;
      color: #fdb021;
      margin: 0 3px 0 10px;
    }
    .sp2 {
      color: #926e2b;
    }
  }

  .main {
    padding: 25px 0 0 0;
    min-height: 232px;
    .carousel_foot {
      width: 100%;
      height: 10px;
    }
    .carouselPage {
      display: flex;
      flex-flow: row wrap;
      padding-left: 10px;
    }
    .carouselPage > div {
      width: 25%;
    }
  }
  /deep/ .j-carousel .slick-dots-bottom {
    bottom: 0;
  }
}
</style>

