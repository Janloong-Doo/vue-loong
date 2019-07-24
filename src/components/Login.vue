<template>
	<div id="login">
		<el-form
			:model="ruleForm"
			status-icon
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm"
		>
			<el-form-item label="用戶名" prop="username">
				<el-input
					type="text"
					v-model="ruleForm.username"
					auto-complete="off"></el-input>
			</el-form-item>

			<el-form-item label="密码" prop="password">
				<el-input
					type="password"
					v-model="ruleForm.password"
					auto-complete="off"
				></el-input>
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
  import {Message} from "element-ui";

  export default {
    name: "Login",
    props: {
      loginUrl: String
    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入用戶名"));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error("请输入密码"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{validator: validateUserName, trigger: "blur"}],
          password: [{validator: validatePass, trigger: "blur"}]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            AxiosUtil.post(this.loginUrl, {
              username: formName.username,
              password: formName.username
            }).then(res => {
              Message.success("成功");
              Message.success(res.data);
            }).catch(res => {
              Message.error("失敗");
              Message.error(res.data);
            });
            console.log("submit");
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style lang="stylus" scoped>
	#login
		width 30%
</style>
