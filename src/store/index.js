import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    // 如果有token就获取token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: '',
    cartItems: [],
  },
  getters: {
    // 获取本地token信息
    getToken(state) {
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem('token'));
      }
      return state.token;
    },
  },
  mutations: {
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
    updateUserInfo(state, value) {
      state.userInfo = value;
    },
  },
  actions: {},
  modules: {},
});
