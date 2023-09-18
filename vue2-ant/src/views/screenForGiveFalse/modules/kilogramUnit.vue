<template>
  <div class="EquipmentAnalysis">
    <headline headtitle="各产线公斤单位能耗" :styleShow="false" :longTpye="true"></headline>
    <div class="main">
      <a-spin :spinning="spinning">
        <a-carousel class="j-carousel" :dots="false" ref="carouselBox">
          <div v-for="i in Math.ceil(pageList.length / carouselNum) || 1" :key="i + 'autoplay'">
            <div class="carouselPage">
              <div v-for="(item, index) in pageList" :key="index + 'TrendCard'" class="carouselPage-con">
                <UnitCard v-if="index < i * carouselNum && index >= (i - 1) * carouselNum" :cardData="item"></UnitCard>
              </div>
            </div>
          </div>
        </a-carousel>
      </a-spin>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import headline from './CarbonHeadline'
import UnitCard from '../components/UnitCard.vue'
import moment from 'moment'
export default {
  name: 'KilogramUnit',
  components: {
    headline,
    UnitCard,
  },
  data() {
    return {
      url: {
        list: '/provideScreen/eachProductionLineUnitConsumption', 
      },
      queryParam: {
        year: '',
      },
      spinning: false,
      carouselNum: 3,
      pageList: [],
    }
  },
  props: {
    getHeadData: {
      type: Function,
      default: null,
    },
  },
  mounted() {
    this.getStart()
  },
  methods: {
    getStart() {
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
      let data = [
        {
          name: '六号线',
          nowData: {
            '2023-01-01 00:00:00': '180',
            '2023-02-01 00:00:00': '180',
            '2023-03-01 00:00:00': '180',
            '2023-04-01 00:00:00': '180',
            '2023-05-01 00:00:00': '180',
            '2023-06-01 00:00:00': '180',
            '2023-07-01 00:00:00': '180',
            '2023-08-01 00:00:00': '180',
            '2023-09-01 00:00:00': '180',
            '2023-10-01 00:00:00': '180',
            '2023-11-01 00:00:00': '180',
            '2023-12-01 00:00:00': '180',
          },
          lastData: {
            '2022-01-01 00:00:00': '200',
            '2022-02-01 00:00:00': '200',
            '2022-03-01 00:00:00': '200',
            '2022-04-01 00:00:00': '200',
            '2022-05-01 00:00:00': '200',
            '2022-06-01 00:00:00': '200',
            '2022-07-01 00:00:00': '200',
            '2022-08-01 00:00:00': '200',
            '2022-09-01 00:00:00': '200',
            '2022-10-01 00:00:00': '200',
            '2022-11-01 00:00:00': '200',
            '2022-12-01 00:00:00': '200',
          },
          unit: 'tce/t',
          xaxisList: [
            '2023-01-01 00:00:00',
            '2023-02-01 00:00:00',
            '2023-03-01 00:00:00',
            '2023-04-01 00:00:00',
            '2023-05-01 00:00:00',
            '2023-06-01 00:00:00',
            '2023-07-01 00:00:00',
            '2023-08-01 00:00:00',
            '2023-09-01 00:00:00',
            '2023-10-01 00:00:00',
            '2023-11-01 00:00:00',
            '2023-12-01 00:00:00',
          ],
        },
        {
          name: '一号线',
          nowData: {
            '2023-01-01 00:00:00': '180',
            '2023-02-01 00:00:00': '180',
            '2023-03-01 00:00:00': '180',
            '2023-04-01 00:00:00': '180',
            '2023-05-01 00:00:00': '180',
            '2023-06-01 00:00:00': '180',
            '2023-07-01 00:00:00': '234',
            '2023-08-01 00:00:00': '180',
            '2023-09-01 00:00:00': '180',
            '2023-10-01 00:00:00': '180',
            '2023-11-01 00:00:00': '180',
            '2023-12-01 00:00:00': '180',
          },
          lastData: {
            '2022-01-01 00:00:00': '200',
            '2022-02-01 00:00:00': '200',
            '2022-03-01 00:00:00': '200',
            '2022-04-01 00:00:00': '200',
            '2022-05-01 00:00:00': '200',
            '2022-06-01 00:00:00': '200',
            '2022-07-01 00:00:00': '200',
            '2022-08-01 00:00:00': '200',
            '2022-09-01 00:00:00': '200',
            '2022-10-01 00:00:00': '200',
            '2022-11-01 00:00:00': '200',
            '2022-12-01 00:00:00': '200',
          },
          unit: 'tce/t',
          xaxisList: [
            '2023-01-01 00:00:00',
            '2023-02-01 00:00:00',
            '2023-03-01 00:00:00',
            '2023-04-01 00:00:00',
            '2023-05-01 00:00:00',
            '2023-06-01 00:00:00',
            '2023-07-01 00:00:00',
            '2023-08-01 00:00:00',
            '2023-09-01 00:00:00',
            '2023-10-01 00:00:00',
            '2023-11-01 00:00:00',
            '2023-12-01 00:00:00',
          ],
        },
        {
          name: '二号线',
          nowData: {
            '2023-01-01 00:00:00': '180',
            '2023-02-01 00:00:00': '180',
            '2023-03-01 00:00:00': '180',
            '2023-04-01 00:00:00': '180',
            '2023-05-01 00:00:00': '180',
            '2023-06-01 00:00:00': '180',
            '2023-07-01 00:00:00': '234',
            '2023-08-01 00:00:00': '180',
            '2023-09-01 00:00:00': '180',
            '2023-10-01 00:00:00': '180',
            '2023-11-01 00:00:00': '180',
            '2023-12-01 00:00:00': '180',
          },
          lastData: {
            '2022-01-01 00:00:00': '200',
            '2022-02-01 00:00:00': '200',
            '2022-03-01 00:00:00': '200',
            '2022-04-01 00:00:00': '200',
            '2022-05-01 00:00:00': '200',
            '2022-06-01 00:00:00': '200',
            '2022-07-01 00:00:00': '200',
            '2022-08-01 00:00:00': '200',
            '2022-09-01 00:00:00': '200',
            '2022-10-01 00:00:00': '200',
            '2022-11-01 00:00:00': '200',
            '2022-12-01 00:00:00': '200',
          },
          unit: 'tce/t',
          xaxisList: [
            '2023-01-01 00:00:00',
            '2023-02-01 00:00:00',
            '2023-03-01 00:00:00',
            '2023-04-01 00:00:00',
            '2023-05-01 00:00:00',
            '2023-06-01 00:00:00',
            '2023-07-01 00:00:00',
            '2023-08-01 00:00:00',
            '2023-09-01 00:00:00',
            '2023-10-01 00:00:00',
            '2023-11-01 00:00:00',
            '2023-12-01 00:00:00',
          ],
        },
      ]
      let newdata = data.map((i)=>{
        let xaxis = i.xaxisList
        let d = []
        d = xaxis.map((j,ji)=>{
          let name = this.handleTime(j)
          return{
            name:name,
            now:i.nowData[j],
            last:Object.values(i.lastData)[ji]
          }
        })
        return {
          name: i.name,
          unit: i.unit,
          data: d
        }
      })
      this.pageList = newdata
    },
    async getLineData() {
      // 最后改成getList
      return
      this.spinnig = true
      let { success, result, message } = await getAction(this.url.list, this.queryParam)
      if (success) {
        let data = result.data || []
        let newdata = data.map((i)=>{
        let xaxis = i.xaxisList
        let d = []
        d = xaxis.map((j,ji)=>{
          let name = this.handleTime(j)
          return{
            name:name,
            now:i.nowData[j],
            last:Object.values(i.lastData)[ji]
          }
        })
        return {
          name: i.name,
          unit: i.unit,
          data: d
        }
      })
      this.pageList = newdata
      } else {
        this.pageList = []
        this.$message.warning(message)
      }
      this.spinnig = false
    },
    handleTime(data) {
      return moment(new Date(data)).format('M') + '月'
    },
  },
}
</script>

<style lang="less" scoped>
.EquipmentAnalysis {
  font-family: 'D-DIN';

  .main {
    padding: 4px 0 0;
    .carouselPage {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      &-con {
        width: 355px;
      }
    }
  }
  /deep/ .j-carousel .slick-dots-bottom {
    bottom: 0;
  }
  .content_name {
    text-align: right;
    color: #ffffff;
    font-size: 14px;
    background: #202835;
    line-height: 28px;
    padding: 0 20px;
    float: right;
  }
}
</style>

