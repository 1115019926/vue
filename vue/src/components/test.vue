<template>
  
  <div>
     <img src="../assets/img2.png">
    <h2>列表数据的同步更新方法
文本渲染：v-html {{}} v-text
列表渲染 ：数组，对象
列表数据的同步更新</h2>
  <p v-html="msg"></p><!--文本-->
  <p>{{num +1}}</p>
  {{status? "success":"fail"}}
  <ul>
  <li v-for="item in list">{{item.name}} -{{item.price}}</li>
  </ul>
    <ul>
      <li v-for="(item,index) in list" v-text="item.name+'-'+item.price+'-'+index" :class="{odd:index%2}"></li>
    </ul>
    <componentA v-for="(value,key) in objList">{{key+value}}</componentA>
    <input type="text" v-model.number="myVal"/>
     <component-a :my-value='myVal' @my-event="getMyEvent">
       <p slot="header">我是页头</p>
        <p slot="footter">我是页尾</p> 
     </component-a>
    <keep-alive>
    <p :is="currentView"></p>
    </keep-alive>
    
    <!-- <component-a number-to-do='5'></component-a> -->
   
    <ul>
    <li v-for="(value,key) in objList">
    {{key+value}}
    </li>
    </ul>
    <a class="link-href" v-if="ispartA">ispartA</a>
     <a v-else>no-data</a>
     <button v-on:click="toggleCom" >toggleCom</button>
<transition name="fade" mode="out-in">
  <!-- <div :is="currentView"></div> -->
   <!-- <a v-show="show">i am show</a>
   <a v-if="show">i am if</a> -->
   <!-- 当标签相同时，需要用key区分，否则动画无效 -->
   <a v-if="show" key="1">i am if</a>
   <a v-else key="2">i am else</a>
</transition> 
<button v-on:click="show=!show">showBtn</button>
    <a class="link-href" v-bind:class="className">我是链接</a>
    <a class="link-href" v-bind:class="[classA,{'red-font':hasError}]" :style="linkCss">我是链接</a>
    <button v-on:click="addItem">addItem</button>
    <button v-on:click="toggle">toggle</button>
     <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import componentA from "./a";
import componentB from "./b";

export default {
  myVal:"",
  name: "Test",
  components: {
    //componentA:componentA
    componentA,componentB
  },
  data() {
    return {
      myVal:'',
      currentView:"component-a",
      ispartA:true,
      show:true,
      //className:"red-font",
      className:{
        "red-font":true,
        "blue-font":true
      },
      className:[
        "red-font","blue-font"
      ],
      hasError:true,
      classA:"red",
      linkCss:{
          "color":"red"
      },
      msg: "<header>我是头部</header>",
      num: 1,
      status: true,
      list: [{ name: "apple", price: 20 }, { name: "banace", price: 40 }],
      objList: {
        name: "apple",
        price: 20,
        value: "3",
        color: "red"
      }
    }
  },
  methods:{
    addItem(){
        //console.log(this.list)
        //常用的push,pop,shift,unshift,splice,sort,reverse
        Vue.set(this.list,1,{//把第二项设置成
          name:"pinaapple",
          price:256
        })
        this.list.push({
          name:"pinaapple",
          price:256
        })
    },
    toggle(){
      this.ispartA=!this.ispartA
    },
    getMyEvent(hello){
      console.log('this is emit' + " "+hello)
    },
    toggleCom(){
      if(this.currentView=="component-a"){
        this.currentView="component-b"
      }else{
        this.currentView="component-a"
      }
    }
  }
};
</script>
<style scoped>
header {
  width: 100%;
  height: 30px;
  background: blue;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-out;
}
.fade-enter,.fade-leave-active{
opacity:0;
}

.my-trans-enter-active,.my-trans-leave-active{
  transition:all .5s ease-out;
}
.my-trans-enter{
  transform:translateY(-500px);
}
.my-trans-leave-active{
  transform:translateY(500px);
  opacity:0;
}
html{
  height:100%
}
</style>

