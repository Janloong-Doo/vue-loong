<template>
    <div id="app">
        <div id="nav">
            <!--<p v-on:click="ww">测测</p>-->
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <span v-bind:title="'tips: 学习测试页面 , ' +new Date().toLocaleString()">
            <router-link :to="{path: '/study'}" >study</router-link>
            </span>
        </div>

        <router-view/>
    </div>
</template>
<script>
/* eslint-disable no-console */

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    ww() {
      console.log(this.$router);
      this.$router.push({ name: "about", query: { name: "123" } });
    }
  }
};
</script>
<!--<style lang="stylus" scoped>-->
<style lang="stylus" >
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

    #nav
        padding 30px
        a
            font-weight bold
            color #2c3e50
            &.router-link-exact-active
                color #42b983
</style>
