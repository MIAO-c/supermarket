import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
const Category = () => import("../views/category/Category.vue")
const Home = () => import("../views/home/Home")
const About = () => import("../views/profile/About")
const Cart = () => import("../views/cart/Cart")

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
    component: Home

  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/profile/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
