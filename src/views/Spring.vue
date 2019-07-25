<template>
	<div id="spring">
		<Login :loginUrl="requestUrl"></Login>
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
        // requestUrl: 'http://localhost:9001/dooLogin'
        requestUrl: 'http://192.168.236.1:9001/login'

      }
    },
    methods: {}


  }
</script>

<style scoped>

</style>