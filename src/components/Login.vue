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
		<el-button v-on:click="randomTest">测试</el-button>
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
          if (value.length < 2) {
            callback(new Error("用户名长度过短"))
          }
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
            let username = this.$refs[formName].model.username;
            let password = this.$refs[formName].model.password;
            AxiosUtil.post(this.loginUrl, {
              username: username,
              password: password
            }).then(res => {
              this.$parent.signAble = true;
            }).catch(res => {
              console.log('异常错误');
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      randomTest() {
        let router = this.$route;
        console.log(router)
        this.$router.push({path: "home"})
      }
    }
  };
</script>

<style lang="stylus" scoped>
	#login
		width 30%
</style>
