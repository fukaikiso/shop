import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    // 如果有token就获取token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: {},
    detailItem: {},
    userAddress: [
      { aid: 1, title: '谢谢', address: '湖北省武汉市洪山区关山口', phone: '13244040400', default: true },
      { aid: 2, title: '小泽', address: '广东省广州市番禺区', phone: '13242530400', default: false },
      { aid: 3, title: '小明', address: '湖北省武汉市江汉区', phone: '15234040400', default: false },
    ],
    cartItems: [
      { pid: 7, title: '胡萝卜', spec: '1kg', price: 6, discount: 0.1, img: '/images/products/cart/01.png', count: 1, isFavorited: false },
      { pid: 6, title: '水萝卜', spec: '1kg', price: 8, discount: 0.2, img: '/images/products/cart/02.png', count: 1, isFavorited: false },
      { pid: 4, title: '西红柿', spec: '1kg', price: 5, discount: 0, img: '/images/products/cart/03.png', count: 1, isFavorited: false },
    ],
    favoriteItems: [],
  },
  getters: {
    favoriteItemsId(state) {
      let id = [];
      state.favoriteItems.forEach((i) => {
        id.push(i.pid);
      });
      return id;
    },
    // 获取本地token信息
    getToken(state) {
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem('token'));
      }
      return state.token;
    },
    //获取默认地址
    getDefaultAddress(state) {
      state.userAddress.forEach((i) => {
        if (i.default) {
          return i;
        }
      });
    },
    //获取总价
    sumPrice(state) {
      let totalPrice = 0;
      let saveMoney = 0;
      let currentPrice = 0;
      state.cartItems.forEach((i) => {
        totalPrice += i.price * i.count;
        saveMoney += i.price * i.discount * i.count;
      });
      currentPrice = totalPrice - saveMoney;
      return { totalPrice, saveMoney, currentPrice };
    },
  },
  mutations: {
    // 更新商品详情
    updateDetialItem(state, item) {
      state.detailItem = { ...item };
      // 新增的属性需要用set设置setter和getter方法
      Vue.set(state.detailItem, 'count', 1);
      // console.log(state.detailItem);
    },
    // 更改登录状态
    switchIsLogin(state) {
      state.isLogin = !state.isLogin;
    },
    setToken(state, value) {
      state.token = value;
      localStorage.setItem('token', value);
    },
    removeToken(state) {
      state.token = '';
      localStorage.removeItem('token');
    },
    // 更新用户信息
    updateUserInfo(state, value) {
      state.userInfo = value;
    },
    // 修改购物数量
    changeCount(state, arg) {
      let index = parseInt(arg.index);
      if (arg.mode == 'multi') {
        state.cartItems[index].count = arg.count;
      } else {
        Vue.set(state.detailItem, 'count', arg.count);
      }
    },
    // 删除购物车项目
    deleteItem(state, i) {
      state.cartItems.splice(i, 1);
    },
    //加入购物车
    addToCart(state, item) {
      state.cartItems.push(item);
    },
    //清空购物车
    clearCart(state) {
      state.cartItems = [];
    },
    // 更新心愿单
    updateFavoriteItem(state, arg) {
      let deleteIndex = -1;
      if (arg.isActive) {
        state.favoriteItems.push(arg.item);
      } else {
        state.favoriteItems.forEach((fi, i) => {
          if (fi.pid == arg.item.pid) {
            deleteIndex = i;
          }
        });
        state.favoriteItems.splice(deleteIndex, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
