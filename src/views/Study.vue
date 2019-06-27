<template>
  <!--  <div id="study">-->
  <div class="bk-inner">
    <div :title="sup">悬停titile</div>
    <!--    <span>-->
    <div>数值渲染: {{name}}</div>
    <!--    </span>-->
    <!--<p v-bind:title="sup">悬停有惊喜</p>-->
    <div>
      <button v-on:click="seenAble">看美女</button>
      &nbsp
      <a v-if="seen">美女来了!!!</a>
      <a v-if="!seen">美女走了...</a>
    </div>
    <div>
      <ol class="bk-inner">
        <li v-for="tt in todo">{{tt.text}}</li>
      </ol>
    </div>
    <div class="bk2" v-on:click="djx">{{ddd}}</div>
    <div>
      <p>{{name2}}</p>
      <input v-model="name2"/>
    </div>
    <div>
      <todolist v-for="(a,i) in todo " v-bind:key="i" v-bind:todo-name="a"></todolist>
    </div>
    <div>
      <table border="1">
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>a</td>
          <td>b</td>
        </tr>
      </table>
    </div>
    <div>
      <input v-model.trim="requesturl" placeholder="请求url"><br>
      <button v-on:click="requestUrl">提交
      </button>
    </div>
  </div>
</template>
<script>
  import todolist from "../components/TodoList";
  import axios from 'axios';


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
        , requesturl: ''
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
      },
      seenAble() {
        this.seen = !this.seen
      },
      requestUrl() {
        if (this.requesturl === '' || this.requesturl == null) {
          this.requesturl = "http://localhost:8080/login"
          // this.requesturl = "http://168.130.1.33:11001/authcenter/sysUser/login"
        }
        let param = {
          'username': "admin",
          'password': "admin"
        };
        let config = {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };

        axios({

            method: 'post',
            url: "http://localhost:8080/doo",
            data: {
              name: 'admin'
            }
            // {
            //   header: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            //   }
            // }
          }
        ).then(function (response) {
          console.log("成功");
          console.log(response)
          // if (success) {
          //   console.log(response)
          // }
        }).catch(function (response) {
          console.log("错误");
          console.log(response)
        })
      }
    }
    , components: {
      todolist: todolist
    }

  };
</script>

<style lang="stylus" scoped>
  #study
    text-align left;

  .bk-inner
    div
      border-style solid
      border-width 1px
      margin-bottom 5px
      margin-top 2px
      padding 3px

  .bk2
    background-color darkgray

</style>
