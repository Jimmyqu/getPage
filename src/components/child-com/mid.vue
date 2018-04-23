<template>
  <div id="mid">
    <el-table
      :data="tableData"
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
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "mid",
      data() {
        return {
          tableData: [{
            name: '牛肉大餐',
            num: 1,
            price: 2,
            total:'122'
          }, {
            name: '油条',
            num: 1,
            price: 2,
            total:''
          }, {
            name: '吹风机',
            num: 1,
            price: 2,
            total:''
          }, {
            name: '皮鞋',
            num: 1,
            price: 2,
            total:''
          }]
        }
      },
      methods: {
        handleClick(row) {
          console.log(row);
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
