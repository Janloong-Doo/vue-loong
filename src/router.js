import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Spring from "./views/Spring.vue";
import Index from "./views/spring/Index.vue";
import Login from "./views/spring/Login.vue";

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
      name: "spring",
      path: "/spring",
      component: Spring,
      children: [
        {
          name: 'loginPage',
          path: "/spring/login",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/spring/Login.vue")
        },
        {
          name: 'loginIndex',
          path: "/spring/index",
          props: true,
          component: Index
        //   children:[
        //     {
        //
        //     }
        //   ]
        },
        {
          name: 'user',
          path: "/spring/:id/user",
          // props: true,
          props: (route) => ({name: 'doo', age: '25', id: route.params.id}),
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/spring/User.vue")
        }


      ]
    }
  ]
})
;
