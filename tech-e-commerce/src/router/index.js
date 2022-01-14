import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";

Vue.use(Router);

export default  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children:[
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
          path: "products",
          name: "products",
          component: Products
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
    },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]
})