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
import fineworks from '../views/fineworks'
import hotserial from '../views/hotserial'
import newarrival from '../views/newarrival'
import popularworks from '../views/popularworks'
import weekrecommend from '../views/weekrecommend'
import xiaobianrecommend from '../views/xiaobianrecommend'
import SearchResult from '../views/SearchResult'
import comicDetails from '../views/details'

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
  },
  {
    path: '/fineworks',
    component: fineworks
  },
  {
    path: '/hotserial',
    component: hotserial
  },
  {
    path: '/newarrival',
    component: newarrival
  },
  {
    path: '/popularworks',
    component: popularworks
  },
  {
    path: '/weekrecommend',
    component: weekrecommend
  },
  {
    path: '/xiaobianrecommend',
    component: xiaobianrecommend
  },
  {
    path: '/search-result',
    component: SearchResult
  },
  {
    path: '/details',
    component: comicDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
