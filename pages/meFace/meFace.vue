<template>
	<view class="page page-fill">
		<view class="pending-wapper">
			<image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
		</view>
		<view class="notice">
			<view class="notice-words">
				* 请从相册中选择图片
			</view>
			<view class="footer-opertor">
				<view class="opertor-words" @click="changpendingFace">重新选择</view>
				<view class="opertor-words" @click="upload">确认上传</view>
			</view>
		</view>
	</view>
	

	
</template>

<script>
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
	
	export default {
		data() {
			return {
				tempFace:"",
				url: "../../static/logo.png"
			}
		},
		onLoad(params) {
			// console.log(params.tempFilepath)
			var tempFilepath = params.tempFilepath;
			this.tempFace = tempFilepath;
			
		},
		methods: {
			//重新选择
			changpendingFace(){
				var me = this;
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:["album"],
					success(res) {
						//获得临时路径
						//console.log(res)
						var tempFilepath = res.tempFilePaths[0];
						me.tempFace = tempFilepath;

					}
				})
			},
			
			//确认上传
			upload(){
				// uni.showToast({
				// 	title:"暂不支持"
				// })
				var userinfo = uni.getStorageSync("globalUser");
				userinfo.facepic = this.tempFace;
				//console.log(userinfo)

				uni.setStorageSync("globalUser",userinfo);
				uni.switchTab({
					url:"../me/me"
				})
				
			},
			
			
			myUpload(rsp) {
                this.url = rsp.path;
            }
		},
		components:{
			avatar
		},
	}
</script>

<style>
.page-fill{
	width: 100%;
	height: 100%;
	position: absolute;
	background: black;
}
.pending-wapper{
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 40upx;
}
.footer-opertor{
	display: flex;
	position: fixed;
	bottom: 0;
	border-top: #515050 solid 1px;
	flex-direction: row;
	justify-content: space-between;
}
.opertor-words{
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
.pending-face{
	width: 600upx;
	height: 600upx;
}
.notice{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
}
.notice-words{
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

</style>
