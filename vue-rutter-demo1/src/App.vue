<template>
	<div id="app">
		<div class="header">
			<div class="son-header">
			<router-link to="/" class="nav-item nav-item-logo"><img src='../../vue-rutter-demo1/src/assets/myclass.png' class="logo"/></router-link>
			<router-link to="/task" class="nav-item"><img class="icon" src="https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/taskcenter_icon.png"/>任务中心</router-link>
			<router-link to="#" class="nav-item"><img class="icon"  src="https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/header-ccp-normal.png"/>教学包</router-link>
			<router-link to="/lib" class="nav-item"><img class="icon"  src="https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/icon-animation-manager-library-normal.png"/>库管理</router-link>
			<router-link to="#" class="nav-item"><img class="icon"  src="https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/icon-question.png"/>我的题库</router-link>
			<router-link to="#" class="nav-item"><img class="icon"  src="https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/icon-projection.png"/>手机投屏</router-link>
			<router-link to="/ucenter" class="nav-item user"><img class="icon avatar"  src="https://static-cdn-oss.mosoteach.cn/mssvc/default-avatar@2x.png"/>王洁磊</router-link>
			<router-link to="#" class="nav-item2 user">退出</router-link>
			<router-link to="#" class="nav-item2 user">帮助</router-link>
			</div>
		</div>
		<div class="container content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return{
				
			};
		}
	};
</script>

<style>
	#app {
		background-color: rgb(244,244,244);
	}
.son-header{
	display: flex;
	height: 60px;
	width: 85%;
	margin: 0 auto;
	background-color:#fff;
	font-size: 20px;
	align-items: center;
}
.header {
		display: flex;
		width: 100%;
		height: 60px;
		background-color:#fff;
		font-size: 20px;
		align-items: center;
	}
	.nav-item {
		width: 120px;
		display: flex;
		align-items: center;
		margin-right:30px;
		border-right: 1px solid #aaa;
		
	}
	.container {
		height: 1500px;
	}
	a{
		font-size: 15px;
		text-decoration: none;
		color: #000000;
	}
	a:hover{
		color:rgb(2,165,218);
	}
	.logo{
		
		width: 110px;
		height: 30px;
	}
	.nav-item-logo{
		border: none;
		margin-right: 110px;
	}
	.icon {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	.avatar{
		border-radius: 50px;
	}
	.user{
		border: none;
	}
	.nav-item2{
		position: relative;
		left: -60px;
		margin-right:20px;
	}
</style>
