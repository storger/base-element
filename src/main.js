// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {router} from './router/index';
import store from './store';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './css/theme/index.css';
import 'nprogress/nprogress.css';
import './utils/tools';
import './router/permission';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
