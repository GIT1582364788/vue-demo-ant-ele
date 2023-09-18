<template>
  <div class="boxcontent">
    <a-carousel ref="carouselBox" :dots="false" class="j-carousel" effect="fade">
      <div
        class="energbox"
        v-for="(e, i) in tabArr"
        :key="i"
        :style="{ background: 'url(' + e.image + ')', 'background-repeat': 'no-repeat', 'background-size': '100%' }"
      >
        <a-spin :spinning="spinning">
          <div class="energbox-con" :class="active">
            <p>{{ e.name }}</p>
            <div class="energbox-con-con">
              <div class="title">
                <div class="title-con" v-for="(ee, ii) in e.typeTab" :key="ii">
                  {{ ee.name }} ：
                  <span class="value">
                    <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
                      <template slot="title">{{ ee.value }}</template>
                      {{ ee.value }}
                    </a-tooltip>
                  </span>
                  <span class="unit">{{ ee.unit }}</span>
                </div>
              </div>
              <div class="con">
                <div class="con-item" v-for="(en, ei) in e.energArr" :key="ei">
                  <img :src="en.image" alt />
                  <span>{{ en.name }}</span>/
                  <span>{{ en.energyConsumption }}</span>/
                  <span>{{ en.energySingleExpend }}</span>
                </div>
              </div>
            </div>
          </div>
        </a-spin>
      </div>
    </a-carousel>
    <div class="btn">
      <div
        v-for="(e, i) in btnArr"
        :key="i + 'btn'"
        :class="{ curTab: i == curIn }"
        @click="btnClick(e, i)"
      >{{ e.name }}</div>
    </div>
  </div>
</template>
  
<script>
import moment from 'moment'
import { getAction } from '@/api/manage'

export default {
  name: 'Panoramacenter',
  components: {},
  data() {
    return {
      queryParam: {
        year: '',
        orgCode: '',
        frequency: 'year' // 默认年
      },
      tabArr: [
        {
          name: '热工车间',
          image: require('@/assets/screenForUse/center_map_01.jpg')
        },
        {
          name: '机加车间',
          image: require('@/assets/screenForUse/center_map_02.jpg')
        },
        {
          name: '涂装车间',
          image: require('@/assets/screenForUse/center_map_03.jpg')
        },
        {
          name: '包装车间',
          image: require('@/assets/screenForUse/center_map_04.jpg')
        }
      ],
      typeTab: [
        {
          name: '累计能耗',
          value: '',
          unit: ''
        },
        {
          name: '累计产量',
          value: '',
          unit: ''
        },
        {
          name: '能耗效率',
          value: '',
          unit: ''
        },
        {
          name: '单耗',
          value: '',
          unit: ''
        }
      ],
      energArr: [
        {
          name: '电力',
          image: require('@/assets/screenForUse/c_1.png')
        },
        {
          name: '天然气',
          image: require('@/assets/screenForUse/c_2.png')
        },
        {
          name: '自来水',
          image: require('@/assets/screenForUse/c_4.png')
        },
        {
          name: '原水',
          image: require('@/assets/screenForUse/c_5.png')
        },
        {
          name: '压缩空气',
          image: require('@/assets/screenForUse/c_3.png')
        }
      ],
      curIn: 0,
      btnArr: [
        {
          name: '年',
          frequency: 'year'
        },
        {
          name: '季',
          frequency: 'quarter'
        },
        {
          name: '月',
          frequency: 'month'
        }
      ],
      url: {
        list: '/useScreen/positionEnergyUse'
      },
      active: 'center0',
      curNum: 0,
      spinning: false
    }
  },
  props: {
    getHeadData: {
      type: Function,
      default: null
    }
  },
  created() {
    this.getStart()
  },
  methods: {
    getStart() {
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
        this.queryParam.orgCode = this.getHeadData().orgCode
      }
      this.getData()
    },
    changeNext() {
      this.curNum = (this.curNum + 1) % this.tabArr.length
      this.active = 'center' + this.curNum
      this.$refs.carouselBox.next()
    },
    btnClick(e, i) {
      // 点击年季月，轮播从头开始
      this.curIn = i
      this.queryParam.frequency = e.frequency
      this.getStart()
    },
    async getData() {
      let result = [
        {
          energyEfficiency: '0.22t/tce',
          energyMessageVOList: [
            {
              energyConsumption: '14551(kW·h)',
              energyName: '电力',
              energySingleExpend: '0(kW·h)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '天然气',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '自来水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '原水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '1500(m³)',
              energyName: '压缩空气',
              energySingleExpend: '0(m³)/t'
            }
          ],
          singleExpend: '132tce/t',
          totalEnergy: '122323tce',
          totalOutput: '123232323t',
          workshopName: '机加车间'
        },
        {
          energyEfficiency: '0.22t/tce',
          energyMessageVOList: [
            {
              energyConsumption: '12771(kW·h)',
              energyName: '电力',
              energySingleExpend: '0(kW·h)/t'
            },
            {
              energyConsumption: '20(m³)',
              energyName: '天然气',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0.22(m³)',
              energyName: '自来水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '30(m³)',
              energyName: '原水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '1500(m³)',
              energyName: '压缩空气',
              energySingleExpend: '0(m³)/t'
            }
          ],
          singleExpend: '132tce/t',
          totalEnergy: '122323tce',
          totalOutput: '123232323t',
          workshopName: '涂装车间'
        },
        {
          energyEfficiency: '0.22t/tce',
          energyMessageVOList: [
            {
              energyConsumption: '12771(kW·h)',
              energyName: '电力',
              energySingleExpend: '0(kW·h)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '天然气',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '自来水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '原水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '1500(m³)',
              energyName: '压缩空气',
              energySingleExpend: '0(m³)/t'
            }
          ],
          singleExpend: '132tce/t',
          totalEnergy: '122323tce',
          totalOutput: '123232323t',
          workshopName: '包装车间'
        },
        {
          energyEfficiency: '0.22t/tce',
          energyMessageVOList: [
            {
              energyConsumption: '12771(kW·h)',
              energyName: '电力',
              energySingleExpend: '0(kW·h)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '天然气',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '自来水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '0(m³)',
              energyName: '原水',
              energySingleExpend: '0(m³)/t'
            },
            {
              energyConsumption: '1500(m³)',
              energyName: '压缩空气',
              energySingleExpend: '0(m³)/t'
            }
          ],
          singleExpend: '132tce/t',
          totalEnergy: '122323tce',
          totalOutput: '123232323t',
          workshopName: '热工车间'
        }
      ]
      for (let i = 0; i < this.tabArr.length; i++) {
        let e = this.tabArr[i]
        let cur = result.find((re, ri) => {
          return e.name === re.workshopName
        })
        e.typeTab = this.typeTab.map((te, ti) => {
          let value, unit
          switch (ti) {
            case 0:
              value = this.cutNumAndUnit(cur.totalEnergy).n
              unit = this.cutNumAndUnit(cur.totalEnergy).s
              break
            case 1:
              value = this.cutNumAndUnit(cur.totalOutput).n
              unit = this.cutNumAndUnit(cur.totalOutput).s
              break
            case 2:
              value = this.cutNumAndUnit(cur.energyEfficiency).n
              unit = this.cutNumAndUnit(cur.energyEfficiency).s
              break
            case 3:
              value = this.cutNumAndUnit(cur.singleExpend).n
              unit = this.cutNumAndUnit(cur.singleExpend).s
              break
            default:
              break
          }
          return {
            name: te.name,
            value: value,
            unit: unit
          }
        })
        e.energArr = this.energArr.map((ee, ei) => {
          let curE = cur.energyMessageVOList.find((ce, ci) => {
            return ee.name === ce.energyName
          })
          return {
            name: ee.name,
            image: ee.image,
            energyConsumption: curE.energyConsumption,
            energySingleExpend: curE.energySingleExpend
          }
        })
      }
    },
    getNumTwo(num_0, n = 2) {
      let num = Number(num_0)
      var f = parseFloat(num)
      if (isNaN(f)) {
        return num
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
      var s = f.toString()
      var rs = s.indexOf('.')
      //判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + n) {
        s += '0'
      }
      return s
    },
    // 数量和单位分割
    cutNumAndUnit(s) {
      let r1, r2, d
      for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
          d = i
        }
      }
      if (d < s.length) {
        r1 = s.slice(0, d + 1)
        r2 = s.slice(d + 1)
      }
      return {
        n: r1,
        s: r2
      }
    }
  }
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  overflow: hidden;
  .energbox {
    width: 100%;
    height: 366px;
    padding: 0 20px;
    position: relative;
    .center0 {
      position: absolute;
      top: 80px;
      left: 38%;
    }
    .center1 {
      position: absolute;
      top: 80px;
      left: 67%;
    }
    .center2 {
      position: absolute;
      top: 80px;
      left: 30%;
    }
    .center3 {
      position: absolute;
      top: 80px;
      left: 45%;
    }
    &-con {
      width: 590px;
      height: 206px;
      background-image: url('~@/assets/screenForUse/center_3.png');
      padding: 5px 24px;
      p {
        margin: 0;
        padding: 0;
        color: rgb(255, 255, 255);
        font-family: DingTalk JinBuTi;
        font-size: 20px;
        margin-bottom: 33px;
      }
      &-con {
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-con {
            color: rgb(255, 255, 255);
            font-family: D-DIN;
            font-size: 13px;
            .value {
              color: rgb(253, 176, 33);
              font-size: 19px;
              display:inline-block;
              max-width: 52px;
              white-space:nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              vertical-align: bottom;
              line-height: 22px;
            }
            .unit {
              color: rgb(188, 199, 214);
              margin-left: 2px;
            }
          }
        }
        .con {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          justify-content: flex-start;
          &-item {
            width: 50%;
            color: rgb(188, 199, 214);
            font-family: D-DIN;
            font-size: 13px;
            margin-bottom: 3px;
            img {
              width: 24px;
              height: 24px;
              float: left;
            }
            span {
              display: inline-block;
              width: 70px;
              padding-left: 4px;
            }
          }
        }
      }
    }
  }
  .btn {
    float: right;
    padding: 0 20px;
    div {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #bcc7d6;
      font-size: 14px;
      font-family: Source Han Sans CN;
      margin-left: 8px;
      cursor: pointer;
      background-image: url('~@/assets/screenForUse/center_2.png');
    }
    .curTab {
      background-image: url('~@/assets/screenForUse/center_1.png');
      color: #fdb021;
    }
  }
}
.mt30 {
  margin-top: 30px;
}
/deep/ .j-carousel .slick-dots-bottom {
  bottom: 0;
}
</style>
  