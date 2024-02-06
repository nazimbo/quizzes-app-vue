import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Quizz from "../views/QuizzView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/quizzes/:id",
      name: "Quizz",
      component: Quizz,
    },
  ],
});

export default router;
