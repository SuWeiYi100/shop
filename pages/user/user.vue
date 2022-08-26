<template>
    <view class="container">
        <view class="user-section">
            <image class="bg" src="/static/user_bg.jpg"></image>
            <view class="user-info-box" @click="loginHandle">
            	<view class="portrait-box">
            		<image class="portrait" :src="userInfo.avatarUrl || '/static/missing-face.png'"></image>
            	</view>
            	<view class="info-box">
            		<view class="username">{{userInfo.nickName || '游客'}}</view>
            		<view class="usermobile">手机号:{{userInfo.mobile || '暂无手机号'}}</view>
            	</view>
            </view>
        </view>
        <view class="cover-container">
            <view class="tj-sction">
            	<view class="tj-item">
            		<text class="num">128.8</text>
            		<text>余额</text>
            	</view>
            	<view class="tj-item">
            		<text class="num">0</text>
            		<text>优惠券</text>
            	</view>
            	<view class="tj-item">
            		<text class="num">20</text>
            		<text>积分</text>
            	</view>
            </view>
            <view class="history-section icon">
            	<view class="sec-header" @click="navTo">
            		<text class="yticon icon-shezhi"></text>
            		<text>修改密码</text>
            	</view>
            </view>
        </view>
    </view>
</template>

<script>

export default {
    data() {
        return {
            coverTransform: 'translateY(0px)',
            coverTransition: '0s',
            userInfo:''
        };
    },
    onLoad() {
        this.loadData(); 
    },
    computed: {

    },
    methods: {
        async loadData() {
        	const res = await this.$api.json('userInfo');
            this.userInfo = res.data;
            //console.log(res);
        },
        loginHandle(){
            
        },
        navTo(){
            uni.navigateTo({
                url:'../public/update'
            })
        }
    }
}
</script>
<style scoped lang="scss">
    %flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.user-section {
		height: 320upx;
		padding: 100upx 30upx 0;
		position: relative;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}

		.usermobile {
			font-size: 20rpx;
			color: #331c06;
			margin-left: 20rpx;
		}
	}

	

	.cover-container {
		background: $page-color-base;
		padding: 20upx 30upx 0;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 20upx;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}

	.tj-sction {
		@extend %section;
		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}

	.order-section {
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon {
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
		}

		.icon-shouhoutuikuan {
			font-size: 44upx;
		}
	}

	.history-section {
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;
            padding-bottom: 20upx;
			.yticon {
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
	}
</style>