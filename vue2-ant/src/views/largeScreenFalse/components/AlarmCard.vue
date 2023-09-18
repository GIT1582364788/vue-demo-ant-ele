<template>
  <div class="AlarmCard">
    <div class="ac_item_1">
      <img class="img" src="~@/assets/largeScreen/r3_icon.png" />
    </div>
    <div class="ac_item_2">
      <div class="aci2_ban1">
        <a-tooltip>
          <template slot="title">{{cardData.pointName}}</template>
          {{cardData.pointName}}
        </a-tooltip>
      </div>
      <div class="aci2_ban2">{{cardData.time}}</div>
    </div>
    <div class="ac_item_3">
      <div class="aci3_btn" @click="clickBtn">查看</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmCard',
  data() {
    return {}
  },
  props: ['cardData'],
  methods: {
    clickBtn() {
      this.$emit('look', this.cardData)
    }
  }
}
</script>

<style lang="less" scoped>
.AlarmCard {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: row nowrap;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-image: url('~@/assets/largeScreen/r3_bg_01.png');
  padding: 12px 0 8px 0;
  margin-bottom: 8px;
  .ac_item_1 {
    margin-left: 20px;
    .img {
      display: block;
      width: 25px;
      height: auto;
    }
  }
  .ac_item_3 {
    width: 61px;
    margin-right: 10px;
    .aci3_btn {
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-image: url('~@/assets/largeScreen/r3_bg_02.png');
      width: 100%;
      font-size: 14px;
      color: #c4d7ee;
      text-align: center;
      padding: 3px 0;
      cursor: pointer;
    }
  }
  .ac_item_2 {
    width: calc(100% - 146px);
    margin: 0 10px 0 20px;
    font-size: 16px;
    color: #e4eaf2;
    .aci2_ban1 {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .aci2_ban2 {
      font-size: 14px;
      color: #adc9e9;
      font-family: 'D-DIN';
    }
  }
}
</style>
