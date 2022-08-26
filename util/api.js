
var BASE_URL = '';

// #ifdef H5
BASE_URL = '/api';
// #endif


export const myRequest = ( options )=>{
	//console.log(BASE_URL);
	//console.log(options);
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
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