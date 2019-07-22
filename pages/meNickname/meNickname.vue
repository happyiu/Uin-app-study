<template>
	<view class="page page-fill">
		<form @submit="formSubmitNickname">
			<view class="page-block" style="margin-top: 20upx;">
				<input type="text" name="nickname" value="" class="input" :placeholder="globaluser.name" placeholder-class="graywords" maxlength="10"/>
				<button type="primary" form-type="submit" class="submitBtn">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globaluser:{}
			}
		},
		onLoad() {
			var me = this;
			var globaluser = uni.getStorageSync("globalUser");
			me.globaluser = globaluser;
		},
		methods: {
			formSubmitNickname(e){
				var me = this;
				var nickname = e.detail.value.nickname;
				me.globaluser.name = nickname;
				
				uni.setStorageSync("globalUser",me.globaluser);
				uni.switchTab({
					url:"../me/me"
				})
			}
		}
	}
</script>

<style>
.page{
	width: 1000%;
	height: 100%;
}
.page-fill{
	width: 100%;
	height: 100%;
	position: absolute;
}
.graywords{
	color: #EAEAEA;
}
.input{
	height: 80upx;
	line-height: 80upx;
	width: 500upx;
	margin-left: 40upx;
}
.submitBtn{
	width: 95%;
	margin-top: 40upx;
}
</style>
