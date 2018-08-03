<template>
    <p>{{name2.text}}</p>
</template>

<script>
    export default {
        name: "TodoList"
        , props: {
            name2: String
        },
    }

</script>

<style lang="stylus" scoped>
    p
        color red
</style>