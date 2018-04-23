<template>
    <div id="index">
      <left></left>
      <mid></mid>
      <right></right>
    </div>
</template>

<script>
  import left from './child-com/left'
  import mid from './child-com/mid'
  import right from './child-com/right'
    export default {
      name: "index",
      components:{
        "left":left,
        "mid":mid,
        "right":right}
    }
</script>

<style scoped>
#index{
  display: flex;
  flex-direction: row;
}
</style>
