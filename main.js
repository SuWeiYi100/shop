import Vue from 'vue'
import App from './App'
import store from './store'

import { myRequest } from "@/util/api.js"

import Json from './Json' //测试用数据


Vue.config.productionTip = false


const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}





Vue.prototype.$store = store;
Vue.prototype.$myRequest = myRequest
Vue.prototype.$api = {json};

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
