<template>
	<view>
		<view class="">
			<view class="flex justify-between p-2">
				<view class="classification">
					热门分类
				</view>
				<view @click="showMore">
					更多
				</view>
			</view>
			<view class="flex">
				<view class="m-2 hotItem font-sm" v-for="(item, index) in hotList" :key="index">
					{{item.name}}
				</view>
			</view>
			<view class="border"></view>
		</view>

		<view class="m-2 flex align-center justify-center" style="background-color: #F8F8F8; height: 120rpx;">
			<text class="iconfont icon-gonggong-sousuo" style="margin-right: 10rpx;"></text> 搜索话题
		</view>

		<view class="p-2">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<swiper-item>
					<view>
						<image src="../../static/image/dada.jpg" mode="" style="height: 300rpx; width: 100%;" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view>
						<image src="../../static/image/h2.jpg" mode="" style="height: 300rpx; width: 100%;" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view>
						<image src="../../static/image/h3.jpg" mode="" style="height: 300rpx; width: 100%;" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['swipeHeight'],
		data() {
			return {
				hotList: [{
					name: '关注'
				}, {
					name: '推荐'
				}, {
					name: '体育'
				}, {
					name: '热点'
				}, {
					name: '娱乐'
				}, {
					name: '军事'
				}, {
					name: '经济'
				}]
			}
		},
		methods: {
			showMore() {
				uni.navigateTo({
					url: "/pages/newsMore/newsMore"
				});
			}
		}
	}
</script>

<style>
	.classification {
		font-size: 36rpx;
		font-weight: 500;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
