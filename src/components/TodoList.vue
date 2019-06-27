<template>
  <p>{{todoName.text}}</p>
</template>

<script>
  export default {
    name: "TodoList"
    , props: {
      todoName: Object
    },
  }

</script>

<style lang="stylus" scoped>
  p
    color red
</style>