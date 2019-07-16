<template>
  <div id="spring">

    <Login login-url="{{loginUrl}}"></Login>

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
        loginUrl: ""

      }
    },
    methods: {}


  }
</script>

<style scoped>

</style>