<template>
  <div>
    <h1>祖孙组件传值：孙子组件</h1>
    <button @click="getmsg" >获取曾祖组件的值</button>
    <button @click="goback" >回传曾祖组件</button>
  </div>
</template>
<script>
export default ({
  data(){
    return{
      
    }
  },
  inject:["msg"],
  mounted(){
    
  },
  methods:{
    getmsg(){
      console.log(this.msg,'孙子组件接收曾祖组件传来的值');
    },
    goback(){
      this.$emit("goback2", this.msg)
    }
  }
})
</script>

