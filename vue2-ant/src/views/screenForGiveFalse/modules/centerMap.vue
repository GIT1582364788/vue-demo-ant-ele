<template>
  <div class="centerMap" @click="clickMap">
    <div class="banner_head">
      <div class="bh_box" v-for="(item, i) in headData" :key="i+'bh1'">
        <div>
          <img class="img" :src="require('@/assets/screenForGive/centerMap_head_'+(i+1)+'.png')" />
        </div>
        <div>
          <div>{{item.name}}</div>
          <div>
            <span class="bh_value">{{item.value}}</span>
            {{item.unit}}
          </div>
        </div>
      </div>
    </div>
    <div
      class="yt_box"
      v-for="(item, i) in pageData"
      :key="i+'yt_box'"
      :style="`top: ${item.top}px;left: ${item.left}px;z-index: ${chooseNumber === i?10:1};`"
      @click="chooseBox(item, i)"
    >
      <MapCard :cardData="item" :loogShow="chooseNumber === i"></MapCard>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import MapCard from '../components/MapDeviceCard'

export default {
  mounted() {
    // this.getList()
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
      time: 10 * 1000,
      chooseNumber: 0,
      setInterval15: null,
      // 6-12
      headData: [
        {
          name: '用电',
          value: '23569.14',
          unit: 'kwh'
        },
        {
          name: '天然气',
          value: '23569.14',
          unit: 'm³'
        },
        {
          name: '压缩空气',
          value: '23569.14',
          unit: 'm³'
        },
        {
          name: '自来水',
          value: '23569.14',
          unit: 'm³'
        },
        {
          name: '原水',
          value: '23569.14',
          unit: 'm³'
        }
      ],
      pageData: [
        {
          name: '凯斯曼',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³', pre: 30 }
            ]
          },
          top: 208,
          left: 80
        },
        {
          name: '110站',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 180,
          left: 191
        },
        {
          name: '模具中心',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 162,
          left: 228
        },
        {
          name: '昆仑燃气',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 192,
          left: 319
        },

        {
          name: '副车架二期',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 206,
          left: 238
        },
        {
          name: '副车架一期',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 222,
          left: 294
        },
        {
          name: '一号食堂',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 275,
          left: 148
        },
        {
          name: '热交换站',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 274,
          left: 213
        },
        {
          name: '污水一期',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 283,
          left: 269
        },
        {
          name: '污水二期',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 307,
          left: 247
        },
        {
          name: '综合站房',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 333,
          left: 224
        },
        {
          name: '六号线',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 295,
          left: 407
        },
        {
          name: '锻造车间',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 332,
          left: 322
        },
        {
          name: '表面工程',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 371,
          left: 319
        },
        {
          name: '一号线',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 374,
          left: 229
        },
        {
          name: '研发中心',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 404,
          left: 401
        },
        {
          name: '微卡车间',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 302,
          left: 619
        },
        {
          name: '宿舍',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 350,
          left: 760
        },
        {
          name: '食堂',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 390,
          left: 718
        },
        {
          name: '综合办公楼',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 486,
          left: 517
        },
        {
          name: '试验中心',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 495,
          left: 750
        },
        {
          name: '展示大厅',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 566,
          left: 651
        },
        {
          name: '信越车间',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 484,
          left: 959
        },
        {
          name: '信越办公楼',
          data: {
            value: 2560,
            pre: 26,
            type: [
              { name: '用电', value: '985512', unit: 'kWh', pre: 30 },
              { name: '用水', value: '7788', unit: 'm³', pre: 30 },
              { name: '天然气', value: '6533', unit: 'm³', pre: 30 },
              { name: '压缩空气', value: '5366', unit: 'm³' , pre: 40}
            ]
          },
          top: 505,
          left: 880
        },
      ]
    }
  },
  components: {
    MapCard
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
      //     this.pageList1 = []
      //     this.pageList2 = []
      //     res.result.forEach(item => {
      //       if (item.deviceFunctionCategoryCode == 'dryer') {
      //         this.pageList1.push(item)
      //       } else {
      //         this.pageList2.push(item)
      //       }
      //     })
      //   } else {
      //     this.pageList = []
      //     this.$message.error(res.message)
      //   }
      //   this.spinning = false
      // })
    },
    getStart() {
      this.setInterval15 = setInterval(() => {
        // this.getList()
        if(this.chooseNumber === this.pageData.length -1){
          this.chooseNumber = 0
        } else {
          this.chooseNumber = this.chooseNumber + 1
        }
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
    },
    chooseBox(data, i) {
      if (this.chooseNumber === i) {
        this.chooseNumber = null
      } else {
        this.chooseNumber = i
      }
    },
    clickMap(data) {
      console.log('top:', data.layerY)
      console.log('left:', data.layerX)
    }
  }
}
</script>

<style lang="less" scoped>
.centerMap {
  font-family: 'D-DIN';
  position: relative;
  width: 100%;
  min-height: 740px;
  // border: 1px solid red;
  .banner_head {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bcc7d6;
    font-size: 14px;
    .bh_box {
      display: flex;
      align-items: center;
      padding: 40px 20px 0 20px;
      .img {
        display: block;
        width: 33px;
        height: auto;
        margin-right: 15px;
      }
      .bh_value {
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .yt_box {
    position: absolute;
  }
}
</style>

