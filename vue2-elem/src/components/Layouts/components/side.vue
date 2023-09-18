<template>
  <div class="sideBox">
    <a-button type="primary" style="margin-bottom:2px;min-width:80px" @click="toggleCollapsed" >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-open-keys="['']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model="selectedKeys"
      @click="handleClick"
    >
      <!-- <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
      </a-sub-menu> -->
      
      <a-menu-item v-for="item in menuList" :key="item.name">
        <router-link :to="item.name">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      collapsed: false,
      menuList:[{
        path:'/home',
        name:'home',
        title:'首页',
        icon:'desktop',
      },{
        path:'/about',
        name:'about',
        title:'传值',
        icon:'pie-chart',
        children:[]
      },{
        path:'/form',
        name:'form',
        title:'表单',
        icon:'pie-chart',
        children:[]
      },{
        path:'/echarts',
        name:'echarts',
        title:'Echarts',
        icon:'pie-chart',
        children:[]
      },{
        path:'/largescreen',
        name:'largescreen',
        title:'全景能源管控',
        icon:'pie-chart',
        children:[]
      },{
        path:'/largescreenSix',
        name:'largescreenSix',
        title:'产线能源全景',
        icon:'pie-chart',
        children:[]
      },{
        path:'/largescreenFrist',
        name:'largescreenFrist',
        title:'公辅车间大屏',
        icon:'pie-chart',
        children:[]
      }],
      selectedKeys:[`${this.$route.name}`]
    };
  },
  watch: {
    $route(newValue, oldValue) {
      this.selectedKeys = [`${newValue.name}`]
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    handleClick(){
      
    }
  },
};
</script>
<style lang="less" scoped>
.sideBox{
  height: 100%;
  text-align: left;
  .ant-menu{
    height: calc(100% - 42px);
  }
}
</style>
