<template>
    <div id="study">
        <p>数值渲染: {{name}}</p>
        <p :title="sup">悬停有惊喜</p>
        <!--<p v-bind:title="sup">悬停有惊喜</p>-->
        <p v-if="seen">现在你看到我了</p>
        <ol type="1">
            <li v-for="tt in todo">{{tt.text}}</li>
        </ol>
        <p v-on:click="djx">{{ddd}}</p>
        <div>
            <p>{{name2}}</p>
            <input v-model="name2"/>
        </div>
        <todo2 v-for="(a,i) in todo " v-bind:key="i" v-bind:name2="a"></todo2>
    </div>
</template>
<script>
    import todo2 from "../components/TodoList"

    export default {
        name: "study",
        data() {
            return {
                name: "我是被渲染的"
                , sup: "惊喜"
                , seen: true
                , todo: [{text: "没钱"}, {text: "没车"}, {text: "没对象"}]
                , ddd: "点击有惊喜"
                , name2: "双向绑定"
            };
        },
        props: {
            // name: "我是被渲染的"
        },
        methods: {
            djx() {
                console.log(this.ddd);
                this.ddd = this.ddd
                    .split("")
                    .reverse()
                    .join("");
            }
        }
        , components: {
            todo2
        }

    };
</script>

<style lang="stylus" scoped>
    #study
        text-align center;
</style>
