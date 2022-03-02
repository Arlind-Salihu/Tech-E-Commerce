import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import ProductList from "../sections/ProductList.vue";
import ProductDetails from "../sections/ProductDetails.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
import Users from "../views/Users.vue";
import {fb} from '../firebase';

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products-list",
    component: ProductList,
  },
  {
    path: "/productDetails",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {requiresAuth: true},
    children:[
      { 
        path: "Users",
        name: "users",
        component: Users
      },
      {
          path: "products",
          name: "products",
          component: Products
      },
      {
          path: "profile",
          name: "profile",
          component: Profile
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
    },
    ]
  },
  {
    path: "/checkout",
    name: "checkout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
]
});

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;