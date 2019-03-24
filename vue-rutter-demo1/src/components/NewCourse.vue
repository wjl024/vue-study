<template>
	<div class="container">
		<div class="location">当前位置:<router-link to="/">班课列表</router-link>>创建班课</div>
		<div class="content">
			<div>
		<input class="input-box" type="text" placeholder="请输入班课名称" v-model="course.courseName" />
		<input class="input-box" type="text" placeholder="请输入班级" v-model="course.courseClass" />
		<input class="input-box" type="text" placeholder="请输入图片地址" v-model="course.cover" />
		<div class="btn-container">
			<button @click="addcourse(course)" class="btn">确定</button>
			<button class="cancel">取消</button>
		</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NewCourse',
		data() {
			return {
				loginUserId:1,
				course: {
				courseName: '',
				courseClass: '',
				cover: ''
			}
			};
		},
		methods: {
			addcourse: function(course) {
               var _this = this;
			this.$http({
				method: 'post',
				url: 'http://localhost:8080/api/course',
				data: {
					userId: _this.loginUserId,
					courseName: course.courseName,
					courseClass: course.courseClass,
					cover: course.cover,
					finished: 0
				}
			}).then(function() {
				alert('新增班课成功');
				_this.$router.push('/');
			});
		}
	}
	};
</script>

<style scoped="scoped">
	.container {
		width: 70%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		padding-left: 100px;
		background-color:rgb(244,244,244);
		height: 100%;
	}
    .content{
		width: 70%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		margin-top: 20px;
		background-color:#fff;
		height: 20%;
		align-items: center;
	}
	.location{
		width: 70%;
		margin: 0 auto;
	}
	a{
		color: #000000;
	}
	a:hover{
		text-decoration: underline;
	}
	.input-box {
		width: 100%;
		height: 30px;
		margin-bottom: 30px;
		font-size: 15px;

	}

	.btn {
		color: rgb(0, 187, 211);
		outline: none;
		border: 1px solid rgb(0, 187, 211);
		background-color: #fff;
		width: 100px;
		height: 40px;
		border-radius: 8px;
	}
	.btn:hover{
		border: 1px solid skyblue;
		color: skyblue;
		cursor: pointer;
	}

	.cancel {
		color: slategrey;
		outline: none;
		border: 1px solid slategrey;
		background-color: #fff;
		width: 100px;
		height: 40px;
		border-radius: 8px;
		margin-left: 25px;
	}
	.cancel:hover{
		color: lightgrey;
		border:1px solid lightgrey;
		cursor: pointer;
	}
	.btn-container{
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color:#fff;
	}
</style>
