<template>
	<div class="container">
		<div class="container2">
			<div class="side-bar">
				<div class="bar">
					<div class="menu" @click="clickshow()" v-show="showbar">
						<router-link to="/user_infomation">我的信息</router-link>
					</div>
				</div>
				<div class="bar" v-show="showright">
					<div class="menu menu1">
						<router-link to="/user_infomation" class="btn">我的信息</router-link>
					</div>
					<div class="img"><img src="../assets/my-center-square.png" /></div>
				</div>
				<div class="bar" @click="clickshow1()" v-show="showbar1">
					<div class="menu">
						<router-link to="/user_profile">用户信息</router-link>
					</div>
				</div>
				<div class="bar" v-show="showright1">
					<div class="menu menu1">
						<router-link to="/user_profile" class="btn">用户信息</router-link>
					</div>
					<div class="img"><img src="../assets/my-center-square.png" /></div>
				</div>
				<div class="bar">
					<div class="menu" @click="clickshow2()" v-show="showbar2">
						<router-link to="/account_security">账号安全</router-link>
					</div>
				</div>
				<div class="bar" v-show="showright2">
					<div class="menu menu1">
						<router-link to="/account_security" class="btn">账号安全</router-link>
					</div>
					<div class="img"><img src="../assets/my-center-square.png" /></div>
				</div>
			</div>
			<div class="u-content">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UCenter',
		data() {
			return {
				showright: true,
				showbar: false,
				showright1: false,
				showbar1: true,
				showright2: false,
				showbar2: true
			};
		},
		methods: {
			clickshow: function() {
				this.showbar = false;
				this.showright = true;
				this.showbar1 = true;
				this.showright1 = false;
				this.showbar2 = true;
				this.showright2 = false;
			},
			clickshow1: function() {
				this.showbar = true;
				this.showright = false;
				this.showbar1 = false;
				this.showright1 = true;
				this.showbar2 = true;
				this.showright2 = false;
			},
			clickshow2: function() {
				this.showbar = true;
				this.showright = false;
				this.showbar1 = true;
				this.showright1 = false;
				this.showbar2 = false;
				this.showright2 = true;
			}
		},
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
    .container2{
		display: flex;
		width: 100%;
	}
	.side-bar {
		width: 120px;
		display: flex;
		flex-direction: column;
		background-color: #eee;
		margin-top: 20px;
		height: 250px;
	}

	.menu {
		width: 110px;
		height: 40px;
		display: flex;
		align-items: center;
		background-color: #fff;
		border-bottom: 1px solid lightgrey;
	}

	a {
		font-size: 15px;
		margin: 0 auto;
	}

	.menu:hover a {
		color: white;
		cursor: pointer;
	}

	.menu:hover {
		background-color: rgb(0, 187, 221);
		cursor: pointer;
	}

	.menu1 {
		background-color: rgb(0, 187, 221);
	}

	.btn {
		color: white;
	}

	.u-content {
		flex: 1 1 70%;
		background-color: #fff;
		margin-top: 20px;
		margin-left: 10px;
		height: auto;
		padding-bottom: 20px;
	}

	.bar {
		display: flex;
	}

	.img {
		display: flex;
		align-items: center;
	}
    
</style>
