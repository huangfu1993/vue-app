<template>
	<view class="w-100">
		<uni-nav-bar :border="false" :statusBar="true" :fixed="true">
			<view class="flex align-center justify-center w-100" style="">
				<view class=" font-ml m-2" :class="[{'main-text': type === 'follow'}, {'font-lg': type === 'follow' }]" @click="type = 'follow'">
					关注
				</view>
				<view class="font-ml m-2" :class="[{'main-text': type === 'topic'},{'font-lg': type === 'topic' }]" @click="type = 'topic'">
					话题
				</view>
			</view>
			<text class="iconfont icon-bi" slot="right"></text>
		</uni-nav-bar>
		<swiper :current="type === 'follow' ? 0 : 1 " @change="swipeChange" :style="'height:' + swipeHeight + 'px;'">
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
				<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px;'">
					<template>
						<view>
							<topic></topic>
						</view>
						<view>
							<block v-for="(item, index) in updateObj" :key="index">
								<nearest :item="item"></nearest>
							</block>
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import HomeList from '@/components/common/HomeList.vue';
	import topic from '@/components/common/topic.vue';
	import nearest from '@/components/common/nearest';

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
			nearest,
			topic,
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
				}],
				updateObj: [{
					title: "今日说法",
					imageUrl: "../../static/log/23.jpg",
					describe: "话题描述",
					dynamic: 67,
					todayDynamic: 10
				}, {
					title: "下班看电影",
					imageUrl: "../../static/log/12.jpg",
					describe: "这个电影很好看",
					dynamic: 67,
					todayDynamic: 10
				}, {
					title: "一起去逛街啊",
					imageUrl: "../../static/log/354.jpg",
					describe: "最近没衣服穿了",
					dynamic: 67,
					todayDynamic: 10
				}, {
					title: "来喝酒啊",
					imageUrl: "../../static/log/eee.jpg",
					describe: "全是女的",
					dynamic: 67,
					todayDynamic: 10
				}, {
					title: "下班开黑啊",
					imageUrl: "../../static/log/fff.jpg",
					describe: "上分万岁",
					dynamic: 67,
					todayDynamic: 10
				}, {
					title: "回家带娃啊",
					imageUrl: "../../static/log/img.jpg",
					describe: "娃真好看",
					dynamic: 67,
					todayDynamic: 10
				}],
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
</style>
