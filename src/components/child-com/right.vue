<template>
    <div id="right">
      <el-row :gutter="20" >
        <el-col :span="4" v-for="item,index in Data" :key="index">
          <el-card :body-style="{padding:'10px',}"  shadow="hover">
            <div>
              <img :src="item.image" alt="" width="100%">
              <div style="display: flex;justify-content:space-between">
                <span style="font-size: 12px">{{item.name}}</span>
                <span style="font-size: 10px;">{{item.price}}元</span>
              </div>

              <div style="display: flex;justify-content: center;align-items: center">
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
          Data:[]
        }
      },
      created(){
        this.$http.get('https://www.easy-mock.com/mock/5a769ac93c4ca20b4f1dd692/example_copy/card').then(
          (response)=>{
            console.log(response.data)
            this.Data=response.data.data
          }
        ).catch(e=>console.log(e))
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

.el-col {
  margin-bottom: 20px;
}
</style>
