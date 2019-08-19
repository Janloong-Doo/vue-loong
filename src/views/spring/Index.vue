<template>
	<div id="index">
		<span v-if="status==='index'">测试首页面</span>
		<span v-if="status==='success'">登陆成功</span>
		<span v-else>测试首页面</span>
		<el-button v-on:click="getUserInfo">获取用户信息</el-button>
		<el-button v-on:click="logout">退出登录</el-button>
	</div>
</template>

<script>
  import AxiosUtil from "../../assets/js/AxiosUtil";
  import {Message} from 'element-ui'

  export default {
    name: "Index",
    data() {
      return {
        requestUrl: 'http://192.168.211.1:9001/logout'
      }
    },
    props: {
      status: {
        type: String,
        default: 'index'
      }
    },
    mounted() {
      console.log("status的值为");
      this.status = this.$route.params.status;
      console.log(this.status)
    },
    methods: {
      getUserInfo() {

      },
      logout() {
        AxiosUtil.post(this.requestUrl, null)
          .then(res => {
            console.log("退出成功");
            Message.info("退出成功")
          }).catch(res => {
          console.log("退出失败")
        })

      }
    }
  }
</script>

<style scoped>

</style>