<template>
  <div>
    <h1>祖孙组件传值：父组件</h1>
    <Son v-on="$listeners" />
  </div>
</template>
<script>
import Son from './index3.vue'

export default ({
  components:{Son},
  data(){
    return{
      
    }
  },
  mounted(){
    
  },
  methods:{
    
    
  }
})
</script>

