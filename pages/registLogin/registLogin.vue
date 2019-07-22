<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/10900.jpg" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-1b1">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入账号" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-1b1">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<!-- 按钮的type主要有三种 -->
			<button form-type="submit" type="primary" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>
		
		<!-- #ifndef H5 -->
			<view class="third-wapper">
				<view class="single-line">
					<view class="line"></view>
				</view>
				
				<view class="third-words">第三方登录</view>
				
				<view class="single-line">
					<view class="line"></view>
				</view>
			</view>
			
			
		
			
			<view class="third-icos-wapper">
				<!-- #ifdef APP-PLUS -->
					<image src="../../static/wx.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
					<image src="" class="third-ico" data-logintype="qq" @click="appOAuthLogin"></image>
					<image src="" class="third-ico" data-logintype="sinaweibo" @click="appOAuthLogin"></image>
				<!-- #endif -->
				
				<!-- #ifdef MP-WEIXIN -->
					<button open-type="getUserInfo" @getuserinfo="wxLogin" class="third-btn-ico"></button>
					
				<!-- #endif -->
			</view>
		
		<!-- #endif -->	
	</view>
</template>

<script>
	
	import userp from "../../json/userp.js";
	
	export default {
		data() {
			return {
				userp:[]
			}
		},
		onLoad() {
			var userp0 = userp.user;
			this.userp = userp0;
			

		},
		methods: {
			//微信登录事件
			wxLogin(e){
				var me = this;
				//console.log(e)
				var userInfo = e.detail.userInfo;
				console.log(userInfo);
				var userp1 = {};
				userp1.name = userInfo.nickName;
				userp1.facepic = userInfo.avatarUrl;
				userp1.sex = userInfo.gender;
				userp1.id = userInfo.city;
				me.userp = userp1;
				
				uni.setStorageSync("globalUser",me.userp);
				uni.switchTab({
					url:"../me/me"
				});
				console.log(me.userp)
				uni.login({
					provider:"weixin",
					success(loginResult) {
						//console.log(loginResult);
						//获得微信登录的code:授权码
						var code = loginResult.code;
						
					}
				})
			},
			// 安卓第三方登录
			appOAuthLogin(e){
				var logintype = e.currentTarget.detail.logintype;
				//授权登录
				uni.login({
					provider:logintype,
					success(loginRes) {
						//授权登录成功用户，获取用户信息
						uni.getUserInfo({
							provider:logintype,
							success(info) {
								console.log(JSON.stringify(info))
							}
						})
					}
				})
			},
			formSubmit(e){
				var me = this;
				//debugger
				var username = e.detail.value.username;
				var password = e.detail.value.password;
				for(var i=0;i<me.userp.length;i++){
					if(username==me.userp[i].name && password==me.userp[i].password){
						//console.log(me.userp[i]);
						//var a = me.userp[i];
						//console.log(a);

						uni.setStorageSync("globalUser",me.userp[i]);
						//切换页面跳转
						uni.switchTab({
							url:"../me/me"
						});
						break
					}

				}
			}
		}
	}
</script>

<style>
	@import url("registLogin.css");
</style>
