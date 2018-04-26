<template>
  <el-col :span="24" id="mid">
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

          <el-button type="text" size="small" @click="DelClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="12" :offset="6" style="display: flex;justify-content: space-between ">
        <el-button round type="primary" @click="getPay">订单结算</el-button>
        <el-button round type="danger">删除订单</el-button>
      </el-col>
    </el-row>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>一共支付：{{total}}元</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitPay">确 定</el-button>
      </span>
    </el-dialog>
  </el-col>
</template>

<script>
    export default {
        name: "mid",
      created() {
        this.$bus.$on('getItem', target => {
            if(this.fdata.indexOf(target)===-1){
              let num=1
              this.$set(target,'num',num)
              this.$set(target,'total',num*target.price)
              this.fdata.push(target)
              this.fdata=Array.from(new Set(this.fdata))
            }else {
              this.fdata[this.fdata.indexOf(target)].num+=1
              this.fdata[this.fdata.indexOf(target)].total=this.fdata[this.fdata.indexOf(target)].num*this.fdata[this.fdata.indexOf(target)].price
            }
        });
      },
      data() {
        return {
          num:0,
          fdata:[],
          dialogVisible:false,
          total:0
        }
      },
      methods: {
        DelClick(val){
          for (let index in this.fdata){
            if(val.name===this.fdata[index].name){
              if(this.fdata[index].num>0){
                this.fdata[index].num--;
                this.fdata[index].total=this.fdata[index].num*this.fdata[index].price
              }else {
                this.fdata.splice(index,1)
              }
            }
          }
        },
        getPay(){
          if(this.fdata.length>0){
            for (let index in this.fdata){
              this.total+=this.fdata[index].total
            }
            this.dialogVisible=true
          }else {
            this.$message({
              message: '请先添加商品',
              type: 'error'
            });
          }

        },
        handleClose(done) {
          this.$confirm('确认取消订单？')
            .then(x=> {
              done();
              console.log(x)
            })
            .catch(_ => {});
        },
        submitPay(){
          this.total=0
          this.fdata=[]
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>
  #mid{
    flex:3;
    background-color: slategray;
    height: 800px;
  }
</style>
