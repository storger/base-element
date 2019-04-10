import {router,asyncRoutesMap} from './index.js';
import store from '../store';
import NProgress from 'nprogress';
import {
	Message
} from 'element-ui';

// 根据权限匹配路由
function routerMatch(permission,asyncRoute){
	const routes = [];
	function createRouter(permission){
		permission.forEach((item) => {
			if(item.children && item.children.length){
				createRouter(item.children);
			}
			let alias = item.alias;
			asyncRoute.find((rou) => {
				console.log(rou)
				if(!rou.name){
					rou.children.find((v) => {
						if(v.name === alias) {
							routes.push(rou);
						}
					})
				}
				if(rou.name === alias){
					routes.push(rou);
				}
			})
		});
	}
	createRouter(permission);
	console.log(routes);
}
// 路由白名单 
const whitelist = ['404','login','lock'];
function permissionMap(permission,routeName){
	let flag = false;
	if(whitelist.includes(routeName)){
		return flag = true;
	}
	function doPermission(permission){
		permission.forEach((item) => {
			if(item.alias === routeName){
				flag = true;
				return;
			}
			if(item.children && item.children.length){
				doPermission(item.children);
			}
		})
	}
	doPermission(permission);
	return flag;
}
router.addRoutes(asyncRoutesMap);
router.beforeEach((to, from, next) => {
	NProgress.start();
	const loginInfo = window.localStorage.getItem('loginInfo');
	if (to.name === 'home' && from.name === 'login') {
		Message({
			message: '欢迎使用上古网络后台管理系统',
			type: 'success'
		})
	}
	if (to.name === 'login' && loginInfo) { // 已经登录不能跳转登录页
		next({
			name: 'home'
		});
	} else if (to.name !== 'login' && !loginInfo) { // 没有登录只能跳转登录页
		next({
			name: 'login'
		})
	}
	if(!permissionMap(store.state.permission,to.name)){
		next({
			name:'404'
		})
	}
	next();
})
router.afterEach(route => {
	NProgress.done();
})
