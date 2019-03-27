<template>
	<div class="container">
		<div class="side-bar">
			<router-link to="/all_task">全部任务</router-link>
			<router-link to="/finished">已完成的任务</router-link>
			<router-link to="/not_finished">未完成的任务</router-link>
			<router-link to="/outtime">超时任务</router-link>
		</div>
		<div class="content"><router-view /></div>
	</div>
</template>

<script>
export default {
	name: 'Task',
	data() {
		return {	
		};
	}
};
</script>

<style scoped="scoped">
	.container {
		display: flex;
		width: 90%;
		margin: 0 auto;
		
	}
	.side-bar {
		flex: 1 1 20%;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin-top: 20px;
	}
	a{
		margin-bottom: 30px;
	}
	.content{
		flex: 1 1 80%;
		text-align: left;
		background-color: #fff;
		margin-left: 20px;
		padding-bottom: 20px;
	}
</style>
