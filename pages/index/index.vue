<template>
	<view>
		<block v-for="item in list" :key="item.id">
			<!-- 昵称头像关注 -->
			<view class="p-2 flex justify-space-between align-center">
				<view style="display: flex; align-items: center;">
					<image :src="item.portrait" lazy-load style="width: 65rpx; height: 65rpx; border-radius: 50%; margin-right: 14rpx;"></image>
					<view>
						<view style="font-size: 30rpx; line-height: 1.5;">{{item.nickname}}</view>
						<text style="font-size: 20rpx; color: #9d9589">{{item.time}}</text>
					</view>
				</view>
				<view style="background: #fd597c; width: 90rpx; line-height: 50rpx; text-align: center; border-radius: 4rpx; color: #FFFFFF;">
					关注
				</view>
			</view>
			<view class="subSitle">
				{{item.subTitle}}
			</view>
			<image :src="item.bannerImg" style="width: 750rpx; height: 350rpx; border-radius: 5px;"></image lazy-load>
			<view class="footer" style="display: flex; justify-content: space-between; align-items: center;">
				<view style="flex: 1;display: flex; justify-content: center; align-items: center;">
					<text class="iconfont icon-like m-2"></text>
					<text>{{item.operationType.supportNum}}</text>
				</view>
				<view style="flex: 1;display: flex; justify-content: center; align-items: center;">
					<text class="iconfont icon-unlike m-2"></text>
					<text>{{item.operationType.unsupportNum}}</text>
				</view>
				<view style="flex: 1;display: flex; justify-content: center; align-items: center;">
					<text class="iconfont icon-pinglun m-2" style="color: #333333"></text>
					<text>{{item.operationType.commentNum}}</text>
				</view>
				<view style="flex: 1;display: flex; justify-content: center; align-items: center;">
					<text class="iconfont icon-fenxiang m-2"></text>
					<text>{{item.operationType.forward}}</text>
				</view>
			</view>
		</block>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						portrait: '../../static/log/img.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/h34.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 1
					},
					{
						portrait: '../../static/log/12.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/a9.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 2
					},
					{
						portrait: '../../static/log/23.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/dada.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 8
					},
					
					{
						portrait: '../../static/log/354.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/gh.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 3
					},{
						portrait: '../../static/log/eee.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/h2.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 4
					},{
						portrait: '../../static/log/fff.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/h3.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 5
					},{
						portrait: '../../static/log/timg.jpg',
						nickname: '昵称',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/hah.jpg',
						operationType: {
							supportType: 'support',
							supportNum: 11,
							unsupportNum: 22,
							commentNum: 12,
							forward: 1
						},
						id: 6
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		.subSitle {
			font-size: 30rpx;
		}
	}
</style>
