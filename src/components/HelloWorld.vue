<template>
  <div class="hello" >
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>fdsg</div>
    <div>gh</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>fdsg</div>
    <div>gh</div>
    <div>
      <el-row :gutter="100">
        <el-col :span="6" :xs="24">
          <div class="col-box1">box1</div>
        </el-col>
        <el-col :span="6" :xs="24">
          <div class="col-box1">box2</div>

        </el-col>
        <el-col :span="6" :xs="24">
          <div class="col-box1">box3</div>

        </el-col>
        <el-col :span="6" :xs="24">
          <div class="col-box1">box4</div>

        </el-col>
      </el-row>
      <el-row :gutter="500">
        <el-col :span="12"><div class="grid-content bg-purple">r2c1</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">r2c2</div></el-col>
      </el-row>
      <el-row>
        3
        <el-col>

        </el-col>
      </el-row>
      <el-row>
        4
        <el-col>

        </el-col>
      </el-row>
    </div>
    <div>
      <el-col :span="12">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: '1'
    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col-box1{
  background-color: grey;
}
.bg-purple {
  background: #d3dce6;
}

  .el-collapse{
    flex-direction: column;
  }
</style>
