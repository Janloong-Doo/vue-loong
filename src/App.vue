<template>
	<div id="app">
		<div id="nav">
      <span>
      <span v-bind:title="tips">
            <router-link :to="{path: '/study',params:{userId:123}}">Study</router-link>
            </span>
      </span>|
			<router-link to="/">Home</router-link>
			|
			<router-link to="/spring">Spring</router-link>
		</div>
		<router-view class="c-border"/>
	</div>
</template>
<script>
  /* eslint-disable no-console */

  export default {
    name: "app",
	  props:{
      userId: Object
	  },
    data() {
      return {
        tips: 'tips: 学习测试页面 2, ' + new Date().toLocaleString()
      };
    },
    methods: {
      ww() {
        console.log(this.$router);
        this.$router.push({name: "about", query: {name: "123"}});
      }
    }
  };
</script>
<style lang="stylus">
	@import "assets/css/common.styl"
	#app
		font-family 'Avenir', Helvetica, Arial, sans-serif
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		color #2c3e50

	#nav
		padding 30px
		text-align center

		a
			font-weight bold
			color #2c3e50

			&.router-link-exact-active
				color #42b983
</style>
