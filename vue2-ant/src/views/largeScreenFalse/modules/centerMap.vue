<template>
  <div class="centerMap">
    <div v-for="(data1,i) in pageList1" :key="i+'d1'" :class="'device device_1_'+(i+1)">
      <div class="msgModle1 device_msg">
        <MapDeviceCard :cardData="{...data1, className: 'device_1_'+(i+1)}"></MapDeviceCard>
      </div>
      <!--  -->
      <img
        class="statusModle device_status"
        :src="'@/assets/largeScreen/map_device_0'+data1.status+'.png'"
      />
    </div>
    <div v-for="(data2,i) in pageList2" :key="i+'d2'" :class="'device device_2_'+(i+1)">
      <div class="msgModle2 device_msg">
        <MapDeviceCard :cardData="data2"></MapDeviceCard>
      </div>
      <img
        class="statusModle device_status"
        :src="'@/assets/largeScreen/map_device_0'+data2.status+'.png'"
      />
    </div>
    <img class="c_map_bottom" src="~@/assets/largeScreen/page_content_tuli.png" />
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import MapDeviceCard from '../components/MapDeviceCard'

export default {
  mounted() {
    this.getList()
    this.getStart()
  },
  data() {
    return {
      queryParam: {},
      url: {
        list: '/compressorSpectaculars/configurationDisplay'
      },
      spinning: false,
      pageList1: [],
      pageList2: [],
      time: 15000,
      chooseNumber: 0,
      setInterval15: null
    }
  },
  components: {
    MapDeviceCard
  },
  beforeDestroy() {
    if (this.setInterval15) {
      clearInterval(this.setInterval15)
    }
  },
  methods: {
    getList() {
      // this.spinning = true
      // getAction(this.url.list, {}).then(res => {
      //   if (res.success) {
      let res = {
        result: [
          // 1
          {
            deviceFunctionCategoryCode: 'dryer',
            name: '1#干燥机',
            pointArray: [
              {
                pointName: '进气压力',
                pointValue: '7.6 Bar'
              },
              {
                pointName: '出气压力',
                pointValue: '6.7 Bar'
              },
              {
                pointName: '运行电流',
                pointValue: '49.2 A'
              },
              {
                pointName: '运行功率',
                pointValue: '27.4 kW'
              },
              {
                pointName: '露点',
                pointValue: '-10 ℃'
              }
            ],
            status: 1
          },
          {
            deviceFunctionCategoryCode: 'dryer',
            name: '2#干燥机',
            pointArray: [
              {
                pointName: '进气压力',
                pointValue: '--'
              },
              {
                pointName: '出气压力',
                pointValue: '--'
              },
              {
                pointName: '运行电流',
                pointValue: '--'
              },
              {
                pointName: '运行功率',
                pointValue: '--'
              },
              {
                pointName: '露点',
                pointValue: '--'
              }
            ],
            status: 2
          },
          {
            deviceFunctionCategoryCode: 'dryer',
            name: '3#干燥机',
            pointArray: [
              {
                pointName: '进气压力',
                pointValue: '--'
              },
              {
                pointName: '出气压力',
                pointValue: '--'
              },
              {
                pointName: '运行电流',
                pointValue: '--'
              },
              {
                pointName: '运行功率',
                pointValue: '--'
              },
              {
                pointName: '露点',
                pointValue: '--'
              }
            ],
            status: 0
          },
          {
            deviceFunctionCategoryCode: 'dryer',
            name: '4#干燥机',
            pointArray: [
              {
                pointName: '进气压力',
                pointValue: '7.6 Bar'
              },
              {
                pointName: '出气压力',
                pointValue: '6.7 Bar'
              },
              {
                pointName: '运行电流',
                pointValue: '49.3 A'
              },
              {
                pointName: '运行功率',
                pointValue: '27.5 kW'
              },
              {
                pointName: '露点',
                pointValue: '-10 ℃'
              }
            ],
            status: 1
          },
          {
            deviceFunctionCategoryCode: 'dryer',
            name: '5#干燥机',
            pointArray: [
              {
                pointName: '进气压力',
                pointValue: '7.6 Bar'
              },
              {
                pointName: '出气压力',
                pointValue: '6.7 Bar'
              },
              {
                pointName: '运行电流',
                pointValue: '50.2 A'
              },
              {
                pointName: '运行功率',
                pointValue: '28.1 kW'
              },
              {
                pointName: '露点',
                pointValue: '-10 ℃'
              }
            ],
            status: 1
          },
          // 2
          {
            deviceFunctionCategoryCode: 'compressor',
            name: '1#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '98 A'
              },
              {
                pointName: '末级排气压力',
                pointValue: '7.8 Bar'
              },
              {
                pointName: '排气流量',
                pointValue: '230 Nm3/min'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '97%'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '0%'
              }
            ],
            status: 1
          },

          {
            deviceFunctionCategoryCode: 'compressor',
            name: '2#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '--'
              },
              {
                pointName: '末级排气压力',
                pointValue: '--'
              },
              {
                pointName: '排气流量',
                pointValue: '--'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '--'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '--'
              }
            ],
            status: 0
          },
          {
            deviceFunctionCategoryCode: 'compressor',
            name: '3#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '--'
              },
              {
                pointName: '末级排气压力',
                pointValue: '--'
              },
              {
                pointName: '排气流量',
                pointValue: '--'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '--'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '--'
              }
            ],
            status: 0
          },
          {
            deviceFunctionCategoryCode: 'compressor',
            name: '1#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '22 A'
              },
              {
                pointName: '末级排气压力',
                pointValue: '7.7 Bar'
              },
              {
                pointName: '排气流量',
                pointValue: '51.6 Nm3/min'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '50%'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '0%'
              }
            ],
            status: 2
          },
          {
            deviceFunctionCategoryCode: 'compressor',
            name: '8#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '44 A'
              },
              {
                pointName: '末级排气压力',
                pointValue: '7.7 Bar'
              },
              {
                pointName: '排气流量',
                pointValue: '94.2 Nm3/min'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '94%'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '0%'
              }
            ],
            status: 1
          },
          {
            deviceFunctionCategoryCode: 'compressor',
            name: '9#离心式空压机',
            pointArray: [
              {
                pointName: '马达电流',
                pointValue: '24 A'
              },
              {
                pointName: '末级排气压力',
                pointValue: '7.9 Bar'
              },
              {
                pointName: '排气流量',
                pointValue: '48.2 Nm3/min'
              },
              
              {
                pointName: '进气阀开度',
                pointValue: '80%'
              },
              {
                pointName: '卸放阀开度',
                pointValue: '12%'
              }
            ],
            status: 1
          },
        ]
      }
      this.pageList1 = []
      this.pageList2 = []
      res.result.forEach(item => {
        if (item.deviceFunctionCategoryCode == 'dryer') {
          this.pageList1.push(item)
        } else {
          this.pageList2.push(item)
        }
      })
      //   } else {
      //     this.pageList = []
      //     this.$message.error(res.message)
      //   }
      //   this.spinning = false
      // })
    },
    getStart() {
      this.setInterval15 = setInterval(() => {
        this.getList()
      }, this.time)
    },
    getClass(a) {
      if (a === this.chooseNumber) {
        return 'bg_fff005_2'
      } else if (a & (1 == 1)) {
        // printf("奇数");
        return ''
      } else {
        // printf("偶数");
        return 'bg_fff005'
      }
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
.centerMap {
  position: relative;
  width: 100%;
  min-height: 666px;
  // border: 1px solid red;
  .device > div,
  .device > img {
    position: absolute;
  }
  .msgModle1 {
    width: 110px;
  }
  .msgModle2 {
    width: 130px;
  }
  .statusModle {
    width: 25.5px;
    height: 25.5px;
    display: block;
  }
  .device_1_5 {
    .device_msg {
      top: 255px;
      left: 233px;
    }
    .device_status {
      top: 273px;
      left: 353px;
    }
  }
  .device_1_4 {
    .device_msg {
      top: 170px;
      left: 460px;
    }
    .device_status {
      top: 196px;
      left: 572px;
    }
  }
  .device_1_3 {
    .device_msg {
      top: 30px;
      right: 390px;
    }
    .device_status {
      top: 160px;
      right: 390px;
    }
  }
  .device_1_2 {
    .device_msg {
      top: 10px;
      right: 270px;
    }
    .device_status {
      top: 125px;
      right: 284px;
    }
  }
  .device_1_1 {
    .device_msg {
      top: 0;
      right: -15px;
    }
    .device_status {
      top: 89px;
      right: 185px;
    }
    .msgModle1 {
      width: 200px;
    }
  }

  // ===============================
  .device_2_6 {
    .device_msg {
      top: 530px;
      left: 220px;
    }
    .device_status {
      top: 482px;
      left: 201px;
    }
  }
  .device_2_5 {
    .device_msg {
      top: 520px;
      left: 360px;
    }
    .device_status {
      top: 444px;
      left: 304px;
    }
  }
  .device_2_4 {
    .device_msg {
      top: 470px;
      left: 500px;
    }
    .device_status {
      top: 409px;
      left: 404px;
    }
  }
  .device_2_3 {
    .device_msg {
      top: 400px;
      right: 260px;
    }
    .device_status {
      top: 246px;
      right: 252px;
    }
  }
  .device_2_2 {
    .device_msg {
      top: 360px;
      right: 120px;
    }
    .device_status {
      top: 210px;
      right: 150px;
    }
  }
  .device_2_1 {
    .device_msg {
      top: 310px;
      right: -20px;
    }
    .device_status {
      top: 174px;
      right: 49px;
    }
  }

  .c_map_bottom {
    width: 216px;
    display: block;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>

