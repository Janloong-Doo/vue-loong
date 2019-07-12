<template>
  <!--  <div id="study">-->
  <div class="bk-inner">
    <div :title="sup">悬停titile</div>
    <div>数值渲染: {{name}}</div>
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
      <el-table>
        <el-row>
          <el-table-column label="1"/>
          <el-table-column label="2"/>
        </el-row>
        <el-row>
          <el-table-column label="1"/>
          <el-table-column label="2"/>
        </el-row>
      </el-table>
    </div>
    <div>
      <el-input v-model.trim="requesturl" placeholder="请求url"/>
      <br>
      <el-radio-group v-model="requestMethod" size="small">
        <el-radio-button label="get"></el-radio-button>
        <el-radio-button label="post"></el-radio-button>
      </el-radio-group>
      <el-button v-on:click="requestUrl">提交
      </el-button>
      <br>
      <a>{{resultD}}</a><br>
      <br>
      <el-button v-on:click="requestUrl3">测试请求2</el-button>
    </div>
  </div>
</template>
<script>
  import todolist from "../components/TodoList";
  import axios from 'axios';
  import qs from 'qs';
  import {Message} from 'element-ui';
  import signMd5Utils from "../assets/js/signMd5Utils";
  import axiosutils from "../assets/js/AxiosUtil.js";


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
        , resultD: ''
        , requestMethod: 'get'

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
          // this.requesturl = "http://168.130.1.33:11001/authcenter/sysUser/login"
          this.requesturl = "https://127.0.0.1:8082/warn/readList?type=today";
          // this.requesturl = "https://localhost:8088/head"
        }
        if (this.requestMethod === "get") {
          this.getTest(this.requesturl, null);
        } else {

          let params = {
            name: 'admin',
            age: '25'
          };
          let config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              // 'Content-Type': 'application/json'
              // 'Authorization':'a'    //非'简单请求'时会自动发送一个探测请求
            }
          };

          axios.post(this.requesturl, qs.stringify(params), config).then(res => {
            console.log("成功");
            console.log(res.data);
            // Message.success("成功");
            this.resultD = res.data;
          }).catch(res => {
            console.log("失败");
            console.log(res.data);
            this.resultD = res.data;
            // Message.error("失败")
          });
        }
      },
      requestUrl3() {
        console.log("ceshia");
        let name = "doo";
        let address = "bj";
        let url = "http://localhost:8080/sign";
        let pp = {
          name: name,
          address: address,
        };
        let sign = signMd5Utils.getSign(url, pp);
        pp = {
          name: name,
          address: address,
          sign: sign
        };
        axiosutils.get(url, pp,
          success => {
            console.log("成功");
            console.log(success);
            this.resultD = success;
            Message.success(success);
          },
          error => {
            Message.error(error);
          }
        )
      },
      getTest(url, params) {
        axios.get(url).then(res => {
          console.log("成功");
          console.log(res.data);
          this.resultD = res.data;
          Message.success("成功");
        }).catch(res => {
          console.log("失败");
          console.log(res.data);
          this.resultD = res.data;
          Message.error("失败")
        })
      }
    }
    ,
    components: {
      todolist: todolist
    }

  }
  ;
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
