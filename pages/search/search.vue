<template>
	<view class="p-2">
		<view v-if="result.length === 0">
			<view>
				<view class="font-ml">
					所搜历史：
				</view>
				<view class="flex flex-wrap">
					<view v-for="item in searchValueHistory" :key="item" class="valueItem" @click="historyClick(item)">{{item}}</view>
				</view>
			</view>
		</view>
		<block v-for="(item, i) in result" :key="i" >
			<home-list :item="item" :index="i">
			</home-list>
		</block >

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
				searchValueHistory: ['这世界那么黑', '为啥你那么白'],
				searchValue: '',
				result: []
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchValue = e.text;
		},

		onNavigationBarSearchInputConfirmed(e) {
			this.onSearch();
		},

		onNavigationBarButtonTap(e) {
			this.onSearch();
		},

		methods: {
			historyClick(t) {
				this.searchValue = t;
				this.onSearch('history');
			},
			onSearch(t) {
				uni.showLoading({
					title: "加载中...",
					mask: true,
				});
				if (!t) {
					const list = [...this.searchValueHistory];
					uni.hideKeyboard();
					if (list.length > 10) {
						list.pop().unshift(this.searchValue);
					} else if (list.includes(this.searchValue)) {
						const i = list.indexOf(this.searchValue);
						list.splice(i, 1);
					} else {
						list.unshift(this.searchValue);
					}
					this.searchValue = '';
					this.searchValueHistory = [...list];
				}

				setTimeout(() => {
					uni.hideLoading();
					this.result = data;
				}, 2000);
			}

		}
	}
</script>

<style>
	.valueItem {
		border-radius: 8rpx;
		border: 1rpx solid #dee2e6;
		margin-right: 20rpx;
		padding: 0 10rpx;
	}
</style>
