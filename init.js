import config from "./config.js"
export default function initApp() {
	/*页面跳转拦截器*/
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				const token = localStorage.getItem('Authorization')
				const url = e.url.split('?')[0];
				let notNeed = config.whiteList.includes(url)
				if (notNeed) {
					return e
				} else {
					if (token == null) {
						uni.showToast({
							title: '请先登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: config.loginPage
						})
						return false
					}else{
						return e
					}
				}
				
			},
			fail(err) {
				console.log(err);
				if (Debug) {
					console.log(err);
					uni.showModal({
						content: JSON.stringify(err),
						showCancel: false
					});
				}
			}
		})
	})
}