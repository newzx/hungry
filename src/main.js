// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import './common/stylus/index.styl';
const routes = [{
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  }
];
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes,
  linkActiveClass: 'active'
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
router.push({
  path: '/goods'
});
