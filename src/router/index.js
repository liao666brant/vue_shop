import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/Login', component: Login },
  {
    path: '/Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome }, { path: '/users', component: Users }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // next()表示放行，next('/login')表示强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  else return next()
})

export default router
