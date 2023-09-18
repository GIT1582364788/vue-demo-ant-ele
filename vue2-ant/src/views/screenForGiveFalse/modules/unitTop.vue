<template>
  <TOP :url="url" :color="color" :title="title" ref="TOP"  />
</template>
  
<script>
import TOP from '../components/topthree'
export default {
  name: 'UnitTop',
  components:{TOP},
  data() {
    return {
      title:'产线单耗TOP3',
      url: '/provideScreen/productionLineUnitConsumptionTOP3',  // real url
      color:{
        c1:'rgb(150, 161, 214)',
        c2:'rgba(150, 161, 214, 0.5)'
      }
    }
  },
  methods:{
    changeNext(){
      this.$refs.TOP.changeNext()
    },
    getStart(){
      this.$refs.TOP.getStart()
    }
  }
}
</script>
  
<style lang="less" scoped>
</style>
  