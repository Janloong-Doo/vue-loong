<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to JanloongDoo's Test"/>-->
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
