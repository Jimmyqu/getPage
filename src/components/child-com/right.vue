<template>
    <div id="right">
      <el-row :gutter="20" >
        <el-col :span="6" v-for="item,index in Data" :key="index">
          <el-card :body-style="{padding:'0px'}"  shadow="hover">
            <div>
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="addItems(item)">点击添加</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "right",
      data(){
        return{
          Data: [{
            name: '牛肉大餐',
            price: 1,
          }, {
            name: '油条',
            price: 2,
          }, {
            name: '吹风机',
            price: 3,
          }, {
            name: '皮鞋',
            price: 4,
          }]
        }
      },
      created(){

      },
      methods:{
          addItems(e){
            this.$bus.$emit('getItem',e)
          }
      }
    }
</script>

<style scoped>
#right{
  flex: 8;
  background-color: darkturquoise;
  height: 800px;
}
</style>
