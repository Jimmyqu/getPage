<template>
    <div id="left">
      <el-menu
        default-active="1"
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">收银</span>
        </el-menu-item>
        <el-menu-item index="2">

          <i class="el-icon-location"></i>
          <span slot="title">结算</span>
        </el-menu-item>
        <el-menu-item index="3">

          <i class="el-icon-location"></i>
          <span slot="title">统计</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "left"
    }
</script>

<style scoped>
  #left{
    flex: 1;
    background-color: beige;
    height: 800px;
  }
</style>
