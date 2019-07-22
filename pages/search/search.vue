<template>
	<view>
		
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/search.png" class="search-ico"></image>
			</view>
			<input 
			placeholder="搜索一下" 
			maxlength="10" 
			class="search-text" 
			confirm-type="search"
			@confirm="searchMe"
			focus/>
			
		</view>

		<view class="movie-list page-block">
			<view class="movie-wapper" v-for="(ada,adaindex) in alldyArr" :key="adaindex" v-model="alldyArr"  v-if="dyshow1">
				<image :src="ada.poster" class="poster" :data-trailerId="ada.id" @click="showTrailer"></image>
				<!-- <image :src="alldyArr.poster" class="poster" v-if="dyshow2"></image> -->
				<!-- {{alldyArr.poster}} -->
			</view>
			
			<view class="movie-wapper" v-for="ada2 in alldyArr" v-if="dyshow2" v-model="alldyArr">
				<image :src="alldyArr.poster" class="poster"></image>
			</view>
			

		</view>
	</view>
</template>

<script>
	
	import alldy from "../../json/dy.js"
	
	export default {
		data() {
			return {
				alldyArr:{},
				keyWords:null,
				ssArr:null,
				dyshow1:true,
				dyshow2:false
			}
		},
		onLoad() {
			var alldyArr0 = alldy.alldy.data;
			this.alldyArr = alldyArr0;
			//console.log(this.alldyArr)
		},
		onReachBottom() {
			
			
		},
		methods: {
			//跳转详情页面事件
			showTrailer(e){
				var trailerId = e.currentTarget.dataset.trailerid;
				
				// 页面跳转api
				uni.navigateTo({
					url: "../movie/movie?trailerId="+trailerId
				})
			},
			//搜索栏搜索事件
			searchMe(e){
				var alldyArr0 = alldy.alldy.data;
				this.alldyArr = alldyArr0;
				var me = this;
				//获取搜索的内容 
				var value = e.detail.value;
				me.keyWords = value;
				//me.alldyArr = {};
				
				var alldyArrList = [];
				
				if(me.keyWords == ''){
					var alldyArr0 = alldy.alldy.data;
					this.alldyArr = alldyArr0;
					this.dyshow1 = true;
				}
				else if(me.keyWords != ''){
					
					for(var a in me.alldyArr){
						
						alldyArrList.push(me.alldyArr[a]);
						
						//console.log(alldyArrList);
					}
					for(var i =0;i<alldyArrList.length;i++){
						//console.log(alldyArrList[i])
						if(me.keyWords == alldyArrList[i].name){
							//console.log("hi");
							me.alldyArr = [];
							me.alldyArr = alldyArrList[i];
							this.dyshow1 = false;
							this.dyshow2 = true;
							break;
							
						}else{
							me.alldyArr = [];
						}
// 						
					}
					//console.log(me.alldyArr);
					
				}

			}
			
			
			
			
		}
	
	
	}
	

	//console.log(alldy.alldy.data)
</script>

<style>
	@import url("search.css");
</style>
