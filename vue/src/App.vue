<template>
  <div id="app">
    <img src="./assets/logo.png">
    <keep-alive>
    <router-view/>
    </keep-alive>

        <router-view name="viewA"/>
        <router-view name="viewB"/>
    <router-link :to="{path:'/a'}"> to a</router-link>
    <router-link :to="{path:'/b/red/20'}"> to b</router-link>
    <router-link :to="{path:'/test/yel',}"> to yel</router-link>

    <router-link :to="'apple'" tag="li"> to a</router-link>
    <router-link :to="{path:'/b/red/20'}"> to b</router-link>
    <router-link :to="{name:'yel',param:{color:'yellow'}}"> to yel</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
