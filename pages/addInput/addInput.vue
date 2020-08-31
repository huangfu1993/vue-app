<template>
	<view class="p-2">
		<uni-nav-bar left-icon="back" statusBar :border="false" @clickLeft="clickLeft">
			<view class="w-100 flex justify-center align-center">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<textarea v-model="textareavalue" placeholder="说一句话吧~" class="uni-textarea" />
		<!-- 图片上传 -->
		
		<upload-image @imageListChange="imageListChange" :listCatch="imageList"></upload-image>
		<!-- 底部操作条 -->
		<view class="position-bottom bg-white flex align-center" style="height: 85rpx;">
			<view class="bottomLeftAction animate__animated" hover-class="animate__jello">菜单</view>
			<view class="bottomLeftAction animate__animated" hover-class="animate__jello">#</view>
			<view class="bottomLeftAction animate__animated" hover-class="animate__jello">图片</view>
			<view class="flex align-center justify-center main-bg b-r-5 animate__animated" hover-class="animate__jello" style="margin-left: auto; width: 140rpx; height: 60rpx; margin-right: 20rpx;">
				发布
			</view>
		</view>
	</view>
</template>

<script>
	import UniSearchBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		comments: {
			UniSearchBar,
		},
		data() {
			return {
				textareavalue: '',
				imageList: []
			}
		},
		
		onLoad() {
			try {
				uni.getStorage({
					key: "APPINOUT",
					success: res => {
						const thisObj = JSON.parse(res.data) || {};
						this.textareavalue = thisObj.value;
						this.imageList = thisObj.list || [];
					},
					fail: err => console.err(err, '请求错误')
				})
			} catch (err) {
				throw err
			}
		},
		methods: {
			imageListChange(list) {
				this.imageList = list;
			},
			clickLeft() {
				if (!!this.textareavalue || !!this.imageList.length) {
					uni.showModal({
							title: '提示',
							content: '是否保存为草稿？',
							success: res => {
								if (res.confirm) {
									const obj = { list: this.imageList, value: this.textareavalue };
									uni.setStorage({
										key: "APPINOUT",
										data: JSON.stringify(obj),
										success() {
											uni.navigateBack();
										}
									})
								} else if (res.cancel) {
									uni.setStorage({
										key: "APPINOUT",
										data: JSON.stringify({}),
										success() {
											uni.navigateBack();
										}
									})
								}
							}
						});
					} else {
						uni.navigateBack();
					}
				}
		}
	}
</script>

<style>
	.bottomLeftAction {
		display: flex;
		width: 86rpx;
		height: 86rpx;
		justify-content: center;
		align-items: center;
	}
</style>
