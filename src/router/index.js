import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/product-details',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetails.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '*',
    name: '/NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  //跳转时，页面滚动回0
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
