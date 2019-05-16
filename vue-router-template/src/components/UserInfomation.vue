<template>
	<div class="container1">
		<div class="header-user">
			<div class="sub-header">
				<div class="header-left">
					<div class="box box1"><img class="myavatar" src="../assets/myavatar.png" /></div>
					<div class="box">
						<h5 class="name">王洁磊</h5>
					</div>
					<div class="box">
						<h5 class="name">1702343124</h5>
					</div>
					<div class="box"></div>
				</div>
				<div class="header-right">
					<div class="right-box right-box1">
						<h5 class="name">经验值</h5>
					</div>
					<div class="right-box">
						<h5 class="name">魅力值</h5>
					</div>
					<div class="right-box right-box1">
						<h5 class="experience">1607</h5>
					</div>
					<div class="right-box">
						<h5 class="experience">0</h5>
					</div>
				</div>
			</div>
		</div>
		<div class="sub-content">
			<div class="sub-content-1">
				<div style="display: flex; margin-top: 2.1875rem;align-items: center;">***老师的魅力值为<div style="color: rgb(255,101,85);font-size: 1.25rem;">0</div>&nbsp;&nbsp;&nbsp;&nbsp;<div
					 style="display: flex;font-size:0.625rem;">领先全国<div style="color: rgb(255,101,85);">0%</div>的老师</div>
				</div>
			</div>
			<div class="sub-content-1-1">
				<div style="display: flex;">
					<div class="list" v-for="(list,index) in lists" :key="index">
						<div class="list-box">
							<div class="image">
								<img :src="list.imgurl" />
							</div>
							<div class="list-box-right">
								<div class="list-name">{{list.name}}</div>
								<div class="number">{{list.number}}</div>
							</div>
						</div>
					</div>
				</div>
				<div style="display: flex;justify-content: center;margin: 0.9375rem auto;">共发起签到<div style="color: rgb(255,101,85);">0</div>次，总平均出勤率<div
					 style="color: rgb(255,101,85);">0%</div>
				</div>
				<div style="display: flex;justify-content: center;font-size: 0.75rem;margin-bottom:5.5rem;">按天统计平均值，最多显示最近100条</div>
				<div style="display: flex;justify-content: center; font-size: 0.625rem;margin-bottom:5.5rem;color: #8a8a8a;">暂无签到数据</div>
			</div>
			<div style="display: flex;align-items: center; margin: 0.9375rem 0;">王洁磊同学的经验值<div style="color: rgb(255,101,85);font-size: 1.25rem;margin: 0 0.625rem;">2093</div>
				<div style="width: 2.5rem;height:1.5625rem;display: flex;justify-content: center;align-items: center;color: #FFFFFF;font-size: 0.75rem; background-color: rgb(255,162,0); border-radius: 0.5rem;">Lv24</div>
			</div>
			<div class="sub-content-2">
				<div :class="[list.id==6?'box0':'box2']" v-for="(list,index) in lists1" :key="index">
					<div :class="[list.id==6?'list-box0':'list-box']">
						<div class="image" v-if="list.imgurl!=null">
							<img :src="list.imgurl" />
						</div>
						<div class="list-box-right">
							<div class="list-name">{{list.name}}</div>
							<div class="number">{{list.number}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sub-content-footer">
			<h4 style="color: rgb(119,187,221);">经验值/魅力值获取规则<img src="../assets/doublearrowdown.png" class="dropdown" v-show="up" @click="showdown"/><img src="../assets/double-arrow-up.png"
				 class="dropdown" v-show="down" @click="showdown"/></h4>
		</div>
		<div style="width: 95%;margin: 0 auto;display: flex;flex-direction: column;" v-if="down">
			<div class="table1-name">经验值获取规则</div>
			<div class="column-title">
				<div style="flex: 0 0 65%;display: flex;align-items: center;font-size: 0.75rem;margin-left: 3%;">操作事项</div>
				<div style="flex: 0 0 35%;display: flex;align-items: center;font-size: 0.75rem;">获取分值</div>
			</div>
			<div class="columns" v-for="(column,index) in columns" :key="index">
				<div style="flex: 0 0 65%;display: flex;align-items: center;font-size: 0.75rem;margin-left: 3%;">{{column.column1}}</div>
				<div style="flex: 0 0 35%;display: flex;align-items: center;font-size: 0.75rem;">{{column.column2}}</div>
			</div>
			<div class="table1-name1">魅力值获取规则</div>
			<div class="column-title">
				<div style="flex: 0 0 65%;display: flex;align-items: center;font-size: 0.75rem;margin-left: 3%;">操作事项</div>
				<div style="flex: 0 0 35%;display: flex;align-items: center;font-size: 0.75rem;">获取分值</div>
			</div>
			<div class="columns" v-for="(column,index) in columns2" :key="index">
				<div style="flex: 0 0 65%;display: flex;align-items: center;font-size: 0.75rem;margin-left: 3%;">{{column.column1}}</div>
				<div style="flex: 0 0 35%;display: flex;align-items: center;font-size: 0.75rem;">{{column.column2}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserInfomation',
		data() {
			return {
				down: false,
				up:true,
				lists: [{
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-cloud.png',
						name: '创建班课',
						number: 1
					},
					{
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-member.png',
						name: '累计学生',
						number: 0
					},
					{
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-resource.png',
						name: '发布资源',
						number: 0
					},
					{
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-exercise.png',
						name: '开展活动',
						number: 0
					}
				],
				lists1: [{
						id: 1,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-cloud.png',
						name: '加入班课',
						number: 12
					},
					{
						id: 2,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-check-in.png',
						name: '参加签到',
						number: 54
					},
					{
						id: 3,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-resource.png',
						name: '查看资源',
						number: 24
					},
					{
						id: 4,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-exercise.png',
						name: '参与活动',
						number: 129
					},
					{
						id: 5,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-Video.png',
						name: '视频学习',
						number: '0个'
					},
					{
						id: 6,
						name: '累计时长',
						number: '0分钟'
					},
					{
						id: 7,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-discuss.png',
						name: '讨论答疑',
						number: 0
					},
					{
						id: 8,
						imgurl: 'https://static.cdn.oss.mosoteach.cn/mosoteach2/common/images/personal-center-icon-commend.png',
						name: '获得点赞',
						number: 15
					}
				],
				columns: [{
						id: 1,
						column1: '1.查看老师发布的资源',
						column2: '获得该资源设定好的经验值'
					},
					{
						id: 2,
						column1: '2.观看完老师发布的视频资源',
						column2: '获得该资源设定好的经验值'
					},
					{
						id: 3,
						column1: '3.参与头脑风暴和投票/问卷活动',
						column2: '获得该活动设定好的经验值'
					},
					{
						id: 4,
						column1: '4.参与测试活动',
						column2: '(你的最好成绩 ÷ 总分）× 测试活动设定的经验值'
					},
					{
						id: 5,
						column1: '5.参与讨论/答疑活动并发言',
						column2: '获得该资源设定好的经验值'
					},
					{
						id: 6,
						column1: '6.参与讨论/答疑活动发言得到老师点赞并给予了经验值',
						column2: '获得老师给予的经验值'
					},
					{
						id: 7,
						column1: '7.参与头脑风暴活动所发表的观点得到老师点赞并给与了经验值',
						column2: '获得老师给予的经验值'
					},
					{
						id: 8,
						column1: '8.参与作业/小组任务活动并提交作业',
						column2: '获得该活动设定好的经验值'
					},
					{
						id: 9,
						column1: '9.参与作业/小组任务活动，作业被评分',
						column2: '获得与最终评分等值的经验值'
					},
					{
						id: 10,
						column1: '10.参与作业/小组任务活动，完成老师指定最低评价任务',
						column2: '获得老师设定的额外经验值'
					},
					{
						id: 11,
						column1: '11.在作业/小组任务活动作业结果评论区发言，得到老师点赞并给予经验值',
						column2: '获得老师给予的经验值'
					},
					{
						id: 12,
						column1: '12.参与课堂活动',
						column2: '赚取经验值'
					},
					{
						id: 13,
						column1: '13.签到成功',
						column2: '获得 2 经验值'
					},
					{
						id: 14,
						column1: '14.迟到/早退',
						column2: '获得 1 经验值'
					}
				],
				columns2:[{
						id: 1,
						column1: '1.创建有效班课（班课成员超过 10 位，视为有效班课）',
						column2: '获得 10 魅力值'
					},
					{
						id: 2,
						column1: '2.在有效班课中发布 1 个资源',
						column2: '获得 1 魅力值'
					},
					{
						id: 3,
						column1: '3.在有效班课中开展 1 次活动（除课堂表现外）',
						column2: '获得 2 魅力值'
					},
					{
						id: 4,
						column1: '4.在有效班课中开展 1 课堂表现活动',
						column2: '获得 1 魅力值'
					},
					{
						id: 5,
						column1: '5.在有效班课中完成 1 次签到',
						column2: '获得 1 魅力值'
					},
					{
						id: 6,
						column1: '6.在有效班课中发送 1 条通知',
						column2: ' 获得 1 魅力值'
					},
					{
						id: 7,
						column1: '7.在有效班课中开展的测试活动，试题数量超过 10 条',
						column2: '额外获得 2 魅力值'
					},
					{
						id: 8,
						column1: '8.在有效班课中开展的作业/小组任务活动，分组方式为线下分组或随机分组',
						column2: '额外获得 1 魅力值'
					},
					{
						id: 9,
						column1: '9.有效班课中作业/小组任务活动，老师评价方式，每评价 10 份(不足 10 按 10 算)',
						column2: '获得 1 魅力值'
					}
				]
			};
		},
		methods: {
			showdown() {
				this.up=!this.up;
				this.down=!this.down
			}
		},
	};
</script>

<style>
	h4 {
		color: black;
		font-size: 1rem;
		font-weight: lighter;
	}

	.dropdown {
		width: 15px;
		height: 15px;
	}

	.container1 {
		display: flex;
		flex-direction: column;
	}

	.header-user {
		width: 100%;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url(../assets/personal-center-headerView.png);
		background-size: 100% 100%;
	}

	.sub-header {
		display: flex;
		width: 95%;
		height: 80px;
	}

	.header-left {
		flex: 1 1 20%;
		display: grid;
		grid-template-rows: 40px 40px;
		grid-template-columns: 95px 95px;
	}

	.box {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.box1 {
		display: flex;
		align-items: center;
		justify-content: center;
		grid-row: 1/3;
	}

	.myavatar {
		border-radius: 50px;
		width: 60px;
		height: 60px;
	}

	.name {
		color: white;
		font-weight: 500;
	}

	.header-right {
		float: right;
		width: 300px;
		height: 100%;
		display: grid;
		grid-template-rows: 40px 40px;
		grid-template-columns: 150px 150px;
	}

	.right-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.right-box1 {
		border-right: 1px solid rgb(93, 186, 170);
	}

	.experience {
		color: rgb(255, 204, 33);
		font-size: 20px;
	}

	.sub-content {
		display: flex;
		flex-direction: column;
		width: 95%;
		margin: 0 auto;
	}

	.sub-content-1-1 {
		width: 100%;
		border: 0.0625rem solid #000000;
		margin-top: 0.625rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.list {
		border-right: 0.0625rem solid #e5e5e5;
		border-bottom: 0.0625rem solid #e5e5e5;
		flex: 0 0 25%;
		height: 10rem;
		display: flex;
		align-items: center;
	}

	.list:last-child {
		border-right: none;
	}

	.list-box {
		height: 8.125rem;
		display: flex;
		width: 100%;
	}

	.list-box0 {
		height: 8.125rem;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.image {
		flex: 0 0 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list-box-right {
		flex: 0 0 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.list-name {
		margin-bottom: 1.25rem;
	}

	.number {
		font-size: 1.5625rem;
		font-weight: 500;
	}

	.sub-content-2 {
		border: 0.0625rem solid #000000;
		width: 100%;
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		grid-template-rows: 10rem 10rem;
	}

	.box2 {
		border-left: 0.0625rem solid #E5E5E5;
		border-top: 0.0625rem solid #E5E5E5;
		display: flex;
		align-items: center;
	}

	.box0 {
		display: flex;
		align-items: center;
		border-left: none;
		border-bottom: none;
		border-top: 0.0625rem solid #E5E5E5;
	}

	.sub-content-footer {
		display: flex;
		justify-content: center;
	}

	.table1-name {
		font-size: 0.875rem;
	}
  .table1-name1{
		font-size: 0.875rem;
		margin-top: 1.875rem;
	}
	.column-title {
		width: 100%;
		height: 2.1875rem;
		display: flex;
		background-color: rgb(250, 250, 250);
		border: 0.0625rem solid #8a8a8a;
		margin-top: 1.25rem;
	}

	.columns {
		width: 100%;
		height: 2.1875rem;
		display: flex;
		border-bottom: 0.0625rem solid #8a8a8a;
		border-left: 0.0625rem solid #8a8a8a;
		border-right: 0.0625rem solid #8a8a8a;
	}
</style>
