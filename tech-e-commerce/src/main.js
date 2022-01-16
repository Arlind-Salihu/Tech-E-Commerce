import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import {fb} from './firebase'


Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user){
  if(!app){
    new Vue({
      router,
      render: h => h(App),
    }).$mount("#app");
  }
});