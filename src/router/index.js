import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/News')
  },
  {
    path: '/news/:newsId',
    name: 'NewsId',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
      return import(/* webpackChunkName: "news" */ '../views/News/template')
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => {
      
      return new Promise(reso => {
        setTimeout(() => {
          reso(import(/* webpackChunkName: "member" */ '../views/Member.vue'))

        },1000)
      })
      // return import(/* webpackChunkName: "member" */ '../views/Member.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
