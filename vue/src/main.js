// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    totalPrice:0
  },
  getters:{
    getTotal(state){
      return state.totalPrice
    }
    //取值的时候用return this.$store.getters.getTotal
  },
  //this.$store.commit('increment',this.price)
  //不能在里面请求数据
  mutations:{
    increment(state,price){
      state.totalPrice+=price
    },
    decrement(state,price){
      state.totalPrice-=price
    }
  },
  //可以在actions里面做异步的操作
  actions:{//this.$store.dispatch('increment',this.price)
    increase(context,price){
      // api(id,function(price){//通过id请求获得price
      //   context.commit('increment')
      // })
      context.commit('increment')
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
