<template>
	<div class="container">
		<!-- 所有div放在根容器下 -->
		<div class="top-content">
				<router-link to="/new_course"><button class="btn"><img src="../assets/plus-blue.png"/></button></router-link>
				<div class="searchin"><input type="text" class="search" placeholder="搜索"><img src="../assets/search-white.png" /></div>
		</div>
		<div class="top">
			<p>进行中的班课</p>
			<p>{{count}}个进行中的班课</p>
		</div>
		<hr>
		<div class="course-conainer">
			<div class="course" v-show="iffinished===course.finished" v-for="(course, index) in courses" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				<div class="course-code" v-if="loginUserId === course.userId">
					{{ course.courseCode }}
					<button @click="deleteCourse(course.courseId,index)" v-if="iffinished!==course.finished" class="btn1">删除</button>
				</div>
			</div>
		</div>
		<div class="top">
			<p>已结束的班课</p>
			<p>{{courses.length-count}}结束的班课</p>
		</div>
		<hr>
		<div class="course-conainer">
			<div class="course course1" v-show="iffinished!==course.finished" v-for="(course, index) in courses" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				<div class="course-code" v-if="loginUserId === course.userId">
					{{ course.courseCode }}
					<button @click="deleteCourse(course.courseId,index)" class="btn1">删除</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {
			iffinished:0,
			loginUserId: 1,
			courses: []
		};
	},
	methods: {
		deleteCourse: function(courseId,index) {
			var _this = this;
			this.$http({
				method: 'delete',
				url: 'http://localhost:8080/api/course/' + courseId
			}).then(function() {
				alert('班课删除成功');
				 _this.courses.splice(index,1);
			});
		}
	},
	created() {
		var _this = this;
		this.$http.get('http://localhost:8080/api/course').then(function(response) {
			_this.courses = response.data;
		});
	},
	computed:{
		count:function(){
		var clength=this.courses.length;
		var num=0;
		for(var i=0;i<clength;i++){
			if(this.iffinished===this.courses[i].finished){
				num++
			}
		}
		return num;
		},
	}
};
</script>
<style scoped>
.container {
	padding-top: 20px;
	}
.course-conainer {
	width: 70%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
}
.course {
	flex:0 0 22%;
	height: 380px;
	margin-right: 21px;
	margin-bottom: 30px;
	background-color: #fff;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	padding-bottom: 10px;
	border: 5px solid #FFFFFF;
}
.course-cover img {
	width: 100%;
	height: 240px;
	transition: all 6s;
}
.course-cover img:hover{
	transform: scaleX(1.1);
}
.title {
	font-size: 16px;
	color: #333;
}
.btn {
	border: none;
	background-color: rgb(244,244,244);
	width: 50px;
	height: 40px;
	outline: none;
	cursor: pointer;
}
.btn img{
	width: 100%;
	height: 100%;
}
.course-code {
	color: rgb(0, 187, 221);
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
	float: right;
}
.top-content{
	width: 70%;
	height: 100px;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
.searchin{
	display: flex;
	width: 400px;
	height: 35px;
	background-color: rgb(0,187,211,1);
	border: 3px solid rgb(0,187,211,1);
	align-items: center;
	border-radius: 5px;
	margin-left: 350px;
}
.searchin:hover{
	background-color: rgb(0,187,245,1);
	border-color: rgb(0,187,245,1);
	cursor: pointer;
}
.searchin img{
	width: 25px;
	height: 25px;
	margin-left:12.5px;
}
.search{
	border: none;
	outline: none;
    width: 350px;
	height: 35px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}
.top {
	width: 70%;
	margin: 0 auto;
	display: flex;
    justify-content: space-between;
	}
hr{
	text-align: center;
	width: 70%;
	color: #efefef;
}
p {
	 font-size: 12px;
     margin-bottom: 5px;
}
.course1{
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
}
</style>