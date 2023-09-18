<template>
  <div>
    <div class="boxcontent mt30">
      <CarbonHeadline headtitle="运行状态" headtitleEnglish="STATE"></CarbonHeadline>
      <div class="boxcontent-son">
        <div class="boxcontent-son-son" v-for="(item, index) in runningData" :key="index">
          <div class="runtitle">{{ item.deviceCategoryName }}</div>
          <div class="runcon">
            <div>
              运行<span class="coloron">{{ item.onLineCount ?  item.onLineCount : '--'}}</span>
            </div>
            <div>
              预警<span class="coloralert">{{ item.alertLineCount ?  item.alertLineCount : '--'}}</span>
            </div>
            <div class="runli">
              停止<span class="coloroff">{{ item.offLineCount ?  item.offLineCount : '--'}}</span>
            </div>
            <p class="bottomP"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import CarbonHeadline from './CarbonHeadline'
import { getAction } from '@/api/manage'

export default {
  name: 'Runningstate',
  components: {
    CarbonHeadline,
  },
  data() {
    return {
      runningData: [
        {
          alertLineCount: "1",
          deviceCategoryCode: "compressor",
          deviceCategoryName: "空压机",
          offLineCount: "2",
          onLineCount: "3",
        },
        {
        alertLineCount: "1",
        deviceCategoryCode: "dryer",
        deviceCategoryName: "干燥机",
        offLineCount: "1",
        onLineCount: "3",
      }],
      url: {
        runningtest: 'compressorSpectaculars/getDeviceRunningState',
      },
      myTime:null
    }
  },
  beforeDestroy() {
    // clearInterval(this.myTime)
  },
  created() {
    // this.getRunningtest()
    // this.setTime()
  },
  methods: {
    async getRunningtest() {
      let { success, result, message } = await getAction(this.url.runningtest)
      if (success) {
        this.runningData = result.reverse()
      } else {
        this.$message.warning(message)
      }
    },
    setTime(){
      this.myTime = setInterval(() => {
        this.getRunningtest()
      }, 15000)
    }
  },
}
</script>
  
<style lang="less" scoped>
.boxcontent {
  width: 100%;
  .env {
    height: 68px;
    .envson {
      background: url('~@/assets/largeScreen/test_background.png') no-repeat center/100% 100%;
    }
  }
  &-son {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    &-son {
      width: calc(50% - 7px);
      height: 100%;
      overflow: hidden;
      /*运行状态*/
      .runtitle {
        font-size: 18px;
        font-family: DingTalk JinBuTi, DingTalk JinBuTi-Regular;
        color: #e4eaf2;
        padding-left: 12px;
        height: 36px;
        line-height: 36px;
        background: url('~@/assets/largeScreen/running_title.png') no-repeat center/100% 100%;
      }
      .runcon {
        background: url('~@/assets/largeScreen/running_back.png') no-repeat center/100% 100%;
        margin-top: 9px;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        color: #93adca;
        letter-spacing: 0.51px;
        div {
          border-bottom: 1px solid rgba(135, 158, 199, 0.2);
          height: 50px;
          line-height: 50px;
          padding: 0 17px 0 8px;
          span {
            float: right;
          }
          .coloron {
            color: #b6fb84;
          }
          .coloralert {
            color: #fbd490;
          }
          .coloroff {
            color: #fd7636;
          }
        }
        .runli {
          border-bottom: none;
        }
        .bottomP {
          width: 100%;
          height: 6px;
          padding: 0;
          margin: 0;
          background: url('~@/assets/largeScreen/running_bottom.png') no-repeat center/100% 100%;
        }
      }
    }
  }
}
.mt30 {
  margin-top: 30px;
}
</style>
  