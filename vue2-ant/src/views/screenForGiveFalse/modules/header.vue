<template>
  <div class="content_header">
    <img src="@/assets/screenForGive/page_header.png" alt="header_png" class="header_png" />
    <!-- <img src="~@/assets/largeScreen/logo-screen.png" alt="logo" class="header_logo_png" /> -->
    <div class="header_logo_png">
      <!-- 选择六号线 -->
      <!-- 选择年 - 默认当年 -->
      <a-select
        class="j-sreen-select"
        style="width: 80px"
        @change="selectChange"
        v-model="queryParam.orgCode"
        dropdownClassName="j-sreen-select-open"
        :dropdownStyle="dropdownMenuStyle"
        :dropdownMenuStyle="dropdownMenuStyle"
        :getPopupContainer="(trigger) => trigger.parentNode"
      >
        <a-select-option
          v-for="(item, i) in siteList"
          :key="i+'se_side'"
          :value="item.id"
        >{{item.name}}</a-select-option>
      </a-select>
      <div>
        <a-date-picker
          class="j-sreen-year"
          style="width: 100px"
          :allowClear="false"
          format="YYYY"
          placeholder="请选择年"
          :value="queryParam.year"
          mode="year"
          :open="isopen"
          @openChange="openChange"
          @panelChange="panelChange"
          :getCalendarContainer="(trigger) => trigger.parentNode"
        />
      </div>
    </div>
    <div style="color:white" class="title beartFont faGuang">戴卡能源数字化智控中心</div>
    <div class="time beartFont">{{ newTime }}</div>
    <div class="full">
      <a-icon type="poweroff" style="font-size: 16px;" v-if="!isFullScreen" @click="fullScreen" />
      <a-icon type="poweroff" style="font-size: 16px;" v-else @click="exitFullScreen" />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import moment from 'moment'
export default {
  data() {
    return {
      newTime: '',
      myTime: null,
      isFullScreen: false,
      queryParam: {
        orgCode: 'A01A03',
        year: moment(new Date()).format('YYYY')
      },
      siteList: [{ id: 'A01A03', name: '集团' }],
      isopen: false,
      dropdownMenuStyle: {
        color: '#BCC7D6',
        background: '#0d1215'
      }
      // background: #0d1215;
      // color: #BCC7D6;
    }
  },
  created() {
    this.setTime()
  },
  beforeDestroy() {
    clearInterval(this.myTime)
  },
  methods: {
    openChange(status) {
      if (status) {
        this.isopen = true
      } else {
        this.isopen = false
      }
    },
    panelChange(value) {
      this.queryParam.year = moment(new Date(value)).format('YYYY')

      this.isopen = false
      this.changeData()
    },
    selectChange(data) {
      this.queryParam.site = data
      this.changeData()
    },
    changeData() {
      this.$emit('change', this.queryParam)
    },
    getData() {
      return this.queryParam
    },
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

      const time = dayjs().format('HH:mm')
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
      var element = document.getElementById('largeScreenForUse')
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
    },
    moment
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
    top: 3px;
    left: 50%;
    margin-left: -204px;
    font-size: 40px;
    z-index: 999;
  }
}
.header_png {
  position: absolute;
  top: 0px;
  width: calc(100% - 40px);
  height: auto;
  left: 20px;
}
.header_text {
  position: absolute;
  top: 40px;
  left: 350px;
  z-index: 999;
}
.time {
  color: #bcc7d6;
  position: absolute;
  right: 65px;
  top: 15px;
  font-size: 16px;
  font-weight: 500;
}
.full {
  position: absolute;
  right: 30px;
  top: 16px;
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
  color: #bcc7d6;
}
.faGuang {
  text-shadow: 0 0 0 #ffffff;
  color: #ffffff;
}
.header_logo_png {
  position: absolute;
  top: 15px;
  left: 35px;
  z-index: 999;
  width: 112px;
  display: flex;
  color: #fff;
}
.content_header {
  /deep/ .j-sreen-select {
    color: #bcc7d6;
    font-size: 16px;
    .ant-select-selection {
      background: transparent;
      border: 1px solid transparent;
    }
    .ant-select-arrow {
      color: #bcc7d6;
    }
  }
  /deep/ .j-sreen-year {
    color: #bcc7d6;
    font-size: 16px;
    .ant-calendar-picker-input.ant-input {
      background: transparent;
      border: 1px solid transparent;
      color: #bcc7d6;
    }
    .ant-calendar-picker-icon {
      color: #bcc7d6;
    }
  }
}
</style>

