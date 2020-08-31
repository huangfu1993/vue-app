<template>
	<view class="p-2">
		<scroll-view scroll-x scroll-with-animation show-scrollbar :scroll-into-view="'tab' + tabSelect" class="flex scroll-row"
		 style="height: 100rpx;">
			<text v-for="(item, index) in tabList" :key="index" :id="'tab' + index" class="w-100 p-2" :class="tabSelect === index ? 'main-text font-lg' : 'font-ml'"
			 @click="tabClick(index)">{{item.name}}</text>
		</scroll-view>

		<swiper :current='tabSelect' :current-item-id="index" @change="swipeChange" :style="'height:' + swipeHeight + 'px;'">
			<swiper-item v-for="(swiperItem, index) in tabList" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px;'" 
					@scrolltolower="scrolltolowerBottom(index)">
					<template v-if="swiperItem.tabItemList && swiperItem.tabItemList.length">
						<home-list v-for="(item, listIndex) in swiperItem.tabItemList" 
							:key="listIndex" :item="item" :index="listIndex" @follow="follow"
						 @support="support">
						</home-list>
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
			HomeList
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
