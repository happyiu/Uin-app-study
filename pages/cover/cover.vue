<template>
	<view class="black">
		<image @longpress="operator" :src='cover' mode="widthFix" class="cover"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:null
			}
		},
		onLoad(params) {
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#000000"
			})
			
			var cover = params.cover;
			this.cover = cover;
		},

		methods: {
			operator(){
				var me = this;
				uni.showActionSheet({
					itemList:["保存图片到本地","aaa"],
					success:function(res) {
						//res为数组的下标值
						if(res.tapIndex == 0){
							uni.showLoading({
								title:"图片保存中"
							})
							uni.downloadFile({
								url: me.cover,
								success:function(result){
									var tempFilePath = result.tempFilePath;
									console.log(tempFilePath);
									uni.saveImageToPhotosAlbum({
										filePath:tempFilePath,
										success:function(){
											uni.showToast({
												title:"保存成功",
												duration:2000
											})
										},
										complete() {
											uni.hideLoading();
										}
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
.black{
	background-color: #000000;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	
}
.cover{
	align-self: center;
}
</style>
