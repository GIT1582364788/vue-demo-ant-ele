<template>
  <div>
    <!--查询项 -->
    <a-form-model
      ref="formRef"
      :model="queryParam"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      layout="inline"
    > 
      <a-form-model-item label v-if="deviceArr.length != 0">
        <a-radio-group size="large" v-model="queryParam.dataType" @change="handleFrequencyChange">
          <a-radio-button :value="item.value" v-for="(item, index) in deviceArr" :key="index" :disabled="item.disabled">{{ item.title }}</a-radio-button>
        </a-radio-group>
      </a-form-model-item>

      <a-form-model-item label>
        <a-radio-group size="large" v-model="queryParam.frequency" @change="handleFrequencyChange">
          <a-radio-button value="day">日</a-radio-button>
          <a-radio-button value="month">月</a-radio-button>
          <a-radio-button value="year">年</a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label>
        <a-date-picker
          style="width: 130px"
          v-model="startValue"
          :allowClear="false"
          :disabled-date="disabledStartDate"
          format="YYYY-MM-DD"
          placeholder="开始日期"
          @openChange="handleStartOpenChange"
          size="large"
        />
        <span style="display: inline-block; margin: 0 5px">～</span>
        <a-date-picker
          style="width: 130px"
          v-model="endValue"
          :allowClear="false"
          :disabled-date="disabledEndDate"
          format="YYYY-MM-DD"
          placeholder="结束日期"
          :open="endOpen"
          @openChange="handleEndOpenChange"
          size="large"
        />
      </a-form-model-item>

      <span style="float: right; overflow: hidden" class="table-page-search-submitButtons">
        <a-button type="primary" @click="searchQuery">确定</a-button>
        <a-button @click="searchReset" style="margin-left: 12px">重置</a-button>
        <a-button style="margin-left: 12px" @click="handleExport" v-if="handleExportShow">导出报表</a-button>
      </span>
    </a-form-model>
  </div>
</template>
  
<script>
import moment from 'moment'

export default {
  data() {
    return {
      queryParam: {
        dataType:'compressor',  // 默认：空压机 compressor
        frequency: 'month', // 默认：月,
        endTime: `${moment(new Date()).format('YYYY-MM-DD')} 23:59:59`,
        startTime: `${moment(new Date()).format('YYYY-MM-DD')} 00:00:00`
      },
      rules: {},
      labelCol: { xs: { span: 24 }, sm: { span: 3 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 24 } },
      startValue: moment(new Date()),
      endValue: moment(new Date()),
      endOpen: false,
    }
  },
  props: {
    deviceArr: {
      type: Array,
      default: () => ([])
    },
    handleExportShow:{
      type: Boolean,
      default: false
    }
  },
  mounted(){
    this.handleFrequencyChange()
  },
  methods: {
    moment,
    handleFrequencyChange(value) {
      if (this.queryParam.frequency == 'day') {
        this.startValue = moment(new Date())
        this.endValue = moment(new Date())
      } else if (this.queryParam.frequency == 'month') {
        let date = new Date(),
          y = date.getFullYear(),
          m = date.getMonth()
        let firstDay = new Date(y, m, 1)
        let lastDay = new Date()
        this.startValue = moment(firstDay)
        this.endValue = moment(lastDay)
      } else if (this.queryParam.frequency == 'year') {
        let date = new Date(),
          y = date.getFullYear()
        let firstDay = new Date(y, 0, 1)
        let lastDay = new Date()
        this.startValue = moment(firstDay)
        this.endValue = moment(lastDay)
      }
      this.endOpen = false
      this.searchQuery()
    },
    searchQuery() {
      this.queryParam.startTime = `${this.startValue.format('YYYY-MM-DD')} 00:00:00`
      this.queryParam.endTime = `${this.endValue.format('YYYY-MM-DD')} 23:59:59`
      this.$emit('searchQuery',this.queryParam)  // 查询、重置
    },
    searchReset() {
      this.queryParam = {
        dataType:'compressor',  
        frequency: 'month', 
        endTime: `${moment(new Date()).format('YYYY-MM-DD')} 23:59:59`,
        startTime: `${moment(new Date()).format('YYYY-MM-DD')} 00:00:00`
      }
      this.handleFrequencyChange()
      this.searchQuery()
    },
    handleExport(){
      this.$emit('handleExport',this.queryParam)  // 导出
    },
    // 时间处理
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      if (this.queryParam.frequency == 'day') {
        return (
          endValue.valueOf() >= startValue.valueOf() + 31 * 24 * 60 * 60 * 1000 ||
          startValue.valueOf() > endValue.valueOf()
        )
      } else if (this.queryParam.frequency == 'month') {
        return (
          endValue.valueOf() > startValue.valueOf() + 365 * 24 * 60 * 60 * 1000 ||
          startValue.valueOf() >= endValue.valueOf() ||
          endValue.valueOf() > moment(new Date()).valueOf()
        )
      } else if (this.queryParam.frequency == 'year') {
        return startValue.valueOf() >= endValue.valueOf() || endValue.valueOf() > moment(new Date()).valueOf()
      }
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    },
  },
}
</script>
  
<style lang="less" scoped>
/deep/.ant-form-inline .ant-form-item{
  margin-right: 68px;
}
</style>>