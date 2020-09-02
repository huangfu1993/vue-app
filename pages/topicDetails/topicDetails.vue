<template>
	<view>
		<TopicInfo :details="details" />
		<HorizontalBar></HorizontalBar>
		<view class="p-2">
			<view class="flex align-center font">
				<text class="iconfont icon-gonggong-remen" style="color: red"></text>
				<text class="text-ellipsis">【热点介绍】 焦点关注，今天的太阳真大，气温达到了43度，鸡蛋都孵出小鸡了，</text>
			</view>

			<view class="flex align-center font" style="50rpx">
				<text class="iconfont icon-gonggong-remen" style="color: red"></text>
				<text class="text-ellipsis">【热点介绍】 丧心病狂，好心帮助老大爷过马路，他竟然这样做，</text>
			</view>
		</view>

		<HorizontalBar></HorizontalBar>

		<view>
			<view class="flex justify-around w-100 p-2">
				<view :class="tabSelect === 'default' ? 'main-text font-ml font-weigth' : 'font'" @click="tabClick('default')">
					默认
				</view>
				<view :class="tabSelect === 'newest' ? 'main-text font-ml font-weigth' : 'font'" @click="tabClick('newest')">
					最新
				</view>
			</view>
			<block v-for="(item, index) in topicList" :key="index">
				<view class="p-2">
					<HomeList :item="item" @follow="follow" @support="support" :index="index" />
				</view>
			</block>

		</view>
	</view>
</template>

<script>
	import TopicInfo from '@/components/common/topicInfo.vue';
	import HomeList from '@/components/common/HomeList.vue';
	const data = [{
			portrait: '../../static/log/img.jpg',
			nickname: '小红',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/h34.jpg',
			operationType: {
				type: '',
				supportNum: 1,
				unsupportNum: 1,
				commentNum: 1,
				forward: 1
			},
			id: 1
		},
		{
			portrait: '../../static/log/12.jpg',
			nickname: '兄暗黑',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/a9.jpg',
			operationType: {
				type: 'unsupport',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 2
		},
		{
			portrait: '../../static/log/23.jpg',
			nickname: '天堂私服',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/dada.jpg',
			operationType: {
				type: '',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 8
		},

		{
			portrait: '../../static/log/354.jpg',
			nickname: '李家小哥',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '',
			operationType: {
				type: 'unsupport',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 3
		}, {
			portrait: '../../static/log/eee.jpg',
			nickname: 'j据称这门',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/h2.jpg',
			operationType: {
				type: 'support',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 4
		}, {
			portrait: '../../static/log/fff.jpg',
			nickname: '你猜我是谁',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/h3.jpg',
			operationType: {
				type: 'support',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 5
		}, {
			portrait: '../../static/log/timg.jpg',
			nickname: '玥玥',
			time: '2019-10-09 下午 10:22',
			isFollow: false,
			subTitle: '我是标题',
			bannerImg: '../../static/image/hah.jpg',
			operationType: {
				type: 'support',
				supportNum: 11,
				unsupportNum: 22,
				commentNum: 12,
				forward: 1
			},
			id: 6
		}
	];

	export default {
		components: {
			TopicInfo,
			HomeList
		},
		data() {
			return {
				details: {},
				topicList: [],
				tabSelect: 'default'
			}
		},
		onLoad(e) {
			const top = JSON.parse(e.detail);
			this.details = top;
			this.getList().then(res => {
				uni.hideLoading();
				this.topicList = res;
			});
		},
		methods: {
			getList(type) {
				uni.showLoading({
					title: "加载中..."
				})
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const list = type === 'default' ? data : data.reverse()
						resolve(list);
					}, 300)
				});
			},
			tabClick(tab) {
				this.tabSelect = tab;
				this.getList().then(res => {
					this.topicList = res;
					uni.hideLoading();
				})
			},
			follow(isFollow, index) {
				this.topicList[index].isFollow = isFollow;
			},

			support(support, index) {
				const item = this.topicList[index];
				if (item.operationType.type === support) {
					return;
				}
				if (item.operationType.type) {
					if (support === 'support') {
						item.operationType.supportNum += 1;
						item.operationType.unsupportNum -= 1;
					} else {
						item.operationType.supportNum -= 1;
						item.operationType.unsupportNum += 1;
					}
				} else {
					if (support === 'support') {
						item.operationType.supportNum += 1;
					} else {
						item.operationType.unsupportNum += 1;
					}
				}

				item.operationType.type = support;
				this.topicList[index] = item;
			}
		},
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
