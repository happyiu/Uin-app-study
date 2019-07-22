<template>
	<view class="page page-fill">
		<form @submit="formSubmitSex">
			<radio-group class="radio-sex" @change="changeSex">
				<label class="radio-single">
					<radio value="1" :checked="sex == 1">男</radio>
				</label>
				<label class="radio-single">
					<radio value="0" :checked="sex == 0">女</radio>
				</label>
			</radio-group>
				
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globaluser:{},
				sex:-1

			}
		},
		onLoad() {
			var me = this;
			var globaluser = uni.getStorageSync("globalUser");
			me.globaluser = globaluser;
			me.sex = me.globaluser.sex;
		},
		methods: {
			formSubmitSex(e){
				
				var me = this;
				me.globaluser.sex = me.sex;
				uni.setStorageSync("globalUser",me.globaluser);
				uni.switchTab({
					url:"../me/me"
				})
				
			},
			changeSex(e){
				//console.log(e);
				var sex = e.detail.value;
				this.sex = sex;
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
.radio-sex{
	display: flex;
	flex-direction: column;
}
.radio-single{
	padding: 20upx 20upx;
}
.submitBtn{
	width: 95%;
	margin-top: 40upx;
}
</style>
