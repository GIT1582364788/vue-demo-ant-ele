<template>
  <div class="boxcontent">
    <CarbonHeadline :headtitle="title"></CarbonHeadline>
    <div class="energbox">
      <div class="tabbox">
        <div class="tabbox-item" v-for="(e, i) in tabArr" :key="i + 't'" :class="{ curTab: i == curIn }">
          {{ e.name }}
          <div v-if="i == curIn" class="curdiv"></div>
        </div>
      </div>
      <div class="timebox">
        <span class="sp" :style="{background:color.c1}"></span>{{queryParam.year}}
        <span class="sp sp1" :style="{background:color.c2}"></span>{{getYear(queryParam.year)}}
      </div>
      <a-carousel :dots="false" ref="carouselBox">
        <div v-for="(ee,ei) in barArr" :key="ei + 'autoplay'">
          <a-spin :spinning="ee.spinning">
            <div class="carouselPage">
              <div v-for="(item,index) in ee.pageList" :key="index+'TrendCard'">
                <TrendCard
                  :cardData="item"
                  :color="color"
                  :type="type"
                ></TrendCard>
              </div>
            </div>
          </a-spin>
        </div>
      </a-carousel>
    </div>
  </div>
</template>
  
<script>
import CarbonHeadline from '../modules/CarbonHeadline'
import TrendCard from './TrendCard'
import { getAction } from '@/api/manage'

export default {
  name: 'EnergyTop',
  components: {
    CarbonHeadline, TrendCard
  },
  data() {
    return {
      queryParam: {
        year: '',
      },
      barArr: [
        { 
          spinning:false,
          energy:'electricity',
          pageList:[]
        },
        { 
          spinning:false,
          energy:'natural_gas',
          pageList:[]
        },
        { 
          spinning:false,
          energy:'tap_w',
          pageList:[]
        },
        { 
          spinning:false,
          energy:'raw_w',
          pageList:[]
        },
        { 
          spinning:false,
          energy:'compressed_air',
          pageList:[]
        },
      ],
      tabArr: [
        {
          name: '电力',
        },
        {
          name: '天然气',
        },
        {
          name: '自来水',
        },
        {
          name: '原水',
        },
        {
          name: '压缩空气',
        },
      ],
      curIn: 0,
      type:'unit'
    }
  },
  props: {
    title:{
      type:String,
      default:''
    },
    url:{
      type:String,
      default:''
    },
    color:{
      type:Object,
      default:null
    }
  },
  inject:["headData"],
  created() {
    this.getStart()
  },
  methods: {
    getStart(){
      if (this.headData) {
        this.queryParam.year = this.headData().year
      }
      this.getList()
    },
    changeNext(){
      this.$nextTick(()=>{
        this.curIn = (this.curIn + 1) % this.tabArr.length
        this.$refs.carouselBox.next()
      })
    },
    getList() {  // fake function
      let data1 = [ // 产线能耗TOP3
          {
            "name": "6号线",
            "currentPeriodTce": "261",
            "currentPeriodEnergy": "13704",
            "priorPeriodTce": "124",
            "priorPeriodEnergy": "0"
          },
          {
            "name": "1号线",
            "currentPeriodTce": "241",
            "currentPeriodEnergy": "10006",
            "priorPeriodTce": "124",
            "priorPeriodEnergy": "0"
          },
          {
            "name": "2号线",
            "currentPeriodTce": "180",
            "currentPeriodEnergy": "9000",
            "priorPeriodTce": "124",
            "priorPeriodEnergy": "0"
          },
      ]
      let data = [ // 产线单耗TOP3
          {
            "name": "6号线",
            "value": "344",
            "value1": "124"
          },
          {
            "name": "1号线",
            "value": "243",
            "value1": "124"
          },
          {
            "name": "2号线",
            "value": "106",
            "value1": "50"
          },
      ]
      for (let i = 0; i < this.barArr.length; i++){
        let item = this.barArr[i]
        item.spinnig = true
        let success = true
        if (success) {
          let pageList
          if(this.title == '产线能耗TOP3'){
            this.type = 'energy'
            let units
            if(item.energy == 'electricity'){
              units = 'kW·h'
            }else{
              units = 'm³'
            }
            pageList = data1.map((ee)=>{
              return {
                name:ee.name,
                value:ee.currentPeriodTce,
                value1:ee.priorPeriodTce,
                currentPeriodEnergy:ee.currentPeriodEnergy + units,
                priorPeriodEnergy:ee.priorPeriodEnergy + units,
              }
            })
          }else{
            this.type = 'unit'
            pageList = data
          }
          let all_num = 0
          pageList.forEach(i=>{
            if (Number(i.value) > all_num){
              all_num = Number(i.value)
            }
            if (Number(i.value1) > all_num){
              all_num = Number(i.value1)
            }
          })
          pageList.forEach(i=>{
            i.v1 = Number(i.value)
            i.v2 = Number(i.value1)
            i.p1 = Number(i.value) / all_num * 100
            i.p2 = Number(i.value1) / all_num * 100
          })  
          item.pageList = pageList
        } else {
          item.pageList = []
          this.$message.warning(message)
        }
        item.spinnig = false
      }
    },
    async getLineData() {  // 最后改成getList
      return
      for (let i = 0; i < this.barArr.length; i++){
        let item = this.barArr[i]
        item.spinnig = true
        let obj = Object.assign(this.queryParam,{energy:item.energy})
        let { success, result, message } = await getAction(this.url, obj)
        if (success) {
          let pageList
          if(this.title == '产线能耗TOP3'){
            this.type = 'energy'
            let units
            if(item.energy == 'electricity'){
              units = 'kW·h'
            }else{
              units = 'm³'
            }
            pageList = result.data.map((ee)=>{
              return {
                name:ee.name,
                value:ee.currentPeriodTce,
                value1:ee.priorPeriodTce,
                currentPeriodEnergy:ee.currentPeriodEnergy + units,
                priorPeriodEnergy:ee.priorPeriodEnergy + units,
              }
            }) || []
          }else{
            this.type = 'unit'
            pageList = result.data || []
          }
          let all_num = 0
          pageList.forEach(i=>{
            if (Number(i.value) > all_num){
              all_num = Number(i.value)
            }
            if (Number(i.value1) > all_num){
              all_num = Number(i.value1)
            }
          })
          pageList.forEach(i=>{
            i.v1 = Number(i.value)
            i.v2 = Number(i.value1)
            i.p1 = Number(i.value) / all_num * 100
            i.p2 = Number(i.value1) / all_num * 100
          })  
          item.pageList = pageList
        } else {
          item.pageList = []
          this.$message.warning(message)
        }
        item.spinnig = false
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
    getYear(y) {
      let last = Number(y) - 1
      return last
    },
  },
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  .energbox {
    margin-top: 14px;
    .tabbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-item {
        position: relative;
        width: 70px;
        height: 24px;
        background: rgb(62, 73, 92);
        text-align: center;
        line-height: 24px;
        color: rgb(188, 199, 214);
        font-family: Source Han Sans CN;
        font-size: 14px;
        font-weight: 400;
      }
      .curTab {
        color: rgb(255, 255, 255);
        .curdiv::before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 10px;
          left: 0;
          top: 8.17px;
          background: rgb(220, 225, 220);
        }
        .curdiv::after {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 10px;
          right: 0;
          top: 8.17px;
          background: rgb(220, 225, 220);
        }

      }
    }
    .timebox{
      width: 100px;
      color: rgb(255, 255, 255);
      font-family: Source Han Sans CN;
      font-size: 12px;
      opacity: 0.9;
      margin: 14px auto 10px;
      display: flex;
      align-items: center;
      .sp{
        display:inline-block;
        width: 8px;
        height: 5px;
        margin-right: 4px;
      }
      .sp1{
        margin-left: 16px;
      }
    }
  }
  
}
.mt30 {
  margin-top: 30px;
}
</style>
  