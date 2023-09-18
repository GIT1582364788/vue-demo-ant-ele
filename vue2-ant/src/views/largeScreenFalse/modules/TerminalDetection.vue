<template>
  <div class="TerminalDetection">
    <headline headtitle="末端车间监测" headtitleEnglish="WORKSHOP"></headline>
    <div class="main">
      <a-carousel autoplay>
        <div v-for="i in Math.ceil(pageList.length/carouselNum)" :key="i+'autoplay'">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="table f_14"
            v-if="pageList && pageList.length"
          >
            <tr class="table_th">
              <td class="td_long">车间</td>
              <td>
                压力
                <span>Bar</span>
              </td>
              <td>
                流量
                <span>m3/h</span>
              </td>
            </tr>
            <template v-for="(item, ti) in pageList">
              <tr :key="ti+ 'table'" v-if="ti < i*carouselNum && ti >= (i-1)*carouselNum">
                <td class="td_long td_long_blod">
                  <a-tooltip>
                    <template slot="title">{{ item.name }}</template>
                    {{ item.name }}
                  </a-tooltip>
                </td>
                <td class="color_fff">
                  {{ item.data1 ? getNumTwo(item.data1) : '-- ' }}
                  <a-progress
                    class="j-progress-e"
                    :percent="item.data1_p"
                    :show-info="false"
                    stroke-linecap="square"
                    strokeColor="#9ABEFF"
                    :strokeWidth="4"
                  />
                </td>
                <td class="color_fff">
                  {{ item.data2 ? getNumTwo(item.data2) : '-- ' }}
                  <a-progress
                    class="j-progress-e"
                    :percent="item.data2_p"
                    :show-info="false"
                    stroke-linecap="square"
                    strokeColor="#4675B5"
                    :strokeWidth="4"
                  />
                </td>
              </tr>
            </template>
          </table>
          <div class="carousel_foot"></div>
        </div>
      </a-carousel>

      <div v-for="i in 4" :key="i+'border_wai'" :class="'border_wai border_wai_'+i"></div>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/api/manage'
import headline from './CarbonHeadline'
export default {
  components: {
    headline
  },
  data() {
    return {
      url: {
        accumulativePowerConsume: '/compressorSpectaculars/accumulativePowerConsume', // 流量
        endShopPressureMonitoring: '/compressorSpectaculars/endShopPressureMonitoring' // 压力
      },
      queryParam: {},
      pageList: [],
      spinning: false,
      carouselNum: 11
    }
  },

  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      let data1List = [
        { name: '一号线', value: '6.5' },
        { name: '研发车间', value: '6.5' },
        { name: '污水站一期', value: '6.6' },
        { name: '污水站二期', value: '6.5' },
        { name: '表面工程', value: '6.5' },
        { name: '锻造线', value: '6.5' },
        { name: '研发副车架一期', value: '6.4' },
        { name: '研发副车架二期', value: '6.4' },
        { name: '模具中心', value: '6.4' },
        { name: 'KAM', value: '6.5' },
        { name: '六号线', value: '6.5' },
      ]
      let data2List = [
        { name: '一号线', value: '9700' },
        { name: '研发车间', value: '430' },
        { name: '污水站一期', value: '60' },
        { name: '污水站二期', value: '65' },
        { name: '表面工程', value: '40' },
        { name: '锻造线', value: '400' },
        { name: '研发副车架一期', value: '70' },
        { name: '研发副车架二期', value: '60' },
        { name: '模具中心', value: '550' },
        { name: 'KAM', value: '6700' },
        { name: '六号线', value: '7400' },
      ]
      this.getData(data1List, data2List)
    },
    getData(data1, data2) {
      console.log('11111', data1, data2)
      let zhu_list = data1
      let fu_list = data2
      let r_list = []
      zhu_list.forEach(item => {
        fu_list.forEach(fuitem => {
          if (item.name === fuitem.name) {
            r_list.push({
              name: item.name,
              data1: item.value,
              data2: fuitem.value
            })
          }
        })
      })
      let all1 = 0
      let all2 = 0
      r_list.forEach(item => {
        all1 += Number(this.getNumTwo(item.data1))
        all2 += Number(this.getNumTwo(item.data2))
      })
      r_list.forEach(item => {
        item.data1_p = Number(this.getNumTwo((item.data1 / all1) * 100))
        item.data2_p = Number(this.getNumTwo((item.data2 / all2) * 100))
      })
      this.pageList = r_list
      console.log(r_list, all1, all2)
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
.TerminalDetection {
  font-family: 'D-DIN';
  .main {
    padding-top: 15px;
    font-size: 14px;
    position: relative;
    min-height: 454px;
    .table {
      width: 100%;
      text-align: left;
      background: #6885ba0d;
      color: #93adca;
      tr {
        border-bottom: 1px solid #879ec733;
      }
      td {
        padding: 6px 2px;
      }
      .kong_tr {
        height: 5px;
      }
      .td_long {
        text-align: left;
        padding-left: 20px;
      }
      .td_long_blod {
        font-weight: bold;
        max-width: 180px;
        min-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .table_th {
        font-size: 16px;
        color: #e4eaf2;
        background-repeat: no-repeat;
        background-position: center;
        background-size: calc(100% - 10px) calc(100% - 10px);
        background-image: url('~@/assets/largeScreen/r2_bg_1.png');
        td {
          padding: 8px 2px;
        }
        .td_long {
          text-align: left;
          padding-left: 20px;
        }
        span {
          font-size: 11px;
          color: #93adca;
          margin-left: 5px;
        }
      }
    }
    .border_wai {
      position: absolute;
      width: 4px;
      height: 3px;
      background: #d5ddfa66;
    }
    .border_wai_1 {
      top: 15px;
      left: 0;
    }
    .border_wai_2 {
      top: 15px;
      right: 0;
    }
    .border_wai_3 {
      bottom: 20px;
      left: 0;
    }
    .border_wai_4 {
      bottom: 20px;
      right: 0;
    }
    .carousel_foot {
      width: 100%;
      height: 15px;
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
.j-progress-e {
  width: 56px;
  margin-left: 5px;
  float: right;
  margin-right: 15px;
}
/deep/ .j-progress-e .ant-progress-inner {
  border-radius: 0;
  background-color: #ffffff14;
}
</style>

