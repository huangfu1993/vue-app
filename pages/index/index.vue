<template>
	<view class="p-2">
		<home-list v-for="(item, index) in list" :key="item.id" :item="item" :index="index" @follow="follow" @support="support"></home-list>
	</view>
</template>

<script>
	import HomeList from '../../components/common/HomeList.vue';

	export default {
		data() {
			return {
				list: [{
						portrait: '../../static/log/img.jpg',
						nickname: '小红',
						time: '2019-10-09 下午 10:22',
						isFollow: false,
						subTitle: '我是标题',
						bannerImg: '../../static/image/h34.jpg',
						operationType: {
							type: 'support',
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
				]
			}
		},
		methods: {
			follow(isFollow, index) {
				this.list[index].isFollow = isFollow;
			},
			support(support, index) {
				const item = this.list[index];
				item.operationType.type = support;
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
				this.list[index] = item;
			}
		},

		components: {
			HomeList
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
