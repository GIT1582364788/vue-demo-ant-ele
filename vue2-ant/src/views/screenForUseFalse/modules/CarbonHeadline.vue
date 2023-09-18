<template>
  <!-- 使用说明：1.名字传headtitle 2.默认是短款，长款传 longTpye=true 3.插槽默认居右 -->
  <div class="CarbonHeadline_wai">
    <div class="CarbonHeadline" :style="{backgroundImage: `url(${longTpye?bg_long:shortTpye?bg_short_too:bg_short})`}">
      <div class="ch_title">
        {{headtitle}}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarbonHeadline',
  data() {
    return {
      bg_short: require('@/assets/screenForUse/title_bg_short.png'),
      bg_long: require('@/assets/screenForUse/title_bg_long.png'),
      bg_short_too: require('@/assets/screenForUse/title_bg_short_too.png'),
    }
  },
  props: {
    headtitle: {
      type: String,
      default: ''
    },
    longTpye: {
      type: Boolean,
      default: false
    },
    shortTpye: {
      type: Boolean,
      default: false
    },
    styleShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.CarbonHeadline {
  width: 100%;
  height: 28px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  color: #FFFFFF;
  padding: 0 20px 5px 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  // margin: 0 20px;
}
.ch_title {
  font-size: 20px;
  font-family: DingTalk JinBuTi;
  font-weight: 200;
  letter-spacing: 1px;
}
.ch_title_englist {
  font-size: 20px;
  font-family: DingTalk JinBuTi;
  font-weight: 200;
  letter-spacing: 1px;
  color: #adc9e9;
  opacity: 0.13;
  margin-left: 10px;
}
.styleShow_png {
  width: 26px;
  height: auto;
  position: absolute;
  top: 4px;
  right: 15px;
}
.CarbonHeadline_wai{
  position: relative;
}
</style>
