import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Spring from "./views/Spring.vue";
import Index from "./views/spring/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // mode: "",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/study",
      name: "study",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Study.vue")
    },
    {
      path: "/spring",
      name: "spring",
      component: Spring,
      children: [{
        path: "login",
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/spring/Login.vue")
      }, {
        name: 'loginIndex',
        path: "index",
        props: true,
        component: Index

        // component: () => {
        //   import("./views/Index.vue")
        // }
      }
      ]
    }
  ]
})
;
