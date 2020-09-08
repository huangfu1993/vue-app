<template>
	<view>
		<block v-for="(item, index) in newsList">
			<newsListBar :item="item" :index="index"></newsListBar>
		</block>

		<view>
			<uni-popup ref="popup" type="top">
				<view class="" style="background-color: #fff">
					<view class="flex align-center justify-center p-2 border-bottom" hover-class="light" @click="popupClick('add')">
						<text class="iconfont icon-gonggong-sousuo" />
						<text class="font-second-color font-ml">添加好友</text>
						</text>
					</view>
					<view class="flex align-center justify-center p-2" hover-class="light" @click="popupClick('delete')">
						<text class="iconfont icon-ashbin" />
						<text class="font-second-color font-ml">清除缓存</text>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	const data = [{
			portrait: '../../static/log/img.jpg',
			nickname: '小红',
			content: "今天去吃饭啥 啊",
			time: "12: 21",
			id: 1,
			newsNum: 1,
		},
		{
			portrait: '../../static/log/12.jpg',
			nickname: '兄暗黑',
			"content": "等会去上午昂啊",
			time: "12: 20",
			id: 2,
			newsNum: 1,
		},
		{
			portrait: '../../static/log/23.jpg',
			nickname: '天堂私服',
			content: "刚才我丢了五块钱",
			time: "12: 20",
			id: 8,
		},

		{
			portrait: '../../static/log/354.jpg',
			nickname: '李家小哥',
			content: "晚上回家打麻将啊",
			time: "12: 24",
			id: 3,
			newsNum: 1,
		}, {
			portrait: '../../static/log/eee.jpg',
			nickname: 'j据称这门',
			content: "去玩啊",
			time: "12: 30",
			id: 4,
			newsNum: 2,
		}, {
			portrait: '../../static/log/fff.jpg',
			nickname: '你猜我是谁',
			content: "刚才我丢了五块钱",
			time: "12: 20",
			id: 5,
			newsNum: 1,
		}, {
			portrait: '../../static/log/timg.jpg',
			nickname: '玥玥',
			content: "在干嘛呢，小帅哥",
			time: "12: 20",
			id: 6,
			newsNum: 1,
		}, {
			portrait: '../../static/log/img.jpg',
			nickname: '小红',
			content: "今天去吃饭啥 啊",
			time: "12: 21",
			id: 1,
			newsNum: 1,
		},
		{
			portrait: '../../static/log/12.jpg',
			nickname: '兄暗黑',
			"content": "等会去上午昂啊",
			time: "12: 20",
			id: 2,
			newsNum: 1,
		},
		{
			portrait: '../../static/log/23.jpg',
			nickname: '天堂私服',
			content: "刚才我丢了五块钱",
			time: "12: 20",
			id: 8,
		},

		{
			portrait: '../../static/log/354.jpg',
			nickname: '李家小哥',
			content: "晚上回家打麻将啊",
			time: "12: 24",
			id: 3,
			newsNum: 1,
		}, {
			portrait: '../../static/log/eee.jpg',
			nickname: 'j据称这门',
			content: "去玩啊",
			time: "12: 30",
			id: 4,
			newsNum: 2,
		}, {
			portrait: '../../static/log/fff.jpg',
			nickname: '你猜我是谁',
			content: "刚才我丢了五块钱",
			time: "12: 20",
			id: 5,
			newsNum: 1,
		}, {
			portrait: '../../static/log/timg.jpg',
			nickname: '玥玥',
			content: "在干嘛呢，小帅哥",
			time: "12: 20",
			id: 6,
			newsNum: 1,
		}
	];

	import newsListBar from "../../components/common/newsList.vue"
	export default {
		components: {
			newsListBar,
		},
		data() {
			return {
				newsList: [],
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url:"../user/user"
				});
			}

			if (e.index === 1) {
				this.$refs.popup.open();
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.onRefresh();
		},
		onLoad() {
			this.onRefresh();
		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					this.newsList = data;
					uni.stopPullDownRefresh();
				}, 500)
			},
			popupClick(type) {
				console.log(type);
				this.$refs.popup.close();
			}
		}
	}
</script>

<style>
	.border-bottom {
		border-bottom: 1rpx solid rgba(0, 0, 0, .15);
	}

	.light {
		background-color: #E5E5E5;
	}
</style>
