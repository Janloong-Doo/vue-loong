<template>
  <div id="app">
    <div id="nav">
      <span>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
        <!--      <span v-bind:title="'tips: 学习测试页面 , ' +new Date().toLocaleString()">-->
      <span v-bind:title="tips">
            <router-link :to="{path: '/study'}">study</router-link>
            </span>
      </span>
    </div>
    <router-view class="c-border"/>
  </div>
</template>
<script>
  /* eslint-disable no-console */

  export default {
    name: "app",
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

    div
      text-align center

    router-view
      text-align left

  #nav
    padding 30px

    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
