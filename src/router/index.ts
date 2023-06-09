import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import homeComponent from "../views/home/index.vue";
import chatGptComponent from "../views/chatGpt/index.vue";
import awsExamComponent from "../views/awsExam/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: homeComponent,
  },
  {
    path: "/awsExam",
    name: "awsExam",
    meta: {
      title: "题库",
    },
    component: awsExamComponent,
  },
  {
    path: "/chatGpt",
    name: "chatGpt",
    meta: {
      title: "ChatGpt",
    },
    component: chatGptComponent,
  },
];
const router = createRouter({
  history: createWebHashHistory(), // 注意这里不能用history模式
  routes,
});

const whiteList = ['/home', '/redirect']
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    console.log('白名单跳过' + to.path)
    next()
    return
  }
  next()
})

export default router