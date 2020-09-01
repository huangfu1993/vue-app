<template>
	<view class="p-2">
		<scroll-view scroll-x scroll-with-animation show-scrollbar :scroll-into-view="'tab' + tabSelect" class="flex scroll-row"
		 style="height: 100rpx;">
			<text v-for="(item, index) in tabList" :key="index" :id="'tab' + index" class="w-100 p-2" :class="tabSelect === index ? 'main-text font-lg' : 'font-ml'"
			 @click="tabClick(index)">{{item.name}}</text>
		</scroll-view>

		<swiper :current='tabSelect' :current-item-id="index" @change="swipeChange" :style="'height:' + swipeHeight + 'px;'">
			<swiper-item v-for="(swiperItem, index) in tabList" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px;'" @scrolltolower="scrolltolowerBottom(index)">
					<template v-if="swiperItem.tabItemList && swiperItem.tabItemList.length">
						<nearest v-for="(item, listIndex) in swiperItem.tabItemList" :key="listIndex" :item="item" :index="listIndex"
						 @follow="follow" @support="support">
						</nearest>
						<view class="flex align-center justify-center">
							{{swiperItem.showMoreDateText}}
						</view>
					</template>
					<template v-else>
						<view class="flex align-center justify-center p-6">
							暂无数据....
						</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import nearest from '@/components/common/nearest';
	const data = [{
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
	}, {
		title: "甜甜的太阳真大啊",
		imageUrl: "../../static/log/timg.jpg",
		describe: "热死人了",
		dynamic: 67,
		todayDynamic: 10
	}, {
		title: "下班去钓鱼啊",
		imageUrl: "../../static/log/12.jpg",
		describe: "看看谁钓的多",
		dynamic: 67,
		todayDynamic: 10
	}, {
		title: "浑水摸鱼",
		imageUrl: "../../static/log/23.jpg",
		describe: "真香",
		dynamic: 67,
		todayDynamic: 10
	}, {
		title: "来看大妈跳广场舞啊",
		imageUrl: "../../static/log/354.jpg",
		describe: "说不定她们有孙女呢",
		dynamic: 67,
		todayDynamic: 10
	}]
	export default {
		components: {
			nearest
		},

		data() {
			return {
				swipeHeight: 0,
				tabSelect: 0,

				tabList: [{
						name: "关注"
					},
					{
						name: "推荐"
					},
					{
						name: "体育"
					},
					{
						name: "热点"
					},
					{
						name: "财经"
					},
					{
						name: "娱乐"
					},
					{
						name: "军事"
					},
					{
						name: "历史"
					},
					{
						name: "本地"
					},
				],
				list: []
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: d => {
					this.swipeHeight = d.windowHeight - uni.upx2px(100);
				}
			});
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search',
			})
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/addInput/addInput',
			})
		},

		beforeMount() {
			this.getData().then(res => {
				this.tabList = res;
			});
		},

		methods: {
			scrolltolowerBottom(i) {
				this.tabList[i].showMoreDateText = '加载中...';
				setTimeout(() => {
					this.tabList[i].tabItemList = this.tabList[i].tabItemList.concat(data);
					this.tabList[i].showMoreDateText = '下拉加载更多...';
				}, 500)
			},
			getData() {
				uni.showLoading({
					title: '请求数据中...',
				});
				return new Promise((reslove, reject) => {
					setTimeout(() => {
						const dataItems = this.tabList.map((item, index) => {
							if (index < 2) {
								return {
									name: item.name,
									showMoreDateText: '下拉加载更多...',
									tabItemList: data,
									id: index,
								}
							}
							return {
								name: item.name,
								tabItemList: [],
								id: index,
							}
						});

						reslove(dataItems);
						uni.hideLoading();
					}, 1000);
				})
			},
			swipeChange(d) {
				this.tabSelect = d.target.current;
			},
			tabClick(index) {
				this.tabSelect = index;
			},

			follow(isFollow, index) {
				this.tabList[this.tabSelect]['tabItemList'][index].isFollow = isFollow;
			},

			support(support, index) {
				const item = this.tabList[this.tabSelect]['tabItemList'][index];
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
				this.tabList[this.tabSelect]['tabItemList'][index] = item;
			}
		},

	}
</script>

<style>

</style>
