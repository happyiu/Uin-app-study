<template>
	<view class="page page-fill">
		<form @submit="formSubmitBirthday">
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="datachange">
					<view class="birthday">{{birthday}}</view>
				</picker>
				<button type="primary" form-type="submit" class="submitBtn">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globaluser:{},
				birthday:""
			}
		},
		onLoad() {
			var me = this;
			var globaluser = uni.getStorageSync("globalUser");
			me.globaluser = globaluser;
			me.birthday = me.globaluser.birday;
		},
		methods: {
			formSubmitBirthday(e){
				var me = this;
				var birthday = me.birthday;
				me.globaluser.birday = birthday;
				
				uni.setStorageSync("globalUser",me.globaluser);
				uni.switchTab({
					url:"../me/me"
				})
			},
			datachange(e){
				this.birthday = e.detail.value;
			}
		}
	}
</script>

<style>
.page-fill{
	width: 100%;
	height: 100%;
	position: absolute;
}
.birth-input{
	background-color:white ;
	height: 80upx;
	line-height: 40upx;
	padding-left: 20upx;
}
.birthday{
	background-color: white;
	height: 80upx;
	padding-left: 20upx;
	padding-top: 30upx;
}
.submitBtn{
	width: 95%;
	margin-top: 40upx;
}
</style>
