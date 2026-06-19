import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomeView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
    },
  ],
});

router.beforeEach((to) => {
  if (to.name === "NotFound") {
    return "/";
  }
});

export default router;
