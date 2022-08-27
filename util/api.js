import store from '../store/index'
var BASE_URL = '';

// #ifdef H5
BASE_URL = '/api';
// #endif


export const myRequest = ( options )=>{
	//console.log(BASE_URL);
	//console.log(options);
	return new Promise((resolve,reject)=>{
        const token = store.state.Authorization
		uni.request({
			url: BASE_URL + options.url,
            header:{
                'authorization': token,
                'Content-Type': 'application/json'
            },
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				resolve(res)
			},
			fail: (err) =>{
				// uni.showToast({
				// 	title:"请求借口失败"
				// })
				reject(err)
			}
		})
	})
}