<template>
  <div class="boxcontent">
    <CarbonHeadline headtitle="重点用能设备"></CarbonHeadline>
    <div class="energbox">
      <a-spin :spinning="spinning">
        <a-carousel class="j-carousel" :dots="false" ref="carouselBox">
          <div v-for="i in Math.ceil(pageList.length / carouselNum) || 1" :key="i + 'autoplay'">
            <div class="carouselPage">
              <div v-for="(item, index) in pageList" :key="index + 'TrendCard'" class="carouselPage-con">
                <EquipCard v-if="index < i * carouselNum && index >= (i - 1) * carouselNum" :cardData="item" />
              </div>
            </div>
          </div>
        </a-carousel>
      </a-spin>
    </div>
  </div>
</template>
  
<script>
import CarbonHeadline from './CarbonHeadline'
import EquipCard from '../components/EquipCard'
import { getAction } from '@/api/manage'

export default {
  name: 'KeyEquipment',
  components: {
    CarbonHeadline,EquipCard
  },
  data() {
    return {
      queryParam: {
        year: '',
      },
      spinning:false,
      pageList:[],
      carouselNum:3,
      url:'/provideScreen/focusEnergyUseEquipment'
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
    getStart(){
      if (this.getHeadData) {
        this.queryParam.year = this.getHeadData().year
      }
      this.getList()
    },
    changeNext() {
      this.$nextTick(() => {
        this.$refs.carouselBox.next()
      })
    },
    getList() {
      // fake function
      let backdata = [{
        name: '塔式熔化炉',
        nowData: {
          '六号线':'54363',
          '一号线':'54363',
          '二号线':'54363',
          '凯斯曼':'54363',
          '锻造线':'54363',
          '研发线':'54363',
        },
        lastData:{
          '六号线':'53423',
          '一号线':'23423',
          '二号线':'23423',
          '凯斯曼':'23423',
          '锻造线':'23423',
          '研发线':'23423',
        },
        "unit": "tce/t",},
        {
        name: '铝屑炉',
        nowData: {
          '六号线':'54363',
          '一号线':'54363',
          '二号线':'54363',
          '凯斯曼':'54363',
          '锻造线':'54363',
          '研发线':'54363',
        },
        lastData:{
          '六号线':'53423',
          '一号线':'23423',
          '二号线':'23423',
          '凯斯曼':'23423',
          '锻造线':'23423',
          '研发线':'23423',
        },
        "unit": "tce/t",},
        {
        name: '固溶炉',
        nowData: {
          '六号线':'54363',
          '一号线':'54363',
          '二号线':'54363',
          '凯斯曼':'54363',
          '锻造线':'54363',
          '研发线':'54363',
        },
        lastData:{
          '六号线':'53423',
          '一号线':'23423',
          '二号线':'23423',
          '凯斯曼':'23423',
          '锻造线':'23423',
          '研发线':'23423',
        },
        "unit": "tce/t",},
      ]
      let data = backdata.map((e,i)=>{
        let energdata = [], unitdata = []
        for(let ii in e.nowData){
          energdata.push({
            name:ii,
            value:e.nowData[ii]
          })
        }
        for(let ii in e.lastData){
          unitdata.push({
            name:ii,
            value:e.lastData[ii]
          })
        }
        return {
          title:e.name,
          energData:energdata,
          unitData:unitdata,
          unit:e.unit
        }
      })
      this.pageList = data
    },
    getPieData() {  // 最后改成getList
      return
      this.spinning = true
      getAction(this.url,this.queryParam)
        .then((res) => {
          let { success, result, message } = res
          if (success) {
            let data = result.data.map((e,i)=>{
            let energdata = [], unitdata = []
            for(let ii in e.nowData){
              energdata.push({
                name:ii,
                value:e.nowData[ii]
              })
            }
            for(let ii in e.lastData){
              unitdata.push({
                name:ii,
                value:e.lastData[ii]
              })
            }
            return {
              title:e.name,
              energData:energdata,
              unitData:unitdata,
              unit:e.unit
            }
          })
          this.pageList = data
          } else {
            this.$message.warning(message)
          }
        })
        .finally(() => {
          this.spinning = false
        })
    },

  },
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  .energbox {
    .carouselPage {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      &-con {
        width: 100%;
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  