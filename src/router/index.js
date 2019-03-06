import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '../page/home/home'
import Login from '../page/login/login'
import Search from '../page/search/search'
import Live from '../page/live/live'
import Me from '../page/me/me'
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/live',
      component: Live
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
