import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)
//通用页面
export const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    hidden:true  //导航菜单忽略该项
  },
  {
    path: "/",
    component: Layout,//应用布局
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/Home.vue"),
        name: "home",
        meta: {
          title: "Home",//导航菜单项标题
          icon:"qq"//导航菜单项图标
        }
      }
    ]
  }
]
//权限页面
export const asyncRoutes = [
  {
    path: "/about",
    component: Layout,//应用布局
    redirect: "/about/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/About.vue"),
        name: "about",
        meta: {
          title: "About",//导航菜单项标题
          icon: "qq",//导航菜单项图标
          roles:['admin','editor']//角色决定哪些用户可以看到该路由
        }
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constRoutes
})

export default router
