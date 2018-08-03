<template>
  <div class="about">
    <h1 @click="ww">This is an about page</h1>
    <!--<span>{{this.$store.state.num}}</span>-->
    <button @click="plus"> + </button>
    <span>{{num}}</span>
    <button @click="reduce"> - </button>
    <A></A>
  </div>
</template>
<script>
/* eslint-disable no-console */

import { mapState } from "vuex";
import a from "../components/a";
export default {
  components: {
    A: a
  },
  name: "about",
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "num"
    ])
  },
  data() {
    return {};
  },
  methods: {
    plus() {
      this.$store.commit("pluses", 2);
    },
    reduce() {
      this.$store.dispatch("reduce", 2);
    },
    ww() {
      //console.log(this.$router)
      console.log(this.$route.query.name);
    }
  }
};
</script>
