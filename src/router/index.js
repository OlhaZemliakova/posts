import { createRouter, createWebHistory } from "vue-router";
import Posts from "@/views/Posts.vue";
import MapComponent from "@/views/MapComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Posts,
    },
    {
      path: "/map",
      component: MapComponent,
    },
  ],
});

export default router;
