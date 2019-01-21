import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);
let MENU = [];
const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
if(loginInfo){
	MENU = loginInfo.menu;
}
export default new Vuex.Store({
	state:{
		permission: MENU
	},
	mutations:{
		refreshPermission(state,data){
			state.permission = data;
		}
	}
});