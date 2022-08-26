import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 存储token
		Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
	},
	mutations: {
		changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        }
	},
	actions: {
	
	}
})

export default store
