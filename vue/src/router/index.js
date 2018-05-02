import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import A from '@/components/a'
import B from '@/components/b'
import Yel from '@/components/yel'
import Svuex from '@/components/vuex1'
Vue.use(Router)




export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:HelloWorld
    },
    {
      path: '/svuex',
      name: 'Svuex',
      component: Svuex
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children:[
        {
          path: 'yel',
          name:'yel',
          component: Yel
        }
      ]
    },
    {
      path: '/b/:color/:font',
      name: 'b',
      component:{
        viewA:A,
        viewB:B
      }
    },
    {
      path: '/a',
      name: 'a',
      component: A
    }
  ]
})
