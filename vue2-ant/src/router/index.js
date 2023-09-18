import Vue from 'vue'
import VueRouter from 'vue-router'
import Layouts from '@/components/Layouts/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layouts,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          componentName: "Home",
          icon: "home",
          keepAlive: false,
          title: "首页",
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          componentName: "About",
          icon: "about",
          keepAlive: false,
          title: "传值",
        }
      },
      {
        path: '/form',
        name: 'form',
        component: () => import('../views/formView.vue'),
        meta: {
          componentName: "form",
          icon: "about",
          keepAlive: false,
          title: "表单",
        }
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('../views/EchartsDemo.vue'),
        meta: {
          componentName: "echarts",
          icon: "about",
          keepAlive: false,
          title: "Echarts",
        }
      },
      {
        path: '/largescreen',
        name: 'largescreen',
        component: () => import('../views/screenForGiveFalse/index.vue'),
        meta: {
          componentName: "largescreen",
          icon: "about",
          keepAlive: false,
          title: "产线能源全景",
        }
      },
      {
        path: '/largescreenSix',
        name: 'largescreenSix',
        component: () => import('../views/screenForUseFalse/index.vue'),
        meta: {
          componentName: "largescreenSix",
          keepAlive: false,
          title: "全景能源管控",
        }
      },
      {
        path: '/largescreenFrist',
        name: 'largescreenFrist',
        component: () => import('../views/largeScreenFalse/index.vue'),
        meta: {
          componentName: "largescreenFrist",
          keepAlive: false,
          title: "公辅车间大屏",
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },

]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // 按下 后退/前进 按钮时，类似浏览器的原生表现
    } else {
      return { x: 0, y: 0 } // 让页面滚动到顶部
    }
  }
})

export default router
