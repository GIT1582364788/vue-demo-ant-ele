<template>
  <div class="screenBox">
    <div class="content">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
        :show-header="false"
      >
        <el-table-column prop="id" label="1" width="180"> </el-table-column>
        <el-table-column prop="name" label="2"> </el-table-column>
        <el-table-column prop="amount1" label="3"> </el-table-column>
        <el-table-column prop="amount2" label="4"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: "授信机构数",
          name: "1",
          amount1: "1",
          amount2: "反显",
        },
        {
          id: "高风险授信机构数",
          name: "1",
          amount1: "1",
          amount2: "反显",
        },
        {
          id: "垫款余额",
          name: "1",
          amount1: "1",
          amount2: "反显",
        },
        {
          id: "逾期本金",
          name: "1",
          amount1: "1",
          amount2: "反显",
        },
        {
          id: "逾期利息及其他",
          name: "1",
          amount1: "1",
          amount2: "反显",
        },
        {
          id: "风险分类信息",
          name: "一般授信机构",
          amount1: "正常类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "关注类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "不良类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "合计",
          amount2: "反显",
        },
        {
          id: "1",
          name: "高风险授信机构",
          amount1: "正常类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "关注类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "不良类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "合计",
          amount2: "反显",
        },
        {
          id: "对外担保",
          name: "1",
          amount1: "正常类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "关注类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "不良类",
          amount2: "反显",
        },
        {
          id: "1",
          name: "1",
          amount1: "合计",
          amount2: "反显",
        },
      ],
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if(rowIndex <= 4){
        if(columnIndex === 0){
          return [1, 3];
        }else if(columnIndex === 1 || columnIndex === 2){
          return [0, 0];
        }else{
          return [1, 1];
        }
      }
      if(rowIndex === 5){
        if(columnIndex === 0){
          return [8, 1];
        }else if(columnIndex === 1){
          return [4, 1];
        }else{
          return [1, 1];
        }
      }
      if(rowIndex === 9){
        if(columnIndex === 0){
          return [0, 0];
        }else if(columnIndex === 1){
          return [4, 1];
        }else{
          return [1, 1];
        }
      }
      if(rowIndex === 13){
        if(columnIndex === 0){
          return [4, 2];
        }else if(columnIndex === 1){
          return [0, 0];
        }else{
          return [1, 1];
        }
      }
      // 这个判断得放在最下面
      if(6 <= rowIndex <= 8 || 10 <= rowIndex <= 12 || 14 <= rowIndex <= 16){
        if(columnIndex === 0 || columnIndex === 1){
          return [0, 0];
        }else{
          return [1, 1];
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  margin-top: 20px;
  text-align: left;
}
</style>
