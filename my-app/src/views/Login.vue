<template>
  <div class="login-box">
    <el-form
      ef="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script scope>
import axios from 'axios'


export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,message: "请输入账号",trigger: "blur",
          },
          {
            min: 3,max: 5,message: "长度在3到5个字符",trigger: "blur",
          },
        ],
        password: [
          {
            required: true,message: "请输入密码",trigger: "blur",
          },
          {
            min: 6,max: 22,message: "长度在6到22个字符",trigger: "blur",
          },
        ],
      },
    }
  },
    methods: {
    submitForm(formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
          // alert('submit!')


          // axios.post('https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api/login',this.ruleForm).then(res=>{
          //   console.log(res)
          // })

             // res = res.data
              // if(res.code===200){
              //     localStorage.setItem('Token',res.data.token)
              // }
            axios.post('https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api/login',{
            }).then(res=>{
              // console.log(res)
              res = res.data
              if (res.code ===200){
                localStorage.setItem('Token',res.data.token)
                // console.log(this)
                // // console.log(this.$router) 
                this.$router.push('/')
              }
            })
        
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>
.login-box {
  width: 400px;
  /* height: 200px; */
  border: 1px solid #efefef;
  margin: 100px auto;
  text-align: center;
  padding: 40px ;
}
</style>