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
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '关于我们', href: '/about' },
      ],
    },
  },
  {
    path: '/user',
    name: 'User',
    redirect: '/user/profile',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('../components/VegProfile.vue'),
        meta: {
          pathList: [
            { pid: 1, title: '首页', href: '/' },
            { pid: 2, title: '用户中心', href: '/user' },
            { pid: 3, title: '个人主页', href: '/user/profile' },
          ],
          tabIndex: 0,
        },
      },
      {
        path: 'wish-list',
        component: () => import('../components/VegWishList.vue'),
        meta: {
          pathList: [
            { pid: 1, title: '首页', href: '/' },
            { pid: 2, title: '用户中心', href: '/user' },
            { pid: 3, title: '收藏列表', href: '/user/wish-list' },
          ],
          tabIndex: 1,
        },
      },
      {
        path: 'orders',
        component: () => import('../components/VegOrders.vue'),
        meta: {
          pathList: [
            { pid: 1, title: '首页', href: '/' },
            { pid: 2, title: '用户中心', href: '/user' },
            { pid: 3, title: '订单详情', href: '/user/orders' },
          ],
          tabIndex: 2,
        },
      },
      {
        path: 'track',
        component: () => import('../components/VegTrack.vue'),
        meta: {
          pathList: [
            { pid: 1, title: '首页', href: '/' },
            { pid: 2, title: '用户中心', href: '/user' },
            { pid: 3, title: '物流信息', href: '/user/track' },
          ],
          tabIndex: 3,
        },
      },
    ],
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckOut.vue'),
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '结算中心', href: '/checkout' },
      ],
    },
  },
  {
    path: '*',
    name: 'NotFound',
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
