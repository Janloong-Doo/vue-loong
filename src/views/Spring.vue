<template>
	<div id="spring">
		<Login :loginUrl="requestUrl"></Login>
		<div v-if="signAble">
			登录成功
		</div>
	</div>
</template>
<script>
  import Login from "../components/Login"

  export default {
    name: "Spring",
    components: {
      Login
    },
    data() {
      return {
        requestUrl: 'http://192.168.211.1:9001/login',
        signAble: false
      }
    },
    methods: {}


  }
</script>

<style scoped>

</style>