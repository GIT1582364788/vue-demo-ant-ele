<template>
  <div class="MapCard">
    <div v-if="loogShow" class="box_open">
      <!-- dakai  -->
      <div class="ba_img">
        <img class="img" :src="require('@/assets/screenForGive/centerMap_box_3.png')" />
      </div>
      <div class="bc_right">
        <div>
          <div class="bc_name">
            {{cardData.name}}
            <span class="bc_kong"></span>
            {{cardData.data.value}}
            <span class="bc_unit">tce</span>
            {{cardData.data.pre}}%
          </div>
        </div>
        <div class="bc_type">
          <div
            class="bc_type_item"
            v-for="index in Math.ceil(cardData.data.type.length / 2)"
            :key="index+ 'd'"
          >
            <span
              class="bct_span"
            >{{cardData.data.type[(index-1)*2].name}}： {{cardData.data.type[(index-1)*2].value}}
            {{cardData.data.type[(index-1)*2].unit}} {{cardData.data.type[(index-1)*2].pre}}%</span>
            <span
              class="bct_span"
              v-if="cardData.data.type.length>=((index-1)*2+2)"
            >{{cardData.data.type[(index-1)*2+1].name}}： {{cardData.data.type[(index-1)*2+1].value}}
             {{cardData.data.type[(index-1)*2+1].unit}} {{cardData.data.type[(index-1)*2+1].pre}}%</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box_close">
      <div class="bc_name">{{cardData.name}}</div>
      <div class="ba_img">
        <img class="img" :src="require('@/assets/screenForGive/centerMap_box_1.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapCard',
  data() {
    return {}
  },
  props: ['cardData', 'loogShow'],
  methods: {}
}
</script>

<style lang="less" scoped>
.MapCard {
  width: 100%;
  font-weight: 600;
  .box_close {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .bc_name {
      color: #ffffff;
      font-size: 12px;
      background: rgba(12, 16, 27, 0.5);
    }
  }
  .box_open {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    margin-top: -102px;
    margin-left: -7px;
    .bc_right {
      margin-left: -6px;
      margin-top: -6px;
    }
    .bc_name {
      font-size: 14px;
      background: #fc9921;
      padding: 3px 8px;
      display: inline-block;
    }
    .bc_unit {
      opacity: 0.3;
    }
    .bc_kong {
      width: 15px;
      height: 1px;
    }
    .bc_type {
      background: rgba(45, 53, 73, 0.8);
      margin-top: 5px;
      color: #fff;
      font-size: 13px;

      display: inline-block;
      flex-flow: row wrap;
      justify-content: space-between;
      .bc_type_item {
        // width: calc(50% - 8px);
        padding: 3px 8px;
      }
      .bct_span {
        min-width: 150px;
        display: inline-block;
      }
    }
  }
}
</style>
