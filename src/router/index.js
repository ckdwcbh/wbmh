import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Cate from '../views/Cate'
import ComicEnd from '../views/Comic_end'
import Daypub from '../views/Daypub'
import Login from '../views/Login'
import Mine from '../views/Mine'
import Rank from '../views/Rank'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cate',
    component: Cate
  },
  {
    path: '/comic_end',
    component: ComicEnd
  },
  {
    path: '/daypub',
    component: Daypub
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
