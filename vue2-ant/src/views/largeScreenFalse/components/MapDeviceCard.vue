<template>
  <div class="MapDeviceCard">
    <!-- cardData -->
    <div class="m_title">
      <div class="m_title_1">
        <div :class="'m_title_1_div '+ getColor(cardData.status)"></div>
        <div class="m_title_1_div_2"></div>
        <div :class="'m_title_1_div '+ getColor(cardData.status)"></div>
      </div>
      <div :class="'m_title_2 '+ getColor(cardData.status)">{{cardData.name}}</div>
    </div>
    <div
      :class="'m_content '+ cardData.className"
      v-if="cardData.deviceFunctionCategoryCode == 'dryer'"
    >
      <div>
        <a-tooltip>
          <template slot="title">进气压力：{{getPageShow('进气压力')}}</template>
          进气压力：{{getPageShow('进气压力')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">出气压力：{{getPageShow('出气压力')}}</template>
          出气压力：{{getPageShow('出气压力')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">运行电流：{{getPageShow('运行电流')}}</template>
          运行电流：{{getPageShow('运行电流')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">运行功率：{{getPageShow('运行功率')}}</template>
          运行功率：{{getPageShow('运行功率')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">露点：{{getPageShow('露点')}}</template>
          露点：{{getPageShow('露点')}}
        </a-tooltip>
      </div>
    </div>
    <div class="m_content" v-else>
      <div>
        <a-tooltip>
          <template slot="title">马达电流：{{getPageShow('马达电流')}}</template>
          马达电流：{{getPageShow('马达电流')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">末级排气压力：{{getPageShow('末级排气压力')}}</template>
          末级排气压力：{{getPageShow('末级排气压力')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">排气流量：{{getPageShow('排气流量')}}</template>
          排气流量：{{getPageShow('排气流量')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">进气阀开度：{{getPageShow('进气阀开度')}}</template>
          进气阀开度：{{getPageShow('进气阀开度')}}
        </a-tooltip>
      </div>
      <div>
        <a-tooltip>
          <template slot="title">卸放阀开度：{{getPageShow('卸放阀开度')}}</template>
          卸放阀开度：{{getPageShow('卸放阀开度')}}
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarbonHeadline',
  data() {
    return {}
  },
  props: ['cardData'],
  methods: {
    getPageShow(t) {
      let r_text = '--'
      if (this.cardData.pointArray && this.cardData.pointArray.length) {
        this.cardData.pointArray.forEach(item => {
          if (item.pointName.indexOf(t) !== -1) {
            r_text = item.pointValue
          }
        })
      }
      return r_text
    },
    getColor(status) {
      let r_data = 'bg_c_00'
      if (status === 1) {
        r_data = 'bg_c_01'
      } else if (status === 2) {
        r_data = 'bg_c_02'
      }
      return r_data
    }
  }
}
</script>

<style lang="less" scoped>
.MapDeviceCard {
  width: 100%;
  .m_title {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    .m_title_1 {
      width: 2px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      .m_title_1_div {
        width: 100%;
        height: 36%;
      }
      .m_title_1_div_2 {
        width: 100%;
        height: 2px;
      }
    }
    .m_title_2 {
      width: calc(100% - 2px);
      font-size: 14px;
      font-weight: 600;
      color: #000000;
      padding: 3px 8px;
    }
  }
  .m_content {
    color: #e4eaf2;
    font-size: 12px;
    font-family: D-DIN;
    padding: 6px 10px 8px 10px;
    margin-top: 2px;
    background: #2d354999;
  }
  .m_content>div{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .device_1_1 {
    display: flex;
    flex-flow: row wrap;
  }
  .device_1_1 > div {
    width: 50%;
  }
  // 预警
  .bg_c_02 {
    background: #fbd490;
  }
  // 运行
  .bg_c_01 {
    background: #b6fb84;
  }
  // 停止
  .bg_c_00 {
    background: #fd7636;
  }
}
</style>
