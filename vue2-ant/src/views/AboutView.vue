<template>
  <div class="screenBox">
    <h1>1.父组件调用子组件方法：父组件</h1>
    <a-button type="primary" @click="getdemo">点击</a-button>
    <Aboutdemo ref="aboutdemoRef" />

    <h1>2.祖孙组件传值：祖组件</h1>
    <a-button type="primary" @click="change">改变toData的值</a-button>
    <Father @goback="goback" @goback2="goback2"/>


  </div>
</template>
<script>
import Aboutdemo from './components/aboutdemo'
import Father from './components/aboutdemo/index2.vue'
export default ({
  components:{
    Aboutdemo, Father
  },
  data(){
    return{
      toData:{
        a:{
          name:'tom',
          gender:'male'
        },
        b:'b'
      }
    }
  },
  provide(){
    return {
      msg:this.toData
    }
  },
  methods:{
    getdemo(){
      // method one
      this.$refs.aboutdemoRef.hello()
      // method two
      this.$refs.aboutdemoRef.$emit("sing")
    },
    change(){
      this.toData.a = {
        name:'Amy'
      }
    },
    goback(data){
      console.log('子组件回来的值：',data);
    },
    goback2(data){
      console.log('孙子组件回来的值：',data);
    }

  }
})
</script>

