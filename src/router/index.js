import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index';
import store from '../store/index';

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
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '商品详情', href: '/product-details' },
      ],
    },
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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '登录', href: '/login' },
      ],
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '注册', href: '/register' },
      ],
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    meta: {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '商品列表', href: '/products' },
      ],
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      pathList: [{ pid: 1, title: '返回首页', href: '/' }],
    },
  },
];

//跳转时，页面滚动回0
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

//重复跳转至同一页面不报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 路由守卫，当用户未登录时，跳转至登录
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.token ? true : false;
  // console.log(store.state.isLogin);
  if (to.path == '/login' || to.path == '/register' || to.path == '/' || to.path == '/products') {
    next();
  } else {
    if (store.state.isLogin) {
      next();
    } else {
      alert('请登录账户');
      next('/login');
    }
  }
});

export default router;
