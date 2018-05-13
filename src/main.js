// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * 按需引入插件
 *
 * */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import baseUrl from './axios-url/http' // 配置 测试和上线 url 地址
import store from './store'

Vue.config.productionTip = false
/**
 * 添加使用VUE插件
 *
 * */
Vue.use(ElementUI);
/* 配置axios */
Vue.prototype.$http = axios;
axios.defaults.baseURL = baseUrl
axios.defaults.withCredentials = true // 默认请求带cookie

/* 设置每页面的title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  components: { App },
  template: '<App/>'
})
