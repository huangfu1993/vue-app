<template>
	<view>
		<view class="flex p-2">
			<view>
				<image :src="item.portrait" mode="aspectFill" style="width: 85rpx; height: 85rpx; border-radius: 50%; margin-right: 20rpx;"></image>
			</view>
			<view class="flex-1">
				<view class="flex justify-between">
					<text class="font-main-color font-ml">{{item.nickname}}</text>
					<text class="font-lower-color font">{{item.time}}</text>
				</view>
				<view class="font-lower-color font flex align-center justify-between">
					<text>{{item.content}}</text>
					<uni-badge :text="item.newsNum" type="error"></uni-badge>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../components/uni-badge/uni-badge.vue"
	export default {
		components: {
			uniBadge,
		},
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style>
</style>
