import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(vueAxios, axios);
axios.defaults.baseURL = 'http://127.0.0.1:3000';

//添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (store.state.token) {
      config.headers.common.token = store.state.token;
    }
    return config;
  },
  (error) => {
    //对请求错误做什么
    return Promise.reject(error);
  }
);

//http reponse响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          router.replace({
            path: '/views/login',
            query: { redirect: router.currentRoute.fullPath }, //登录成功后跳入浏览的当前页面
          });
      }
    }
  }
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
