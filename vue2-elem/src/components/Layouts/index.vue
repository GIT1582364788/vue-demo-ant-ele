<template>
  <div>
    <Header />
    <div class="contentBox">
      <div class="side">
        <Side />
      </div>
      <Mainpage />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layouts/components/header.vue";
import Side from "@/components/Layouts/components/side.vue";
import Mainpage from "@/components/Layouts/components/mainpage.vue";
export default {
  name: "Layout",
  components: {
    Side,
    Header,
    Mainpage
  },
  data() {
    return {};
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.contentBox {
  display: flex;
  height: calc(100vh - 60px);
  .side {
    background: #001529;
  }
}
</style>