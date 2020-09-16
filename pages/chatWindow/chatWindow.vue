<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px'">
			<view v-for="(item, i) in messageData" :key="i" class="flex align-center" :class="{ 'row-reverse': item.type === 'user' }">
				<view style="margin: 20rpx;"><image class="portraitImg" :src="item.type === 'user' ? user.portrait : friendDetail.portrait" mode=""></image></view>
				<view :class="item.type === 'user' ? 'detailFrameLeft' : 'detailFrameRight'">{{ item.message }}</view>
			</view>
		</scroll-view>
		<view class="chatDetail p-2"></view>
		<view class="fiexBottom flex align-center justify-center p-2">
			<input type="text" value="" class="flex-1 border" v-model="userNews" :adjust-position="false"/>
			<view class="action flex align-center justify-center animate__animated" hover-class="animate__jello" @click="sendNews">发送</view>
		</view>
	</view>
</template>

<script>
export default {
	onLoad(e) {
		const top = JSON.parse(e.friend);
		this.friendDetail = top;
		uni.getSystemInfo({
			success: d => {
				this.swipeHeight = d.windowHeight - uni.upx2px(101);
			}
		})
	},
	data() {
		return {
			list: [],
			swipeHeight: 0,
			messageData: [
				{
					type: 'friend',
					message: '你好啊'
				},
				{
					type: 'user',
					message: '你好'
				},
				{
					type: 'user',
					message: '在干嘛呢'
				}
			],
			friendDetail: {},
			user: {
				portrait: '../../static/log/23.jpg'
			},
			userNews: '',
		};
	},
	methods: {
		sendNews() {
			if (!this.userNews) {
				return
			}
			this.messageData.push({
				type: 'user',
				message: this.userNews,
			});
			this.userNews = '';
			setTimeout(() => {
				this.friendSend()
			}, 1000)
		},

		friendSend() {
			this.messageData.push({
				type: 'friend',
				message: '今天真好呀',
			});
		}
	}
};
</script>

<style>
.fiexBottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	border-top: 1px solid #e8e8e8;
	background: #f3f3f3;
}

.portraitImg {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}

.detailFrameLeft {
	padding: 0 20rpx;
	max-width: 600rpx;
	border-radius: 10rpx;
	background: #5fc76c;
}

.detailFrameRight {
	padding: 0 20rpx;
	max-width: 600rpx;
	border-radius: 10rpx;
	background: #eeeeee;
}

.action {
	width: 120rpx;
	height: 80rpx;
	border-radius: 12rpx;
	font-size: 30rpx;
	background: #86e2e5;
	color: #fff;
	margin-left: 20rpx;
}

.border {
	border: 1rpx solid #c0c0c0;
	border-radius: 12rpx;
	height: 80rpx;
	background: #fff;
	padding: 0 10rpx;
}

.chatDetail {
	background: #fff;
}

.row-reverse {
	flex-direction: row-reverse;
}
</style>
