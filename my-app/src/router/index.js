import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
    component: List
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
    component: Login
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((t)=>{
  // console.log(f,t)
  // 1.首先拿到token
  // 2.如果token存在  还是去login  让你直接去/
  // 3.如果没有token 直接去 login

  let token = localStorage.getItem('Token')
  if(token&&t.path==='/login'){
    return '/'
  }else if(!token&&t.path !== '/login'){
    return '/login'
  }

})

export default router
