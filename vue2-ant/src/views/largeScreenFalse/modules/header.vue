<template>
  <div class="content_header">
    <img src="@/assets/largeScreen/page_header.png" alt="header_png" class="header_png" />
    <img src="~@/assets/largeScreen/logo-screen.png" alt="logo" class="header_logo_png" />
    <div style="color:white" class="title beartFont faGuang">戴卡公辅车间数字化智控中心</div>
    <div class="time beartFont">{{ newTime }}</div>
    <div class="full">
      <a-icon type="poweroff" style="font-size: 16px;" v-if="!isFullScreen" @click="fullScreen" />
      <a-icon type="poweroff" style="font-size: 16px;" v-else @click="exitFullScreen" />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      newTime: '',
      myTime: null,
      isFullScreen: false
    }
  },
  created() {
    this.setTime()
  },
  beforeDestroy() {
    clearInterval(this.myTime)
  },
  methods: {
    getDay() {
      const day = dayjs().format('YYYY/MM/DD')

      let week = dayjs().day()
      switch (week) {
        case 0:
          week = '星期日'
          break
        case 1:
          week = '星期一'
          break
        case 2:
          week = '星期二'
          break
        case 3:
          week = '星期三'
          break
        case 4:
          week = '星期四'
          break
        case 5:
          week = '星期五'
          break
        case 6:
          week = '星期六'
          break

        default:
          break
      }

      const time = dayjs().format('HH:mm:ss')
      this.newTime = `${day} ${time}`
      return `${day} ${time}`

      console.log(day, week, time)
    },
    setTime() {
      this.myTime = setInterval(() => {
        this.getDay()
      }, 1000)
    },
    fullScreen() {
      this.isFullScreen = true
      // 判断各种浏览器，找到正确的方法
      var element = document.getElementById('largeScreen')
      var requestMethod =
        element.requestFullScreen || // W3C
        element.webkitRequestFullScreen || // Chrome等
        element.mozRequestFullScreen || // FireFox
        element.msRequestFullScreen // IE11
      if (requestMethod) {
        requestMethod.call(element)
      } else if (typeof window.ActiveXObject !== 'undefined') {
      }
    },
    exitFullScreen() {
      this.isFullScreen = false

      //取消全屏需要 document
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content_header {
  position: absolute;
  width: 100%;
  min-width: 1900px;
  padding: 0;
  top: 0;
  left: 0;
  .title {
    position: absolute;
    top: 12px;
    left: 50%;
    margin-left: -234px;
    font-size: 35px;
    z-index: 999;
  }
}
.header_png {
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  // left: 100px;
}
.header_text {
  position: absolute;
  top: 40px;
  left: 350px;
  z-index: 999;
}
.time {
  color: #a8bbd2;
  position: absolute;
  right: 50px;
  top: 20px;
  font-size: 16px;
  font-weight: 500;
}
.full {
  position: absolute;
  right: 20px;
  top: 22px;
  color: #ffffff;
  border-radius: 4px;
  padding: 1px;
  width: 24px;
  height: 24px;
}
.beartFont {
  font-family: DingTalk JinBuTi;
  font-weight: 200;
  letter-spacing: 1px;
  color: #f4fffe;
}
.faGuang {
  text-shadow: 0 0 4px #2C5CFF;
}
.header_logo_png{
  position: absolute;
  top: 15px;
  left: 35px;
  z-index: 999;
  width: 112px;
  display: block;
}
</style>

