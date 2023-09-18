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
