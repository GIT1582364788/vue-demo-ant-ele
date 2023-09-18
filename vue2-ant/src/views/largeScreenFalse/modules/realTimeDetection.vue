<template>
  <div class="TerminalDetection">
    <headline headtitle="实时监测" headtitleEnglish="REAL TIME"></headline>
    <div class="main">
      <div class="m_item" v-for="(item, i) in pageList" :key="i+'tdC'">
        <div class="mi_ban1">
          <img class="mi_ban1_img" :src="'@/assets/largeScreen/r1_bg_02_'+i+'.png'" />
          <div :class="'mi_ban1_content color_'+i">
            <div class="mib1c_1">{{getpageShow(pageData[item]).num}}</div>
            <div class="mib1c_2">{{getpageShow(pageData[item]).unit}}</div>
          </div>
        </div>
        <div class="mi_ban2">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import headline from './CarbonHeadline'
export default {
  components: {
    headline
  },
  data() {
    return {
      url: {
        realTimeAlarm: '/compressorSpectaculars/realTimeMonitoring'
      },
      queryParam: {},
      pageData: {},
      pageList: [],
      spinning: false,
      carouselNum: 3
    }
  },

  mounted() {
    this.getList()
  },
  methods: {
    getpageShow(data) {
      let r_data = {
        num: 0,
        unit: ''
      }
      r_data.num = parseFloat(data) || 0
      r_data.unit = data.replace(r_data.num, '')

      return r_data
      // 跳转详情
    },
    getList() {
      // this.pageData = {}
      // this.pageList = []
      // this.spinning = true
      // getAction(this.url.realTimeAlarm, {}).then(res => {
      // console.log('实时jiance', res)
      // if (res.success) {
      this.pageData = {
        供气总管压力: '6.6Bar',
        总管瞬时流量: '424m3/min',
        总管露点: '-10℃'
      }
      this.pageList = Object.keys(this.pageData)
      // } else {
      //   this.pageList = []
      //   this.$message.error(res.message)
      // }
      // this.spinning = false
      // })
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
.TerminalDetection {
  font-family: 'D-DIN';
  .main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 20px 0;
    padding-top: 15px;
    .m_item {
      width: 32%;
      .mi_ban1 {
        width: 94.3px;
        height: 78px;
        margin: 0 auto;
        position: relative;
        .mi_ban1_content {
          position: absolute;
          top: 30px;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          .mib1c_1 {
            font-size: 24px;
            margin-bottom: -4px;
          }
        }
      }
      .mi_ban2 {
        width: 107px;
        padding: 5px 0;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: #e4eaf2;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-image: url('~@/assets/largeScreen/r1_bg_01.png');
        margin: 0 auto;
      }
    }
  }
  .color_0 {
    color: #b6fb84;
  }
  .color_1 {
    color: #fbd490;
  }
  .color_2 {
    color: #9abeff;
  }
}
</style>

