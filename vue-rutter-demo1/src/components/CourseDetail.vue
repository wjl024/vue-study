<template>
	<div class="container">
		<h2>班课{{ id }}详情页面</h2>
		<img :src="course.cover">
		<p>{{course.courseName}}</p>
		<p>{{course.courseClass}}</p>
		<div v-if="loginId===course.userId" class="bottom">
		{{course.courseCode}}
		<button class="btn1" v-if="iffinished!==course.finished">删除</button>
		<button class="btn2"  @click="update(course.courseId)"  v-if="iffinished===course.finished" >结束班课</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CourseDetail',
	data() {
		return {
			iffinished:0,
			loginId:1,
			id: this.$route.params.id,
			course:{}
		};
	},
	methods: {
		update: function(courseId) {
			var _this = this;
			this.$http({
				method: 'put',
				url: 'http://localhost:8080/api/course',
				data: {
					courseId:this.id,
					courseName:_this.course.courseName,
					userId: _this.loginUserId,
					courseClass:_this.course.courseClass,
					cover:_this.course.cover,
					courseCode:_this.course.courseCode,
					finished: 1
				}
			}).then(function() {
				alert('结束班课成功');
				_this.$router.push('/');
			});
		}
	},
	created() {
		var _this = this;
		this.$http.get('http://localhost:8080/api/course/' + this.id).then(function(response) {
			_this.course = response.data;
		});
	}
};
</script>
<style scoped>
	.bottom{
		display: flex;
		flex-direction: column;
	}
.btn1{
	width: 120px;
	height: 40px;
	border: 1px solid #fff;
	background-color: rgb(0, 187, 221);
	border-radius: 20px;
	outline: none;
	color: #fff;
	font-size: 16px;
	cursor: pointer;
}
.btn2{
	width: 120px;
	height: 40px;
	border: 1px solid #fff;
	background-color:orangered;
	border-radius: 20px;
	outline: none;
	color: #fff;
	font-size: 16px;
	cursor: pointer;
}
</style>