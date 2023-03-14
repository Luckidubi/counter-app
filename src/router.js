import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CounterPage from "@/views/CounterPage.vue";
import Error404Page from "@/views/Error404Page.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/counter",
    name: "CounterPage",
    component: CounterPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error404Page",
    component: Error404Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
