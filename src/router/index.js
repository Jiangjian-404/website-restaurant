import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/backmain",
    component: () => import("@/views/BackMain"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/BackHome/BackHome")
      },
      {
        path: "/backshoplist",
        name: "backshoplist",
        component: () => import("@/views/BackShopList/BackShopList")
      }
    ]
  },
  {
    path: "/backlogin",
    component: () => import("@/views/BackLogin/BackLogin")
  },
  {
    path: "/",
    component: () => import("@/views/HomePage"),
    children: [
      {
        path: "/",
        component: () => import("@/views/MainHome/MainHome")
      },
      {
        path: "/shopdetail",
        component: () => import("@/views/ShopDetail/ShopDetail")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
