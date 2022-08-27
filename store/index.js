import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 存储token
		Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        userInfo:localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '',
	},
	mutations: {
		changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        loginUserInfo(state, user){
            state.userInfo = user.userInfo;
            localStorage.setItem('userInfo', user.userInfo);
        }
	},
	actions: {
	
	}
})

export default store
