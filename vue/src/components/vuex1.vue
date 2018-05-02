<template>
  
  <div>
    
    <h2>vuex</h2>
  {{totalPrice}}
  <apple></apple>
    <banana></banana>
  </div>
</template>

<script>
import Vue from 'vue'
import apple from "./apple";
import banana from "./banana";

export default {
  components: {
    apple,banana
  },
  computed:{
    totalPrice(){
      return this.$store.state.totalPrice
      //如果是用的getters,则return this.$store.getters.getTotal
    }
    

  }
 
 
};
</script>

