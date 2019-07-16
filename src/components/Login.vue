<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用戶名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import AxiosUtil from "../assets/js/AxiosUtil";
  import {Message} from 'element-ui';

  export default {
    name: "Login",
    props: {
      loginUrl: String
    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用戶名'));
        } else {
          if (this.ruleForm.username !== '') {
            console.log("1");
            // let validateField = this.$refs.ruleForm.validateField('username');
            // console.log(validateField)
            console.log("2");
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.password !== '') {
            // this.$refs.ruleForm.validateField('password');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: validateUserName, trigger: 'blur'}
          ],
          password: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        AxiosUtil.post(this.loginUrl, {
          username: formName.username,
          password: formName.username
        }).then(res => {
          Message.success("成功");
          Message.success(res);
        }).catch(res => {
          Message.error("失敗");
          Message.error(res);
        })

        // this.$refs[formName].validate((valid) => {
        //   console.log(formName);
        //   let message = this.$refs[formName].model.username;
        //   console.log(message);
        //
        //   if (valid) {
        //     console.log("submit");
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      }
      ,
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<style scoped>

</style>