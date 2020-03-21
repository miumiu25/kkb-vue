//做全局的路由
import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'//从cookie获取token

//白名单列表
const whiteList = ['login']

router.beforeEach(async (to, from, next) => {
  //从本地获取token
  const hasToken = getToken();
  //如果有token，说明已登录
  if (hasToken) {
    //已登录跳转到登录页，则重定向到首页
    if (to.path === '/login') {
      next({ path: "/" })
    } else {
      //已登录跳转到其他页面，获取用户角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      //有角色
      if (hasRoles) {
        next()
      } else {
        //没有角色，先请求用户信息
        const { roles } = await store.dispatch('user/getInfo')
        //根据角色生成动态路由
        const acRoutes = await store.dispatch('permission/generateRoutes', roles)
        //添加至router
        router.addRoutes(acRoutes)
        //重定向
        next({ ...to, replace: true })
      }
    }
  } else {
    // 如果没有token，是否是白名单页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      //
      next(`/login?redirect=${to.path}`)

    }
  }
})