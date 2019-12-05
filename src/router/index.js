import Vue from 'vue'
let v = new Vue();
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: '表单',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "登录" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (window.localStorage.token && window.localStorage.token.length >= 128) {
      next();
    }
    else {
      v.$message({
        message: '请先登录~',
        type: 'warning'
      });
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

export default router
