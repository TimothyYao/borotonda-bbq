import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/location',
      name: 'location',
      component: () => import(/* webpackChunkName: "location" */ './views/Location.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "location" */ './views/Menu.vue'),
    },
  ],
});
