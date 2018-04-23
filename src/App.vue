<template>
  <div id="app">
   <router-view>
   </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      totalCount:1,
      curPage: 1,
      lists:[]
    }
  },
  created(){

  },



}
</script>

<style>
#app {

}
</style>
