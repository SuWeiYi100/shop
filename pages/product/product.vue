<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image :src="item" class="loaded" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
        
        <view class="introduce-section">
            <text class="title">{{ goodInfo.goods_name }}</text>
            <view class="price-box">
                <text class="price-tip">¥</text>
                <text class="price">{{ goodInfo.goods_price }}</text>
                <text class="m-price">¥488</text>
                <text class="coupon-tip">7折</text>
            </view>
            <view class="bot-row">
                <text>销量: 108</text>
                <text>库存: {{ goodInfo.goods_num }}</text>
                <text>浏览量: 768</text>
            </view>
        </view>
        
        <view class="c-list">
        	<view class="c-row b-b" @click="toggleSpec">
        		<text class="tit">购买类型</text>
        		<view class="con">
        			<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
        				{{sItem.name}}
        			</text>
        		</view>
        		<text class="yticon icon-you"></text>
        	</view>
        	<view class="c-row b-b">
        		<text class="tit">优惠券</text>
        		<text class="con t-r red">领取优惠券</text>
        		<text class="yticon icon-you"></text>
        	</view>
        	<view class="c-row b-b">
        		<text class="tit">促销活动</text>
        		<view class="con-list">
        			<text>新人首单送20元无门槛代金券</text>
        			<text>订单满50减10</text>
        			<text>订单满100减30</text>
        			<text>单笔购买满两件免邮费</text>
        		</view>
        	</view>
        	<view class="c-row b-b">
        		<text class="tit">服务</text>
        		<view class="bz-list con">
        			<text>7天无理由退换货 ·</text>
        			<text>假一赔十 ·</text>
        		</view>
        	</view>
        </view>
        
        
        <view class="detail-desc">
        	<view class="d-header">
        		<text>图文详情</text>
        	</view>
        	<view class="d-list" v-for="(item,index) in imgList" key="index">
        	    <image :src="item" class="loaded" mode="aspectFill"></image>
        	</view>
        </view>
        
        
        <!-- 底部操作菜单 -->
        		<view class="page-bottom">
        			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
        				<text class="yticon icon-xiatubiao--copy"></text>
        				<text>首页</text>
        			</navigator>
        			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
        				<text class="yticon icon-gouwuche"></text>
        				<text>购物车</text>
        			</navigator>
        			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
        				<text class="yticon icon-shoucang"></text>
        				<text>收藏</text>
        			</view>
        
        			<view class="action-btn-group">
        				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
        				<button type="primary" class=" action-btn no-border add-cart-btn" @click="addCart">加入购物车</button>
        			</view>
        		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
                id:0,
                imgList: [],
                goodInfo:{},
                favorite: false,
                specSelected: [{
                    id: 1,
                    pid: 1,
                    name: 'XL 珊瑚粉',
                }]
            };
		},
        onLoad(option) {
            let id = option.id;
            this.id = id
            this.loadData(); 
        },
		methods: {
			async loadData(){
                try{
                    const res = await this.$myRequest({
                    	url:'/goods/findone',
                    	method: "GET",
                        data:{
                            id:this.id
                        }
                    })
                    //console.log(res);
                    if(res.statusCode == 200){
                        let goodInfo = res.data.result;
                        this.goodInfo = goodInfo || {};
                        this.imgList.push(goodInfo.goods_img)
                        console.log(this.goodInfo);
                    }else{
                        alert('获取商品失败')
                    }
                }catch(err){
                    console.log(err);
                }
            },
            toFavorite(){
                
            },
            buy(){
                
            },
            async addCart(){
                try{
                    const res = await this.$myRequest({
                        url:'/carts',
                        method:'POST',
                        data:{
                            goods_id: this.id-0,
                            number:1
                        }
                    })
                    //console.log(res);
                    alert('加入购物车成功')
                }catch(err){
                    console.log(err);
                }
            }
        }
	}
</script>

<style scoped lang='scss'>
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
    
    .introduce-section {
        background: #fff;
        padding: 20upx 30upx;

        .title {
            font-size: 32upx;
            color: $font-color-dark;
            height: 50upx;
            line-height: 50upx;
        }

        .price-box {
            display: flex;
            align-items: baseline;
            height: 64upx;
            padding: 10upx 0;
            font-size: 26upx;
            color: $uni-color-primary;
        }

        .price {
            font-size: $font-lg + 2upx;
        }

        .m-price {
            margin: 0 12upx;
            color: $font-color-light;
            text-decoration: line-through;
        }

        .coupon-tip {
            align-items: center;
            padding: 4upx 10upx;
            background: $uni-color-primary;
            font-size: $font-sm;
            color: #fff;
            border-radius: 6upx;
            line-height: 1;
            transform: translateY(-4upx);
        }

        .bot-row {
            display: flex;
            align-items: center;
            height: 50upx;
            font-size: $font-sm;
            color: $font-color-light;

            text {
                flex: 1;
            }
        }
    }
    
    .c-list {
    	font-size: $font-sm + 2upx;
    	color: $font-color-base;
    	background: #fff;
    
    	.c-row {
    		display: flex;
    		align-items: center;
    		padding: 20upx 30upx;
    		position: relative;
    	}
    
    	.tit {
    		width: 140upx;
    	}
    
    	.con {
    		flex: 1;
    		color: $font-color-dark;
    
    		.selected-text {
    			margin-right: 10upx;
    		}
    	}
    
    	.bz-list {
    		height: 40upx;
    		font-size: $font-sm+2upx;
    		color: $font-color-dark;
    
    		text {
    			display: inline-block;
    			margin-right: 30upx;
    		}
    	}
    
    	.con-list {
    		flex: 1;
    		display: flex;
    		flex-direction: column;
    		color: $font-color-dark;
    		line-height: 40upx;
    	}
    
    	.red {
    		color: $uni-color-primary;
    	}
    }
    
    .detail-desc {
    	background: #fff;
    	margin-top: 16upx;
    
    	.d-header {
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		height: 80upx;
    		font-size: $font-base + 2upx;
    		color: $font-color-dark;
    		position: relative;
    		text {
    			padding: 0 20upx;
    			background: #fff;
    			position: relative;
    			z-index: 1;
    		}
    		&:after {
    			position: absolute;
    			left: 50%;
    			top: 50%;
    			transform: translateX(-50%);
    			width: 300upx;
    			height: 0;
    			content: '';
    			border-bottom: 1px solid #ccc;
    		}
    	}
        .d-list{
            width: 100%;
            .loaded{
                width: 100%;
                display: block;
            }
        }
    }
    
    .page-bottom {
    		position: fixed;
    		left: 30upx;
    		bottom: 30upx;
    		z-index: 95;
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		width: 690upx;
    		height: 100upx;
    		background: rgba(255, 255, 255, .9);
    		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
    		border-radius: 16upx;
            
    		.p-b-btn {
    			display: flex;
    			flex-direction: column;
    			align-items: center;
    			justify-content: center;
    			font-size: $font-sm;
    			color: $font-color-base;
    			width: 96upx;
    			height: 80upx; 
    
    			.yticon {
    				font-size: 40upx;
    				line-height: 48upx;
    				color: $font-color-light;
    			}
    
    			&.active,
    			&.active .yticon {
    				color: $uni-color-primary;
    			}
    
    			.icon-fenxiang2 {
    				font-size: 42upx;
    				transform: translateY(-2upx);
    			}
    
    			.icon-shoucang {
    				font-size: 46upx;
    			}
    		}
    
    		.action-btn-group {
    			display: flex;
    			height: 76upx;
    			border-radius: 100px;
    			overflow: hidden;
    			box-shadow: 0 20upx 40upx -16upx #fa436a;
    			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
    			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
    			margin-left: 20upx;
    			position: relative;
    
    			&:after {
    				content: '';
    				position: absolute;
    				top: 50%;
    				right: 50%;
    				transform: translateY(-50%);
    				height: 28upx;
    				width: 0;
    				border-right: 1px solid rgba(255, 255, 255, .5);
    			}
    
    			.action-btn {
    				display: flex;
    				align-items: center;
    				justify-content: center;
    				width: 180upx;
    				height: 100%;
    				font-size: $font-base;
    				padding: 0;
    				border-radius: 0;
    				background: transparent;
    			}
    		}
    	}
</style>
