<template>
  <div>
    <div class="boxcontent">
      <CarbonHeadline headtitle="站房环境监测" headtitleEnglish="ENVIRONMENT"></CarbonHeadline>
      <div class="boxcontent-son env">
        <div class="boxcontent-son-son envson">
          <div class="imgbox">
            <img src="@/assets/largeScreen/test_l.png" alt="" />
          </div>
          <div class="textbox">
            <p class="title">温度</p>
            <p class="con">{{ testData.B0001 ? testData.B0001 : '--'}}</p>
          </div>
        </div>
        <div class="boxcontent-son-son envson">
          <div class="imgbox">
            <img src="@/assets/largeScreen/test_r.png" alt="" />
          </div>
          <div class="textbox">
            <p class="title">大气压力</p>
            <p class="con colorG">{{ testData.B0002 ? testData.B0002 : '--' }}</p>
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
  name: 'Environmenttest',
  components: {
    CarbonHeadline,
  },
  data() {
    return {
      testData: {
        B0001: "30℃",
        B0002: "1.01Bar"
      },
      url: {
        envtest: 'compressorSpectaculars/stationSurroundingsMonitor',
      },
      myTime:null
    }
  },
  beforeDestroy() {
    // clearInterval(this.myTime)
  },
  created() {
    // this.getEnvtest()
    // this.setTime()
  },
  methods: {
    async getEnvtest() {
      let { success, result, message } = await getAction(this.url.envtest)
      if (success) {
        this.testData = result
      } else {
        this.$message.warning(message)
      }
    },
    setTime(){
      this.myTime = setInterval(() => {
        this.getEnvtest()
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
      /*站房环境监测*/
      .imgbox {
        width: 68px;
        height: 100%;
        float: left;
        background: rgba(104, 133, 186, 0.2);
        text-align: center;
        img {
          height: 100%;
        }
      }
      .textbox {
        overflow: hidden;
        padding-left: 18px;
        height: 100%;
        background: url('~@/assets/largeScreen/test_back.png') no-repeat center/100% 100%;
        p {
          margin: 0;
          padding: 0;
        }
        .title {
          font-size: 18px;
          font-family: Helvetica, Helvetica-Regular;
          font-weight: 400;
          color: #adc9e9;
          margin-top: 4px;
        }
        .con {
          font-size: 24px;
          font-family: D-DIN, D-DIN-DIN-Bold;
          font-weight: normal;
          color: #fbd490;
        }
        .colorG {
          color: #b6fb84;
        }
      }
    }
  }
}
</style>
  