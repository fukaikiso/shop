import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vueAxios from 'vue-axios';

Vue.config.productionTip = false;

// 绑定eventBus
Vue.prototype.$EventBus = new Vue();

Vue.use(vueAxios, axios);
axios.defaults.baseURL = 'http://api.veg.fukaikiso.cn:3000/';
// axios.defaults.withCredentials = true;

//添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (store.state.token) {
      config.headers.Authorization = store.state.token;
    }
    return config;
  },
  (error) => {
    //对请求错误做什么
    return Promise.reject(error);
  }
);

//http reponse响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           alert('请重新登录');
//           store.state.token = '';
//           localStorage.removeItem('token');
//           router.replace({
//             path: '/views/login',
//             query: { redirect: router.currentRoute.fullPath }, //登录成功后跳入浏览的当前页面
//           });
//       }
//     }
//   }
// );

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
