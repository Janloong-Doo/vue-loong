<template>
  <div>

    <Login loginUrl={{loginUrl}}></Login>

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
        loginUrl: 'http://localhost:9001'

      }
    },
    methods: {}


  }
</script>

<style scoped>

</style>