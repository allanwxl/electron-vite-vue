import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import loginComponent from "../views/login/index.vue";
import homeComponent from "../views/home/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: loginComponent,
  },
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: homeComponent,
  },
  {
    path: "/exam",
    name: "exam",
    meta: {
      title: "题目查看",
    },
    component: homeComponent,
  },
];
const router = createRouter({
  history: createWebHashHistory(), // 注意这里不能用history模式
  routes,
});

export default router