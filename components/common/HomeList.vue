<template>
	<view>
		<!-- 昵称头像关注 -->
		<view class="p-2 flex justify-between align-center">
			<view class="flex align-center">
				<image :src="item.portrait" lazy-load style="width: 65rpx; height: 65rpx; border-radius: 50%; margin-right: 14rpx;"></image>
				<view>
					<view style="font-size: 30rpx; line-height: 1.5;">{{item.nickname}}</view>
					<text style="font-size: 20rpx; color: #9d9589">{{item.time}}</text>
				</view>
			</view>
			<view class="follow animate__animated animate__fast" hover-class="animate__pulse" @click="follow(!item.isFollow)"
			 v-if="item.isFollow">
				关注
			</view>
			<view class="follow animate__animated animate__fast" hover-class="animate__pulse" @click="follow(!item.isFollow)"
			 v-else>
				取消关注
			</view>
		</view>
		<view class="subSitle">
			{{item.subTitle}}
		</view>
		<image :src="item.bannerImg" v-if="item.bannerImg" class="w-100 b-r-5" style="height: 350rpx;"></image lazy-load>
		<view class="flex align-center justify-between">
			<view 
			class="flex align-center flex-1 justify-center animate__animated animate__fast"
			:class="item.operationType.type === 'support' ? 'main-text' : ''"
			hover-class="animate__pulse active"
			 @click="support('support')">
				<text class="iconfont icon-like m-2"></text>
				<text>{{item.operationType.supportNum}}</text>
			</view>
			<view 
			class="flex align-center flex-1 justify-center animate__animated animate__fast"
			 :class="item.operationType.type === 'unsupport' ? 'main-text' : ''"
			hover-class="animate__pulse active"
			@click="support('unsupport')">
				<text class="iconfont icon-unlike m-2"></text>
				<text>{{item.operationType.unsupportNum}}</text>
			</view>
			<view class="flex align-center flex-1 justify-center">
				<text class="iconfont icon-pinglun m-2" style="color: #333333"></text>
				<text>{{item.operationType.commentNum}}</text>
			</view>
			<view class="flex align-center flex-1 justify-center">
				<text class="iconfont icon-fenxiang m-2"></text>
				<text>{{item.operationType.forward}}</text>
			</view>
		</view>
		<HorizontalBar></HorizontalBar>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {}
		},
		methods: {
			follow(isFollow) {
				this.$emit("follow", isFollow, this.index);
			},

			support(type) {
				this.$emit("support", type, this.index);
			}
		}
	}
</script>
	
<style>
	.active {
		color: #fd597c;
	}
</style>
