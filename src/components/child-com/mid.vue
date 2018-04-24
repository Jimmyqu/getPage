<template>
  <div id="mid">
    <el-table
      :data="fdata"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="80">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"
        width="80">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="80"
      >
      </el-table-column>
      <el-table-column
        prop="total"
        label="总价"
        width="80"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="DelClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "mid",
      created() {
        this.$bus.$on('getItem', target => {
          this.tableData.push(target)
          let obj={}
          for(let i in this.tableData){
            if(obj[this.tableData[i].name]){
              obj[this.tableData[i].name]++
            }else{
              obj[this.tableData[i].name]=1
            }
          }

          let arr =Array.from(new Set(this.tableData))
          arr.map((item)=>{
            if(item.name in obj){
              item.num=obj[item.name]
              item.total=obj[item.name]*item.price
            }else{
              console.log('asda')
            }
          })
          this.fdata=Array.from(new Set(this.tableData))
        });
      },
      data() {
        return {
          tableData: [],
          all:{},
          fdata:[]
        }
      },
      methods: {
        handleClick(row) {
          console.log(row);
        },
        DelClick(row){
          console.log(row.name)
          for(let i in this.fdata){
            if(row.name===this.fdata[i].name){
              this.fdata.splice(i,1)
            }
          }
          this.tableData=this.fdata
          console.log(this.fdata)
        }
      },
    }
</script>

<style scoped>
  #mid{
    flex:6;
    background-color: slategray;
    height: 800px;
  }
</style>
