import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import layout from '@/components/layout/layOut';
import login from '@/views/pages/login'
import home from '@/views/pages/home'
import lock from '@/views/pages/lock'
import error from '@/views/pages/404'

import base from '@/views/element/children/base'
import editor from '@/views/element/children/editor'

export const router = new Router({
	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path:'/lock',
		name:'lock',
		component:lock,
	},
	{
		path:'/404',
		name:'404',
		component:error,
	},
	,{
		path:'*',
		redirect:'/404'
	}
	]
});
// 异步路由
export const asyncRoutesMap = [
	{
		path: '/page',
		component: layout,
		children: [
			{
				path: 'home',
				name: 'home',
				meta: {
					title: '首页'
				},
				component: home
			}
		]
	},
	{
		path: '/element',
		component: layout,
		children: [{
			path: 'base',
			name: 'base',
			meta: {
				title: '基本组件',
			},
			component: base
		},
		{
			path: 'editor',
			name: 'editor',
			meta: {
				title: '富文本',
			},
			component: editor
		},
		]
	}
]
