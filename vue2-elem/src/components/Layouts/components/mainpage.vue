<template>
  <div class="otherScroll" id="main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive v-if="keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </transition>
  </div>
</template>

<script>
import { queryall } from '@/api/api';
export default {
  name: "mainpage",
  data() {
    return {};
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    },
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        document.getElementById('main').scrollTop = 0
        document.getElementById('main').scrollLeft = 0
      },
      // 深度观察监听
      deep: true
    } 
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#main{
  width: 100%;
  overflow: auto;
}
</style>