<template>
	<view class="flex" @click="openTopicDetails">
		<view>
			<image :src="item.imageUrl" mode="" class="lately"></image>
		</view>
		<view>
			<view class="font-ml font-main-color">
				##{{ item.title }}##
			</view>
			<view class="font-three-color">
				{{ item.describe }}
			</view>
			<view class="font-three-color">
				<text>动态</text>
				<text style="margin: 20rpx">{{ item.dynamic }}</text>
				<text style="margin: 20rpx">今日</text>
				<text>{{ item.todayDynamic }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["item"],
		methods: {
			openTopicDetails() {
				console.log('aaaaaaaaa')
				uni.navigateTo({
					url: `../../pages/topicDetails/topicDetails?detail=${JSON.stringify(this.item)}`
				})
			}
		}
	}
</script>

<style>
	.lately {
		width: 150rpx;
		height: 150rpx;
		border-radius: 4rpx;
		margin-right: 20rpx;
	}
</style>
