<template>
  <div id="largeScreen" class="largeScreen">
    <div class="carbon-box" id="largeScreen_box">
      <img src="~@/assets/largeScreen/page_content_bg.jpg" class="page_bg" />
      <div class="header_box">
        <Header></Header>
      </div>
      <div class="content main_content">
        <div class="left">
          <Environmenttest />
          <Runningstate />
          <Energymom />
        </div>
        <div class="center">
          <!-- 示例 -->
          <centerMap></centerMap>
          <Centerbottom />
        </div>
        <div class="right">
          <!-- 示例 -->
          <realTimeDetection></realTimeDetection>
          <TerminalDetection></TerminalDetection>
          <realTimeAlarm></realTimeAlarm>
        </div>
      </div>
      <img src="@/assets/largeScreen/page_bottom_bg.png" class="page_bottom_img" />
    </div>
  </div>
</template>
<script>
import Header from './modules/header'
import CarbonHeadline from './modules/CarbonHeadline'
import Environmenttest from './modules/environmentTest'
import Runningstate from './modules/runningState'
import Energymom from './modules/energyMom'
import Centerbottom from './modules/centerBottom'
import centerMap from './modules/centerMap'
import realTimeDetection from './modules/realTimeDetection'
import TerminalDetection from './modules/TerminalDetection'
import realTimeAlarm from './modules/realTimeAlarm'

export default {
  components: {
    Header,
    CarbonHeadline,
    centerMap, realTimeDetection, TerminalDetection, realTimeAlarm, Environmenttest, Runningstate, Energymom, Centerbottom
  },
  mounted() {
    setTimeout(() => {
      let ww = window.screen.width // 显示器
      let wh = window.screen.height
      let box = document.getElementById('largeScreen_box')
      if (ww > 1930) {
        let wrapW = box.clientWidth
        let wrapH = box.clientHeight
        let scaW = ww / wrapW
        let scaH = wh / wrapH
        box.style.transform = 'scale(' + scaW + ',' + scaH + ')'
      }
    }, 1000)
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
    flex: 1;
    width: 100%;
    padding: 20px;
    padding-bottom: 0;
  }
  .main_content {
    // align-items: center;
    justify-content: center;
    .left {
      width: calc(22% - 20px);
      box-sizing: border-box;
      padding-right: 20px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      // background-image: url('~@/assets/largeScreen/page_left_bg.png');
      position: relative;
    }
    .center {
      width: calc(56% + 40px);
    }
    .right {
      width: calc(22% - 20px);
      padding-left: 20px;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      // background-image: url('~@/assets/largeScreen/page_left_bg.png');
      position: relative;
    }
  }
  .page_bottom_img {
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
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
#largeScreen {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-image: url('~@/assets/largeScreen/page_content_bg.jpg');
  background-color: #08131b;
}
.largeScreen::-webkit-scrollbar {
  width: 0 !important;
}

// IE 10+

.largeScreen {
  -ms-overflow-style: none;
}

// Firefox

.largeScreen {
  overflow: -moz-scrollbars-none;
}
</style>

