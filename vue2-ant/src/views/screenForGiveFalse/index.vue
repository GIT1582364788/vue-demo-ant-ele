<template>
  <div id="largeScreenForUse" class="largeScreenForUse">
    <div class="carbon-box" id="largeScreenForUse_box">
      <img src="~@/assets/screenForGive/page_content_bg.png" class="page_bg" />
      <div class="header_box">
        <Header ref="hearder" @change="getChange"></Header>
      </div>
      <div class="content main_content">
        <div class="left">
          <EnergyMetering></EnergyMetering>
          <EnergyTrend></EnergyTrend>
          <EnergyTop ref="EnergyTop"/>
          <UnitTop ref="UnitTop" />
        </div>
        <div class="center">
          <centerMap ref="centerMap" :getHeadData="getHeadData"></centerMap>
          <KilogramUnit ref="KilogramUnit" :getHeadData="getHeadData" />
        </div>
        <div class="right">
          <KeyEquipment ref="KeyEquipment" :getHeadData="getHeadData" />
          <WarningInformation></WarningInformation>
        </div>
      </div>
      <img src="~@/assets/screenForGive/page_bottom_bg.png" class="page_bottom_img" />
    </div>
  </div>
</template>
<script>
import Header from './modules/header'
import CarbonHeadline from './modules/CarbonHeadline'
import EnergyTop from './modules/energyTop'
import UnitTop from './modules/unitTop'
import KeyEquipment from './modules/keyEquipment'
import KilogramUnit from './modules/kilogramUnit'
import centerMap from './modules/centerMap'
import EnergyMetering from './modules/EnergyMetering'
import EnergyTrend from './modules/EnergyTrend'
import WarningInformation from './modules/WarningInformation'

export default {
  components: {
    Header,
    CarbonHeadline,
    EnergyTop,
    UnitTop,
    KilogramUnit,
    KeyEquipment,
    centerMap, EnergyMetering, EnergyTrend, WarningInformation
  },
  data() {
    return {
      clearSet: null
    }
  },
  provide(){
    return {
      headData:this.getHeadData
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
        this.$refs.EnergyTop.getStart()
        this.$refs.UnitTop.getStart()
        this.$refs.KilogramUnit.getStart()
        this.$refs.KeyEquipment.getStart()
      })
    },
    getHeadData() {
      return this.$refs.hearder.getData()
    },
    getChange10s() {
      console.log('指挥中心提示：10s的都动一动')
      this.$refs.EnergyTop.changeNext()
      this.$refs.UnitTop.changeNext()
      this.$refs.KilogramUnit.changeNext()
      this.$refs.KeyEquipment.changeNext()
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    .left {
      width: calc(21% - 20px);
      box-sizing: border-box;
    }
    .center {
      width: calc(56% + 40px);
    }
    .right {
      width: calc(21% - 20px);
      box-sizing: border-box;
    }
  }
  .page_bottom_img {
    width: calc(100% - 40px);
    height: auto;
    display: flex;
    position: relative;
    margin-left: 20px;
    // margin-top: 15px;
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
  background-image: url('~@/assets/screenForGive/page_content_bg.png');
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

