<template>
  <div class="screenBox">
    <div class="content">
      <Onlinetop />
      <Onlinemid />
    </div>
  </div>
</template>
<script>
import Onlinetop from '@/views/components/online/onlinetop.vue'
import Onlinemid from '@/views/components/online/onlinemid.vue'
export default {
  name: "Home",
  components:{
    Onlinetop, Onlinemid
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.content{
  margin-top: 20px;
  text-align: left;
}

</style>
