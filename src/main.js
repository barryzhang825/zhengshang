// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import App from './App'
import router from './router'
import Es6Promise from 'es6-promise'
import FastClick from 'fastclick'
import axios from 'axios';
import 'babel-polyfill';
import {animateFun,fetchGet,fetchPost,fetchPut,fetchDelete} from './common/common.js';
Vue.prototype.$get = fetchGet;
Vue.prototype.$post = fetchPost;
Vue.prototype.$put = fetchPut;
Vue.prototype.$delete = fetchDelete;
Vue.prototype.$ami = animateFun;
Vue.use(ElementUI);
//Vue.use(VueAwesomeSwiper);
FastClick.attach(document.body)
Es6Promise.polyfill();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//路由跳转后页面回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
