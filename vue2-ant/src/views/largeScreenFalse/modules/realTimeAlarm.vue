<template>
  <div class="realTimeAlarm">
    <headline headtitle="实时报警" headtitleEnglish="ALARM" :styleShow="false">
      <div class="head_btn" @click="lookList">
        <span class="head_btn_text">{{pageList.length}}个</span>
        <a class="head_btn_a">展开</a>
      </div>
    </headline>
    <div class="main">
      <!-- spinning -->
      <a-spin :spinning="spinning">
        <a-carousel autoplay>
          <div v-for="i in (Math.ceil(pageList.length/carouselNum) || 1)" :key="i+'autoplay'">
            <div v-for="(item,index) in pageList" :key="index+'AlarmCard'">
              <AlarmCard
                v-if="index < i*carouselNum && index >= (i-1)*carouselNum"
                :cardData="item"
                @look="cardClick($event)"
              ></AlarmCard>
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
import AlarmCard from '../components/AlarmCard'
export default {
  components: {
    headline,
    AlarmCard
  },
  data() {
    return {
      url: {
        realTimeAlarm: '/compressorSpectaculars/realTimeAlarm'
      },
      queryParam: {},
      pageList: [],
      spinning: false,
      carouselNum: 3
    }
  },

  mounted() {
    this.getList()
  },
  methods: {
    lookList() {
      // 跳转列表
      // /airCompressor/alarm
      this.$router.push({
        path: '/airCompressor/alarm'
      })
    },
    cardClick(data) {
      // 跳转详情
      console.log(data, '查看')
      this.$router.push({
        path: '/airCompressor/details/device',
        query: { pointId: data.pointId, pointName: data.pointName, dateStr: data.time }
      })
    },
    getList() {
      // this.pageList = []
      // this.spinning = true
      // getAction(this.url.realTimeAlarm, {}).then(res => {
      // console.log('实时报警', res)
      // if (res.success) {
      this.pageList = [
        {
          pointId: 188,
          pointName: '1#空压机：冷却出水温度过高',
          time: '2023-03-15 14:41:56'
        },
        {
          pointId: 188,
          pointName: '1#空压机：冷却出水温度过高',
          time: '2023-03-15 14:41:56'
        },
        {
          pointId: 188,
          pointName: '1#空压机：冷却出水温度过高',
          time: '2023-03-15 14:41:56'
        }
      ]
      this.$forceUpdate()
      // } else {
      //   this.pageList = []
      //   this.$message.error(res.message)
      // }
      // this.$nextTick(() => {
      //   this.spinning = false
      // })
      // })
    },
    getStart() {
      this.setInterval15 = setInterval(() => {
        if (this.chooseNumber < this.pageList.length - 1) {
          this.chooseNumber++
        } else {
          this.chooseNumber = 0
        }
      }, this.time)
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
.realTimeAlarm {
  font-family: 'D-DIN';
  .head_btn {
    margin-top: -10px;
    cursor: pointer;
    .head_btn_text {
      font-size: 24px;
      color: #fbd490;
      letter-spacing: 3px;
    }
    .head_btn_a {
      font-size: 14px;
      color: #c4d7ee;
      margin-left: 5px;
    }
  }

  .main {
    padding: 15px 0 0 0;
    min-height: 238px;
    .carousel_foot {
      width: 100%;
      height: 10px;
    }
  }
}

/deep/ .ant-radio-group {
  .ant-radio-button-wrapper {
    border: 0;
    margin-left: 5px;
    background-color: #083a3e;
    border: 1px solid;
    border-color: #0fd3cb;
    border-radius: 2px;
    color: #f4fffe;
    &::before {
      display: none;
    }
  }
  .ant-radio-button-wrapper-checked {
    background-color: #25140a;
    border: 1px solid;
    border-color: #ff8251;
    border-radius: 2px;
    color: #ffffff;
  }
}
.pie_tip_wai::-webkit-scrollbar {
  width: 2px !important;
}
.pie_tip_wai::-webkit-scrollbar-track {
  background: transparent !important;
}
.pie_tip_wai::-webkit-scrollbar-thumb {
  background: #0ee6dd !important;
}
// IE 10+
.pie_tip_wai {
  -ms-overflow-style: none;
}
// Firefox
.pie_tip_wai {
  overflow: -moz-scrollbars-none;
}
</style>

