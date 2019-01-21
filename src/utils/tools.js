import Vue from 'vue';
import http from './http';

Vue.prototype.$get = http.$get;
Vue.prototype.$post = http.$post;
Vue.directive('allow',{
	inserted:(el,binding,vnode) => {

	}
})
export default {

}
