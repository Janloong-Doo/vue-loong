<template>
	<div id="spring">
		<div id="nav">
		<router-link to="/spring/login">Login</router-link>|
		<router-link to="/spring/index">Index</router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>

  export default {
    name: "Spring",
    components: {
    },
    data() {
      return {
      }
    },
    methods: {

    }


  }
</script>

<style lang="stylus">
</style>