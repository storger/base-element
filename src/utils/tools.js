import Vue from 'vue';
import http from './http';

Vue.prototype.$get = http.$get;
Vue.prototype.$post = http.$post;
Vue.prototype.$getUploadUrl = () => http.uploadUrl;
Vue.prototype.$getDownload = (id,type) => `${http.downloadUrl}${id}&filetype=${type}`;

Vue.directive('allow',{
	inserted:(el,binding,vnode) => {

	}
})
export default {

}
