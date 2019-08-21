<template>
	<div id="index">
		<span v-if="signStatus==='index'">测试首页面</span>
		<span v-if="signStatus==='success'">登陆成功</span>
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
        requestUrl: 'http://192.168.211.1:9001/logout',
        signStatus: 'index'
      }
    },
    props: {
      // signStatus: {
      //   type: String,
      //   default: 'index'
      // }
    },

    mounted() {
      console.log("status的值为");
      let signStatus2 = this.$route.params.signStatus;
      this.signStatus = signStatus2
      console.log(this.signStatus + "===" + signStatus2);
    },
    computed: {},
    methods: {
      getUserInfo() {
        let url = 'http://192.168.211.1:9001/user/auth';
        AxiosUtil.get(url, null).then(res => {
          console.log("获取用户信息成功")
          // console.log(res.data);
          console.log(res);
        }).catch(res => {
          console.log("获取用户信息失败")
          console.log(res);
        });
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