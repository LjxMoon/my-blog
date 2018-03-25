import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Article from '@/views/Article'
import Archives from '@/views/Archives'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
