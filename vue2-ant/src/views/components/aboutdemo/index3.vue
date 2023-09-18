<template>
  <div>
    <h1>祖孙组件传值：子组件</h1>
    <button @click="getmsg" >获取祖组件的值</button>
    <button @click="goback" >回传祖组件</button>

    <Son v-on="$listeners" />
  </div>
</template>
<script>
import Son from './index4.vue'

export default ({
  components:{Son},
  data(){
    return{
      
    }
  },
  inject:["msg"],
  watch:{
    "msg":{  // "msg.a"
      handler(value){
        console.log(value,'value');  // do something
      },
      deep:true
    }
  },
  mounted(){
    
  },
  methods:{
    getmsg(){
      console.log(this.msg,'子组件接收祖组件传来的值');
    },
    goback(){
      this.$emit("goback", this.msg)
    }
  }
})
</script>

