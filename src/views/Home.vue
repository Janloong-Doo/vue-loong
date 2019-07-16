<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld :msg="msgs"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "home",
    data() {
      return {
        msgs: "Welcome to JanloongDoo's Test"
      };
    },
    components: {
      HelloWorld
    }
  };
</script>
<style lang="stylus">
  .home
    text-align center

</style>
