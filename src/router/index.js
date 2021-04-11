import { createRouter, createWebHistory } from "vue-router";
import routes from "voie-pages";

export const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.name === "dashboard" && !token) {
    next("/login");
  } else if ((to.name === "signup" || to.name === "login") && token) {
    next("/dashboard");
  } else next();
});

router.afterEach((to) => {
  if (to.name === "index") {
    document.title = "How's The Cash?";
  } else {
    document.title = String(to.name).charAt(0).toUpperCase() + String(to.name).slice(1);
  }
});
