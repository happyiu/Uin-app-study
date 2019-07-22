<template name="trailerStars">
	<view class="movie-score-wapper">
		<!-- <image src="../../static/star.png" class="star-ico"></image>
		<image src="../../static/star.png" class="star-ico"></image>
		<image src="../../static/star.png" class="star-ico"></image>
		<image src="../../static/star.png" class="star-ico"></image>
		<image src="../../static/star0.png" class="star-ico"></image>
		<view class="movie-score">9.0</view> -->
		
		<!-- 自定义组件中，使用静态图片，注意图片的路径 -->
		<image src="/static/star.png" class="star-ico" v-for="yellow in yellowScore"></image>
		<image src="/static/star0.png" class="star-ico" v-for="gary in garyScore"></image>
		<view class="movie-score" v-if="showNum == 1">{{innerScore}}</view>
	</view>
</template>

<script>
	export default {
		name:"trailerStars",
		data() {
			return {
				yellowScore:0,
				garyScore:0,
			}
		},
		props:{
			innerScore:0,	//定义外部传入的分数
			showNum:0	//定义是否需要显示的分数	1:显示  0:不显示
		},
		methods: {
			
		},
		
		//生命周期，组件创建完成后被调用
		created() {
			//console.log("fs"+this.innerScore)
			var tempScore = 0;
			if(this.innerScore !=null && this.innerScore != undefined && this.innerScore != '')
			{
				tempScore = this.innerScore;
			}
			
			var yellowScore = parseInt(tempScore / 2);
			var garyScore = 5 - yellowScore;
			
			this.yellowScore = yellowScore;
			this.garyScore = garyScore;
		}
	}
</script>

<style>
.movie-score-wapper{
	width: 200upx;
	display: flex;
	flex-direction: row;
	margin-top: 10upx;
}
.star-ico{
	width: 20upx;
	height: 20upx;
	
}
.movie-score{
	font-size: 12px;
	color: grey;
	margin-left: 5upx;
	margin-top: -7upx;
	
}
</style>
