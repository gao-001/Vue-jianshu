import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/post/:id',
      
      component: Detail
    },
    {
      path: '/',   
      component: Index
    },
  ]
})
