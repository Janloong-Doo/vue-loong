<template>
	<div id="index">
		<!--		<el-button v-on:click="getUserInfo">获取用户信息</el-button>-->
		<!--		<el-button v-on:click="logout">退出登录</el-button>-->
		<!--		<span v-text="'用户界面:'+id"></span>-->
		<el-button v-on:click="getToken">获取token</el-button>
	</div>
</template>

<script>
  import Api from "../../assets/api/api.js";

  export default {
    name: "OAuth",
    props: [],
    watch: {
      '$route'(to, from) {
        console.log(to);
        console.log(from)
      }
    },
    data() {
      return {}
    },

    mounted() {

    },
    computed: {},
    methods: {
      getToken() {
        let parmas = {
          username: 'doo'
          , password: 'doo'
          , grant_type: 'password'
          , scope: 'read'
          , client_id: 'fooClientIdPassword'
          , client_secret: 'doo'
        };
        Api.apiHome(parmas).then(value => {
          console.log('result value');
          console.log(value);
        }).catch(reason => {
        })
      }

    }
  }
</script>

<style scoped>

</style>