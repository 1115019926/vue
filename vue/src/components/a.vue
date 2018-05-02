<template>
  <div>
 i am componentA {{numberToDo}} {{myValue}}
 <button @click="emitMyEvent">emit</button>
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
    }
  }
  }

</script>


