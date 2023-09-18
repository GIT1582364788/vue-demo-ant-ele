<template>
  <div class="TrendCard">
    <div class="t_content">
      <div class="t_content_2">
        <div class="tc_1">
          <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
            <template slot="title">{{ cardData.name }}</template>
            {{ cardData.name }}
          </a-tooltip>
        </div>
        <!-- <div class="tc_2">{{cardData.unit}}</div> -->
      </div>
      <div class="tc_3">
        <span :style="{color:color.c1}">{{cardData.v1}}</span>
        /
        <span :style="{color:color.c2}">{{cardData.v2}}</span>
      </div>
    </div>
    <div class="t_progress">
      <a-progress  
        class="j-progress-e"
        :percent="cardData.p1"
        :show-info="false"
        stroke-linecap="square"
        :strokeColor="color.c1"
        :strokeWidth="4"
        v-if="type == 'unit'"
      />
      <div v-else>
        <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
          <template slot="title">{{ cardData.currentPeriodEnergy }}</template>
          <a-progress  
            class="j-progress-e"
            :percent="cardData.p1"
            :show-info="false"
            stroke-linecap="square"
            :strokeColor="color.c1"
            :strokeWidth="4"
          />
        </a-tooltip>
      </div>
    </div>
    <div class="t_progress">
      <a-progress
        class="j-progress-e"
        :percent="cardData.p2"
        :show-info="false"
        stroke-linecap="square"
        :strokeColor="color.c2"
        :strokeWidth="4"
        v-if="type == 'unit'"
      />
      <div v-else>
        <a-tooltip :getPopupContainer="(trigger) => trigger.parentNode">
          <template slot="title">{{ cardData.priorPeriodEnergy }}</template>
          <a-progress
          class="j-progress-e"
          :percent="cardData.p2"
          :show-info="false"
          stroke-linecap="square"
          :strokeColor="color.c2"
          :strokeWidth="4"
        />
        </a-tooltip>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrendCard',
  data() {
    return {}
  },
  props: ['cardData','color','type'],
  methods: {}
}
</script>

<style lang="less" scoped>
.TrendCard {
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 20px 0;
  .t_content {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .t_content_2 {
      display: flex;
      justify-content: start;
      align-items: baseline;
    }
    .tc_1 {
      color: #ffffff;
      font-size: 14px;
      max-width: 97px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tc_2 {
      color: #bcc7d6;
      font-size: 12px;
      margin: 0 5px;
    }
    .tc_3 {
      color: rgba(255, 255, 255, 0.3);
      font-size: 14px;
    }
  }
  .t_progress{
    line-height: 12px;
  }
  .j-progress-e {
    width: 100%;
    line-height: 12px;
  }
  /deep/ .j-progress-e .ant-progress-inner {
    border-radius: 0;
    background-color: #1e242a;
  }
}
</style>
