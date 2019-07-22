<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userinfo.facepic" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/my0.png" class="face"></image>
			</view>
			
			
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">
					{{userinfo.name}}
				</view>
				<view class="nav-info">ID:{{userinfo.id}}</view>
			</view>
			<view v-else>
				<navigator open-type="navigate" url="../registLogin/registLogin">
					<view class="nickname regist-login">注册/登录</view>
				</navigator>
			</view>
			
			<view class="set-wapper" v-if="userIsLogin">
				<navigator url="../meInfo/meInfo">
					<image src="../../static/setting.png" class="settings"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false,
				userinfo:{}
			}
		},
		onShow() {
			var me = this;
			//用户状态切换
			var userinfo = uni.getStorageSync("globalUser");
			//console.log(userinfo)
			if(userinfo != "" && userinfo != undefined){
				me.userIsLogin = true;
				me.userinfo = userinfo;
			}else{
				me.userIsLogin = false
				me.userinfo = {};
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("me.css");
</style>
