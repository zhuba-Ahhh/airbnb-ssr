import { createRouter, createWebHistory } from "vue-router";
import baseRouters from "./modules/base";

const routes = [...baseRouters];

// createWebHistory 历史路由 createWebHashHistory // 哈希路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
