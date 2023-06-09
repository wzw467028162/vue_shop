import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
  ],
})

// 挂在路由守卫
router.beforeEach((to, from, next) => {
  // to 要去哪里
  // from 从哪儿来
  // next 放行   next('/login') 强制跳转
  if (to.path === '/login') next()
  // 获取token 看能否放行
  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) return next('/login')
  next()
})

export default router
