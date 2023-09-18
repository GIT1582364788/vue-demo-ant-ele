<template>
  <div id="largeScreenForUse" class="largeScreenForUse">
    <div class="carbon-box" id="largeScreenForUse_box">
      <img src="~@/assets/screenForUse/page_content_bg.jpg" class="page_bg" />
      <div class="header_box">
        <Header ref="hearder" @change="getChange"></Header>
      </div>
      <div class="content main_content">
        <div class="content_ban ban1">
          <Carbonoverview ref="Carbonoverview" class="ban1_1" :getHeadData="getHeadData" />
          <Energytotal ref="Energytotal" class="ban1_1" :getHeadData="getHeadData" />
          <Energytrend ref="Energytrend" class="ban1_1" :getHeadData="getHeadData" />
          <Workshopconsumption ref="Workshopconsumption" class="ban1_1" :getHeadData="getHeadData" />
        </div>
        <div class="content_ban ban2">
          <Panoramacenter ref="Panoramacenter" :getHeadData="getHeadData" />
        </div>
        <div class="content_ban ban3">
          <WorkshopAnalysis ref="WorkshopAnalysis" class="ban3_1" :getHeadData="getHeadData"></WorkshopAnalysis>
          <EquipmentAnalysis ref="EquipmentAnalysis" class="ban3_2" :getHeadData="getHeadData"></EquipmentAnalysis>
          <EnergyConsumptionTrend
            ref="EnergyConsumptionTrend"
            class="ban3_2"
            :getHeadData="getHeadData"
          ></EnergyConsumptionTrend>
        </div>
      </div>
      <img src="~@/assets/screenForUse/page_bottom_bg.png" class="page_bottom_img" />
    </div>
  </div>
</template>
<script>
import Header from './modules/header'
import CarbonHeadline from './modules/CarbonHeadline'
import Carbonoverview from './modules/carbonOverview'
import Energytotal from './modules/energyTotal'
import Energytrend from './modules/energyTrend'
import Workshopconsumption from './modules/workshopConsumption'
import Panoramacenter from './modules/panoramaCenter'
import WorkshopAnalysis from './modules/WorkshopAnalysis'
import EquipmentAnalysis from './modules/EquipmentAnalysis'
import EnergyConsumptionTrend from './modules/EnergyConsumptionTrend'

export default {
  components: {
    Header,
    CarbonHeadline,
    WorkshopAnalysis,
    EquipmentAnalysis,
    EnergyConsumptionTrend,
    Panoramacenter,
    Energytrend,
    Carbonoverview,
    Energytotal,
    Workshopconsumption
  },
  data() {
    return {
      clearSet: null
    }
  },
  mounted() {
    setTimeout(() => {
      let ww = window.screen.width // 显示器
      let wh = window.screen.height
      let box = document.getElementById('largeScreenForUse_box')
      if (ww > 1930) {
        let wrapW = box.clientWidth
        let wrapH = box.clientHeight
        let scaW = ww / wrapW
        let scaH = wh / wrapH
        box.style.transform = 'scale(' + scaW + ',' + scaH + ')'
      }
    }, 1000)
    this.clearSet = setInterval(() => {
      this.getChange10s()
    }, 10 * 1000)
  },
  beforeDestroy() {
    if (this.clearSet) {
      clearInterval(this.clearSet)
    }
  },
  methods: {
    getChange(data) {
      console.log('指挥中心接受到消息:', data)
      this.$nextTick(() => {
        this.$refs.WorkshopAnalysis.getList(data)
        this.$refs.EquipmentAnalysis.getList(data)
        this.$refs.EnergyConsumptionTrend.getList(data)
        this.$refs.Carbonoverview.getStart()
        this.$refs.Energytotal.getStart()
        this.$refs.Energytrend.getStart()
        this.$refs.Workshopconsumption.getStart()
        this.$refs.Panoramacenter.getStart()
      })
    },
    getHeadData() {
      return this.$refs.hearder.getData()
    },
    getChange10s() {
      console.log('指挥中心提示：10s的都动一动')
      this.$refs.EquipmentAnalysis.changeNext()
      this.$refs.EnergyConsumptionTrend.changeNext()
      this.$refs.Workshopconsumption.changeNext()
      this.$refs.Panoramacenter.changeNext()
    }
  }
}
</script>
<style lang="less" scoped>
.carbon-box {
  position: relative;
  width: 1920px;
  height: 1080px;
  // padding: 0 15px;
  box-sizing: border-box;
  overflow: hidden;
  transform-origin: left top;
  .header_box {
    padding-top: 69px;
  }
  .content {
    width: 100%;
    //padding: 20px;
    padding-bottom: 0;
    position: relative;
    .content_ban {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .ban1{
      min-height: 247px;
      padding: 47px 20px 0 20px;
      .ban1_1{
        width: calc(25% - 5px);
      }
    }
    .ban2{
      // margin-bottom: 20px;
    }
    .ban3{
      padding: 0 20px;
      .ban3_1{
        width: 288px;
      }
      .ban3_2 {
        width: calc(50% - 164px);
      }
    }
  }
  .page_bottom_img {
    width: calc(100% - 40px);
    height: auto;
    display: flex;
    position: relative;
    margin-left: 20px;
    margin-top: 15px;
  }
  .page_bg {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #08131b;
  }
}
#largeScreenForUse {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-image: url('~@/assets/screenForUse/page_content_bg.jpg');
  background-color: #08131b;
}
.largeScreenForUse::-webkit-scrollbar {
  width: 0 !important;
}

// IE 10+

.largeScreenForUse {
  -ms-overflow-style: none;
}

// Firefox

.largeScreenForUse {
  overflow: -moz-scrollbars-none;
}
</style>

