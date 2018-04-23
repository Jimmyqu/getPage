<template>
    <div>
      <el-row>

        <el-col :push="8" :span="8" justify="center" :xs="{span:24,push:0}">
          <el-form
            ref="form"
            :model="form"
            label-width="80px"
            label-position="left"
          >
            <el-form-item label="登录名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="登录密码">
              <el-input v-model="form.pass"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="form.login"
                size="medium "
                type="primary"
                @click="singup">登陆
              </el-button>
              <el-button
                type="warning"
                size="medium "
                @click="reset">重置
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            form:{
              login:false,
              name:'',
              pass:'',
            }
          }
      },
      methods:{
        singup(){
          this.form.login=true
          setTimeout(()=>{
            this.form.login=false
            this.$router.push('/index')
            this.$message({
              message: '登陆成功',
              type: 'success'
            });
          },2000)
        },
        reset(){
          this.form.name=''
          this.form.pass=''
        }
      }
    }
</script>

<style scoped>

</style>
