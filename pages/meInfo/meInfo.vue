<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			
			<view class="item-wapper face-line-upbottom">
				<view class="info-words">头像</view>
				<view class="right-wapper">
					<image :src="userinfo.facepic" class="face" @click="operator"></image>
					<view class="arrow-block">
						<image src="../../static/right.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<view class="item-wapper face-line-upbottom" @click="modifyNickname">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="right-wapper-text">{{userinfo.name}}</view>
					<view class="arrow-block">
						<image src="../../static/right.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<view class="item-wapper face-line-upbottom" @click="modifyBirthday">
				<view class="info-words">生日</view>
				<view class="right-wapper">
					<view class="right-wapper-text">{{userinfo.birday}}</view>
					<view class="arrow-block">
						<image src="../../static/right.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			
			<view class="item-wapper face-line-upbottom" @click="modifySex">
				<view class="info-words">性别</view>
				<view class="right-wapper">
					
					<view class="gray-fields" >
						<view v-if="userinfo.sex == 1" class="right-wapper-text">男</view>
						<view v-else-if="userinfo.sex == 0" class="right-wapper-text">女</view>
						<view v-else class="right-wapper-text">未选择</view>
					</view>
					
					<view class="arrow-block">
						<image src="../../static/right.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
				
		</view>
		
		<view class="footer-wapper">
			<view class="footer-words" @click="clearStorage">清理缓存</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="tuichu">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:[]
			}
		},
		onLoad() {
			
			var userinfo = uni.getStorageSync("globalUser");
			this.userinfo = userinfo;
			//console.log(this.userinfo)
		},
		methods: {
			modifySex(){
				uni.navigateTo({
					url:"../mesex/mesex"
				})
			},
			//修改昵称事件
			modifyNickname(){
				uni.navigateTo({
					url:"../meNickname/meNickname"
				})
			},
			modifyBirthday(){
				uni.navigateTo({
					url:"../mebirthday/mebirthday"
				})
			},
			//头像点击事件
			operator(){
				var globalUser = this.userinfo;
				//调出操作菜单
				uni.showActionSheet({
					itemList:["查看头像","上传头像"],
					success(res) {
						//获得点击操作菜单的下标
						var index = res.tapIndex;
						//console.log(index);
						if(index == 0){
							//预览头像
							var faceArr = [];
							faceArr.push(globalUser.facepic)
							uni.previewImage({
								urls: faceArr,
								current:faceArr[0]
							})
						}
						else if(index == 1){
							//调用上传图片的上传
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								sourceType:["album"],
								success(res) {
									//获得临时路径
									//console.log(res)
									var tempFilepath = res.tempFilePaths[0];
									uni.navigateTo({
										url:"../meFace/meFace?tempFilepath="+ tempFilepath
									})
								}
							})
							//上传头像
							
						}
					}
				})
			},
			
			//清理缓存事件
			clearStorage(){
				uni.clearStorageSync();
				uni.showToast({
					title:"清理成功",
					mask:false,
					duration: 1500
				})
			},
			tuichu(){
				uni.removeStorageSync("globalUser");
				uni.navigateBack();
				
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
