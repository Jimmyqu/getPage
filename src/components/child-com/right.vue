<template>
    <div id="right">
      <el-row :gutter="20" >
        <el-col :span="6"  v-for="i in [1,2,3,4]">
          <el-card :body-style="{ padding: '0px' }"  shadow="hover">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">点击添加到收银台</el-button>
              </div>
            </div>
          </el-card>
        </el-col>


      </el-row>
    </div>
</template>

<script>
    export default {
        name: "right"
    }
</script>

<style scoped>
#right{
  flex: 8;
  background-color: darkturquoise;
  height: 800px;
}
</style>
