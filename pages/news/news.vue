<template>
	<view class="w-100">
		<uni-nav-bar :border="false" :statusBar="true" :fixed="true">
			<view class="flex align-center justify-center w-100" style="">
				<view class=" font-lg m-2" :class="{'main-text': type === 'follow' }" @click="type = 'follow'">
					关注
				</view>
				<view class="font-lg m-2" :class="{'main-text': type === 'topic' }" @click="type = 'topic'">
					话题
				</view>
			</view>
			<text class="iconfont icon-bi" slot="right"></text>
		</uni-nav-bar>
		<swiper :current="type === 'follow' ? 0 : 1 " :current-item-id="index" @change="swipeChange" :style="'height:' + swipeHeight + 'px;'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px;'">
					<template v-if="list.length">
						<home-list v-for="(item, listIndex) in list" :key="listIndex" :item="item" :index="listIndex" @follow="follow"
						 @support="support">
						</home-list>
					</template>
					<template v-else>
						<view class="flex align-center justify-center p-6">
							暂无数据....
						</view>
					</template>
				</scroll-view>

			</swiper-item>

			<swiper-item>
				<view class="">
					<view class="flex justify-between p-2">
						<view>
							热门分类
						</view>
						<view class="">
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

				<view class="m-2 flex align-center justify-center" style="background-color: #F8F8F8; height: 100rpx;">
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

					<view>
						<view>
							最近更新
						</view>

						<view class="flex">
							<view>
								<image src="../../static/log/23.jpg" mode="" class="lately"></image>
							</view>
							<view>
								<view>
									话题名称
								</view>
								<view>
									话题描述
								</view>
								<view>
									动态42 今日 0
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
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
			HomeList,
		},

		data() {
			return {
				type: 'follow',
				swipeHeight: 0,
				list: [],
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
				}, ]
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: d => {
					this.swipeHeight = d.windowHeight - d.statusBarHeight - 44;
				}
			});
		},

		beforeMount() {
			this.getData().then(res => {
				this.list = res;
			});
		},

		methods: {
			getData() {
				uni.showLoading({
					title: '请求数据中...',
				});
				return new Promise((reslove, reject) => {
					setTimeout(() => {
						reslove(data);
						uni.hideLoading();
					}, 1000);
				})
			},
			swipeChange(d) {
				console.log(d, '哈哈哈哈哈')
				this.type = d.target.current === 1 ? 'topic' : 'follow';
			},
			tabClick(index) {
				this.type = index;
			},

			follow(isFollow, index) {
				this.list[index].isFollow = isFollow;
			},

			support(support, index) {
				const item = this.list[index];
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
				this.list[index] = item;
			}
		},
	}
</script>

<style>
	.hotItem {
		border: 1px solid #c3c3c3;
		background: #e7e7e7;
		color: rgba(0, 0, 0, 0.65);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20rpx;
		border: 4rpx;
		width: 70rpx;
		border-radius: 4rpx;
	}

	.border {
		height: 2rpx;
		width: 100%;
		background-color: #d6d6d6;
	}

	.lately {
		width: 150rpx;
		height: 150rpx;
		border-radius: 4rpx;
		margin-right: 20rpx;
	}
</style>
