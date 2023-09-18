<template>
  <TOP :url="url" :color="color" :title="title" ref="TOP"  />
</template>
  
<script>
import TOP from '../components/topthree'
export default {
  name: 'EnergyTop',
  components:{TOP},
  data() {
    return {
      title:'产线能耗TOP3',
      url: '/provideScreen/productionLineConsumptionTOP3',  // real url
      color:{
        c1:'rgb(253, 176, 33)',
        c2:'rgba(253, 176, 33, 0.5)'
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
  