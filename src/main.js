// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible';
import axios from 'axios';
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index';
import 'muse-components/styles/base.less'; // muse ui加载基础的样式
require('babel-polyfill');
Vue.use(VueRouter);
// axios  http请求类
Vue.prototype.$http = axios;
FastClick.attach(document.body);
// ///注册
// Vue.component(Field.name, Field);
// ////////////////////jquery 引入
// Vue.prototype.$jquery = $;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
