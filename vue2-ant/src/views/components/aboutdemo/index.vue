<template>
  <div>
    <h1>父组件调用子组件的两种方式</h1>
  </div>
</template>
<script>
export default ({
  data(){
    return{
      
    }
  },
  mounted(){
    this.$on("sing", function(){
      this.sings()
    })
  },
  methods:{
    hello(){
      console.log('hello')
    },
    sings(){
      console.log('sing');
    }
    
  }
})
</script>

