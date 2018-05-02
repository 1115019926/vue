<template>
  <div>
 i am componentYel {{numberToDo}} {{myValue}}
 {{$route.params.color}}
 <button @click="emitMyEvent">emit</button>
 <button @click="getParam">get param</button>
 <slot name="header">no slot</slot>
  </div>
</template>

<script>

export default{
  //props:["number-to-do"],
  props:{
    "number-to-do":[Number,String],
    "my-value":[Number,String]
  },
  data(){
    return {
    hello:"world"
    }
  },
  methods:{
    emitMyEvent(){
      this.$emit('my-event',this.hello)
    },
    getParam(){
      console.log(this.$route.params)
    }
  }
  }

</script>


