<template>
	<view>
		<view>
			<image :src="details.imageUrl" mode="aspectFill" style="height: 300rpx; width: 100%; filter: blur(10px);"></image>
		</view>
		<view class="topicDetails">
			<view class="p-2">

				<view class="subTitle flex">
					<image :src="details.imageUrl" mode="aspectFill" class="image"></image>
					<text class="font-ml font-main-color" style="margin-left: 20rpx; font-weight: 900;">##{{ details.title }}##</text>
				</view>


				<view class="font-three-color font" style="margin: 10rpx 0;">
					<text>动态</text>
					<text style="margin: 20rpx">{{ details.dynamic }}</text>
					<text style="margin: 20rpx">今日</text>
					<text>{{ details.todayDynamic }}</text>
				</view>
				<view class="font-lower-color font-ml" style="margin: 10rpx 0;">
					<text>{{ details.describe }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['details'],
		watch: {
			details: {
				handler: function(val, oldval) {
					if (JSON.stringify(oldval) !== JSON.stringify(val)) {
						this.details = val
					}
				},
				deep: true //对象内部的属性监听，也叫深度监听
			},
		}
	}
</script>

<style>
	.subTitle {
		z-index: 20;
	}

	.image {
		height: 150rpx;
		width: 150rpx;
		margin-top: -75rpx;
	}
</style>
