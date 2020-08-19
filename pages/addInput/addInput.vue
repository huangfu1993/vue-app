<template>
	<view>
		<uni-nav-bar left-icon="back" statusBar :border="false">
			<view class="w-100 flex justify-center align-center">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
