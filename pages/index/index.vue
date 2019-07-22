<template>
	<view class="page">
		
	<!-- 定义一个属性为 myval -->
	<!-- <helloComp myval="hello you"></helloComp> -->
		
	<!-- usw -->
	<!-- 轮播图 -->
	<swiper :indicator-dots="true" :indicator-color="ic" :indicator-active-color="ica" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
		<swiper-item v-for="carousel in carouselList">
			<image :src="carousel.pic" class="carousel"></image>
		</swiper-item>
	</swiper>
	
	
	<!-- 热门 -->
	<view class="page-block super-hot">
		<view class="hot-title-wappper">
			<image src="../../static/fire.png" class="hot-ico"></image>
			<view class="hot-title">热门预告</view>
		</view>
		
		<scroll-view scroll-x="true"  class="page-block hot">
			<view id="dy" class="sigle-poster" v-for="(superhero,idt) in hotSuperheroList" :key="idt">
				<view class="poster-wapper">
					<image :src="superhero.pic" class="poster"></image>
					<view class="movie-name">{{idt+1}}.{{superhero.title}}</view>
					<!-- 评分的自定义组件 -->
					<trailerStars :innerScore="mdy[2].score" showNum="1"></trailerStars>
				</view>
			</view>
			
			
		</scroll-view>
	</view>
	
	<!-- 视频 -->
	<view class="page-block super-hot">
		<view class="hot-title-wappper">
			<image src="../../static/fire.png" class="hot-ico"></image>
			<view class="hot-title">精彩视频</view>
		</view>
		<view class="hot-movies page-block">
			<video class="hot-movie-single" v-for="(sp,spindex) in mdysp" :key="spindex" :poster="sp.poster" :src="sp.trailer"></video>
		</view>
	</view>
	
	<!-- 猜你喜欢 -->
	<view class="page-block super-hot">
		<view class="hot-title-wappper">
			<image src="../../static/fire.png" class="hot-ico"></image>
			<view class="hot-title">猜你喜欢</view>
		</view>
		<view class="guess-u-like page-block">
			<view class="single-like-movie" v-for="(ady,dyindex) in alldy" :key="dyindex">
				<image :src="ady.poster" class="like-movie"></image>
				<view class="movie-desc">
					<view class="movie-title">{{ady.name}}</view>
					<trailerStars :innerScore="mdy[2].score" showNum="1"></trailerStars>
					<view class="movie-info">{{ady.type}}</view>
					<view class="movie-info">{{ady.eq}}</view>
				</view>
				<!-- :data-dyindex="dyindex"  这个是自定义的-->
				<view class="movie-oper" :data-dyindex="dyindex" @click="praiseMe">
					<image src="../../static/dz.png" class="pralse-ico"></image>
					<view class="praise-me">赞一下</view>
					<view :animation="animationDataArr[dyindex]" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
			
			
		</view>
	</view>
	
	</view>
</template>

<script>
	
	console.log(dy.dysp.data[0].trailer)
	//第一步：导入自定义组件
	import helloComp from "../../componets/helloComp.vue";
	
	import trailerStars from "../../componets/trailerStars.vue";
	
	//如果只是调用本地的json文件做测试，只需要import引入暴露的数据即可
	import dy from "../../json/dy.js";
	import dysp from "../../json/dy.js";
	import alldy from "../../json/dy.js"
	
	//导入通用的js文件
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				title: 'Hello',
				ic: "blue",
				ica:"pink",
				carouselList:[],
				hotSuperheroList:[],
				mdy:{},
				mdysp:{},
				animationData:{},
				animationDataArr:[{},{},{},{},{}],
				
				alldy:{}

			}
		},
		onPullDownRefresh(){
			this.refresh()
		},
		onunload(){
			//页面卸载时，清除动画数据
			this.animationData = {};
			this.animationDataArr = [{},{},{},{},{}]
		},
		onLoad() {		
			 var mdy0 = dy.dy.data;
			 this.mdy = mdy0;
			
			var mdysp0 = dy.dysp.data;
			this.mdysp = mdysp0;
			//console.log(this.mdy)
			var alldy0 = dy.alldy.data;
			this.alldy = alldy0;
			
			//在页面创建的时候，创建一个临时动画
			//#ifdef APP-PLUS||MP-WEIXIN
			this.animation = uni.createAnimation();
			//#endif
			
			var serverUrl = common.serverUrl;
			uni.request({
				// this.serverUrl 通过挂载到main.js 中获取到服务器的地址，作为全局变量
				//url: this.serverUrl +"/getNews?page=1&pageSize=4", 
				
				//这个是正常的办法，把域名提取出来后，放入common文件里，最为全局变量后，然后导出导入。
				url: serverUrl +"/getNews?page=1&pageSize=4", 
				method:"POST",
				success: (res) => {
					//debugger;

					//获取真实数据之前，先判断状态是否等于200
					if(res.data.msg == "获取数据成功"){
						var carouselList = res.data.data;
						this.carouselList = carouselList;
					}
					
					this.text = 'request success';
					}
				}
			);
			
			
			//
			uni.request({
				// this.serverUrl 通过挂载到main.js 中获取到服务器的地址，作为全局变量
				//url: this.serverUrl +"/getNews?page=1&pageSize=4", 
				
				//这个是正常的办法，把域名提取出来后，放入common文件里，最为全局变量后，然后导出导入。
				url: serverUrl +"/getNews?page=2&pageSize=6", 
				method:"POST",
				success: (res) => {
					//debugger;
			
					//获取真实数据之前，先判断状态是否等于200
					if(res.data.msg == "获取数据成功"){
						var hotSuperheroList = res.data.data;
						this.hotSuperheroList = hotSuperheroList;
					}
					
					this.text = 'request success';
				}
				
				
			});

			//this.refresh();
		},
		
		methods: {
			//下拉刷新caij猜你喜欢的动作
			refresh(){
				
				uni.showLoading({
					mask:true,
					title:"请稍等"
				});
				
				//导航栏加载动画
				uni.showNavigationBarLoading();
				
				var me = this;
				var serverUrl = me.serverUrl;
				uni.request({
					url: serverUrl +"/getNews?page=2&pageSize=6", 
					method:"POST",
					success: (res) => {
						if(res.data.msg == "获取数据成功"){
							var hotSuperheroList = res.data.data;
							this.hotSuperheroList = hotSuperheroList;
						}
					},
					complete:() => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
					
				});
				
				
			},
			
			//播放一个视频时，暂停其他视频
			// meIsPlaying(e){
			// 	var me = this;
			// 	var trailerId = "";
			// 	if(e){
			// 		trailerId = e.currentTarget.dataset.playingindex;
			// 		me.videoContext = uni.createVideoContext(trailerId);
			// 		
			// 	}
			// 	var hotTrailerList = me.mdysp;
			// 	for(var i=0;i<hotTrailerList.length;i++){
			// 		var tempId = hotTrailerList[i].id;
			// 		if(tempId != trailerId){
			// 			uni.createVideoContext(tempId).pause();
			// 		}
			// 	}
			// 	
			// },
			
			
			//实现点赞动画效果
			praiseMe(e){
				//因为h5不支持动画，所以要使用条件编译
				//#ifdef APP-PLUS||MP-WEIXIN
				var dyindex = e.currentTarget.dataset.dyindex;
				// console.log(dyindex)
				// return;
				
				//构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-70).opacity(1).step({
					duration:400
				});
				//导出动画数据到view组件，实现组件动画效果
				//this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[dyindex] = this.animationData.export();
				
				setTimeout(function() {
					//还原动画
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					//this.animationData = this.animation.export();
					this.animationData = this.animation;
					this.animationDataArr[dyindex] = this.animationData.export();
				}.bind(this), 500);
				// #endif
			}
			
		},
		
		//第二步：注册自定义组件
		components:{
			helloComp,
			trailerStars
			
		},
		
		
	}
</script>

<style>
	@import url("index.css");
</style>
