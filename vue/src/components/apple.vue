<template>
  
  <div>
    
    <h2>{{msg}}</h2>
  
  <button @click="addOne">add one</button>
   <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
    }
  },
  data() {
    return {
     msg:"apple",
     price:5
     
    }
  },
  methods:{
      addOne(){
     this.$store.commit('increment',this.price)
   },
   minusOne(){
     this.$store.commit('decrement',this.price)
   }
    
  }
};
</script>
<style scoped>

</style>

