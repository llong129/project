import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/nav",
    name:"nav",
    component: () =>import("../components/nav.vue"),
    children:[
      {
        path: "/homepage",
        name:"homepage",
        component:()=>import("../views/homepage.vue"),
      },
      {
        path:"/todolist",
        name:"todolist",
        component: () =>import("../views/todolist.vue"),
      },
      {
        path:"/personal",
        name:"personal",
        component: () =>import("../views/personal.vue"),
      },
      {
        path:"/emotion",
        name:"emotion",
        component: () =>import("../views/emotion.vue"),
      },
      {
        path:"/study",
        name:"study",
        component: () =>import("../views/study.vue"),
      },
      {
        path:'/404',
        name:"404",
        component: () =>import("../views/404.vue"),
      },
      {
        path:'/music',
        name:"music",
        component: () =>import("../views/music.vue"),
      },
      {
        path:'/use',
        name:"use",
        component: () =>import("../views/use.vue"),
      },
      {
        path:'/motion',
        name:"motion",
        component: () =>import("../views/motion.vue"),
      }
      // {
      //   path:"/personal",
      //   name:"personal",
      //   component: () =>import("../views/personal.vue"),
      // }
    ]
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
