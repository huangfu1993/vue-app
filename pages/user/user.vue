<template>
	<view>
		<view class="flex justify-around p-2" style="height: 60rpx;">
			<view v-for="(item, index) in grouping" :key="index" :class="tabSelect === index ? 'main-text font-ml font-weigth' : 'font'" @click="tabClick(index)">
				{{ item.name }}
				<text style="padding-left: 22rpx;" v-if="item.followList.length">{{ item.followList.length }}</text>
			</view>
		</view>

		<swiper :current="tabSelect" :current-item-id="tabSelect" @change="swipeChange" :style="'height:' + swipeHeight + 'px;'">
			<swiper-item v-for="(swiperItem, index) in grouping" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + swipeHeight + 'px;'" @scrolltolower="scrolltolowerBottom(index)">
					<template v-if="swiperItem.followList && swiperItem.followList.length">
						<block v-for="(item, index) in swiperItem.followList">
							<view>
								<view class="flex p-2">
									<view><image :src="item.portrait" mode="aspectFill" style="width: 85rpx; height: 85rpx; border-radius: 50%; margin-right: 20rpx;"></image></view>
									<view class="flex-1">
										<view class="flex justify-between">
											<text class="font-main-color font-ml">{{ item.nickname }}</text>
										</view>
									</view>
								</view>
							</view>
						</block>

						<view class="flex align-center justify-center">{{ swiperItem.showMoreDateText }}</view>
					</template>
					<template v-else>
						<view class="flex align-center justify-center p-6">暂无....</view>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { data } from './data.js';
export default {
	data() {
		return {
			userList: data,
			tabSelect: 0,
			swipeHeight: 0,
			grouping: [
				{
					name: '关注',
					followList: [],
				},
				{
					name: '互关',
					followList: []
				},
				{
					name: '粉丝',
					followList: []
				}
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: d => {
				this.swipeHeight = d.windowHeight - uni.upx2px(98);
			}
		});
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			uni.navigateBack();
		}
	},
	onNavigationBarSearchInputClicked(e) {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	beforeMount() {
		this.getData().then(res => {
			console.log(res);
			this.grouping = res;
		});
	},
	methods: {
		getData() {
			uni.showLoading({
				title: '请求数据中...'
			});
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					const dataItems = this.grouping.map((item, index) => {
						return {
							...item,
							followList: index === 0 ? [] : data,
							id: index
						};
					});

					resolve(dataItems);
					uni.hideLoading();
				}, 1000);
			});
		},
		tabClick(tab) {
			this.tabSelect = tab;
		},
		swipeChange(d) {
			this.tabSelect = d.target.current;
		}
	}
};
</script>

<style></style>
