<template>
	<view class="page">
		<!-- 视频播放 -->
		<view class="player">
			<video id="myTrailer" :src="trailerInfo.trailer" :poster="trailerInfo.poster" controls></video>
		</view>
		
		<!-- 影片基本信息 -->
		<view class="movie-info">
			<navigator :url="'../cover/cover?cover='+trailerInfo.poster">
				<image class="cover" :src="trailerInfo.poster" ></image>
			</navigator>
			
			<view class="movie-desc">
				<view class="title">
					{{trailerInfo.name}}
				</view>
				
				<view class="basic-info">
					{{trailerInfo.type}}
				</view>
				
				<view class="basic-info">
					{{trailerInfo.eq}}
				</view>
				
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分:</view>
						<view class="movie-score">{{trailerInfo.score}}</view>
					</view>
					<view class="score-stars">
						<block v-if="trailerInfo.score >= 0">
							<trailerStars :innerScore="trailerInfo.score" showNum="0"></trailerStars>
						</block>
						
						<view class="prise-counts">
							{{trailerInfo.priseCounts}} 人点赞
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		
		<!-- 剧情介绍 -->
		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{trailerInfo.dyjs}}</view>
		</view>
	
		<!-- 演职人员 -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x class="scroll-list">
				<view class="actor-wapper" v-for="yyp in trailerInfo.yzry">
					<image :src="yyp.poster" class="single-actor" mode="aspectFill"></image>
					<view class="actor-name">{{yyp.yname}}</view>
					<view class="actor-role">{{yyp.yrole}}</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 剧照 -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x class="scroll-list">
				<image v-for="(juz,imgindex) in trailerInfo.jz" :src="juz.poster" class="plot-image" mode="aspectFill" @click="lookMe" :data-imgindex="imgindex"></image>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import alldy from "../../json/dy.js";
	import jzslt from "../../json/dy.js";
	
	import trailerStars from "../../componets/trailerStars.vue";
	
	export default {
		data() {
			return {
				trailerInfo:{},
				juzhao:{},
				juzhaop:[]
			}
			
		},
		
		//页面初次渲染完成，获得上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer')
		},
		onHide() {
			//页面被隐藏的时候，暂停播放
			this.videoContext.pause();
		},
		onShow() {
			//页面显示时，再次播放
			if(this.videoContext){
				this.videoContext.play();
			}
		},
		onLoad(params) {
			// debugger
			
			//console.log(params.trailerId)
			var me = this;
			
			// 获取上一个页面传入的参数
			var trailerId = params.trailerId;
			
			var trailerInfo = alldy.alldy.data[trailerId];
			me.trailerInfo = trailerInfo;
			//console.log(me.trailerInfo)
			
			
			var juzhaop0 = jzslt.jzslt;
			this.juzhaop = juzhaop0;
			
			
			
			//通过api修改 可以设置导航栏的颜色 
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:"#f2f122"
			});
		},
		onShareAppMessage(res) {
			var me = this;
			
			return {
			  title: me.trailerInfo.name,
			  path:'/pages/movie/movie?trailerId=' + me.trailerInfo.id
			}
		},
		//监听导航栏按钮
		onNavigationBarButtonTap(e) {
			var index = e.index;
			if(index == 0){
				var me = this;
				var trailerInfo = me.trailerInfo;
				var trailerId = trailerInfo.id;
				var trailerName = trailerInfo.name;
				var cover = trailerInfo.poster;
				var poster = trailerInfo.poster;
				
				//分享事件
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://10.153.27.217:8080/#/pages/movie/movie?trailerId="+trailerId,
					title: "从黄即这里的分享呀："+trailerName,
					summary: "从黄即这里的分享呀："+trailerName,
					imageUrl: cover,
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					}
				});
			}
		},
		methods: {
			lookMe(e){
				var me = this;
				var imgindex = e.currentTarget.dataset.imgindex;
				
				uni.previewImage({
					current:me.juzhaop[imgindex],
					urls:me.juzhaop
				})
			}
		},
		components:{
			trailerStars
			
		},
	}
</script>

<style>
	@import url("movie.css");
</style>
