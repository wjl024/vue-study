<template>
	<div>
		<div class="user-title">
			<div style="width: 0.45rem;height: 0.45rem;background-color: rgb(0,187,221);"></div>
			<div style="font-size: 0.875rem;margin-left: 0.625rem;">用户信息</div>
		</div>
		<div class="user-content">
			<div style="display: flex;width: 100%;">
			<div class="left-content">
				<div class="name">
					<div class="name-1">姓名</div>
					<div>
						<input type="text" value="王洁磊" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
				</div>
				<div class="name" style="margin-top: 0.9375rem;">
					<div class="name-1">昵称</div>
					<div>
						<input type="text" value="王洁磊" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
					<div style="font-size: 0.625rem;color:#b2b2b2;">昵称只用于课程圈中用户名的显示，班课中只显示你的姓名</div>
				</div>
				<div class="name" style="margin-top: 0.9375rem;">
					<div style="display: flex;">
						<div style="width: 22%;">
							<div class="name-1">选择性别</div>
							<div>
								<select style="width: 100%; height:1.375rem;padding-left: 0.625rem;">
									<option value="男">男</option>
									<option value="女">女</option>
								</select>
							</div>
						</div>
						<div style="width: 22%; margin-left: 1.25rem;">
							<div class="name-1">选择身份</div>
							<div>
								<select style="width: 100%; height:1.375rem;padding-left: 0.625rem;">
									<option value="我是学生">我是学生</option>
									<option value="我是老师">我是老师</option>
									<option value="我是其他">我是其他</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="name" style="margin-top: 0.9375rem;">
					<div class="name-1">出生年份</div>
					<div>
						<input type="text" value="1999" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
				</div>
				<div class="name" style="margin-top: 0.9375rem;">
					<div class="name-1">学号/工号</div>
					<div>
						<input type="text" value="1702343124" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
				</div>
			</div>
			<div class="right-content">
				<div style="margin-left: 1.875rem;display: flex;">
					<img src="https://static-cdn-oss.mosoteach.cn/mssvc/default-avatar@2x.png" height="150px"/>
					<div style="height: 150px; display: flex;flex-direction: column;">
					<div style="height: 8.75rem;"></div>
					<div class="setting-avatar">设置头像</div>
					</div>
				</div>
				<div style="margin-left: 1.875rem;margin-top: 0.9375rem;font-size: 0.75rem;">账号：18852009609</div>
				<div class="name" style="margin-top: 0.9375rem;margin-left: 1.875rem;">
					<div class="name-1">所在的学校</div>
					<div>
						<input type="text" value="南京工业职业技术学院" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
				</div>
				<div class="name" style="margin-top: 0.9375rem;margin-left: 1.875rem;">
					<div class="name-1">所在的院系</div>
					<div>
						<input type="text" value="计算机与软件学院" style="width: 88%; height:1.375rem;padding-left: 0.625rem;" />
					</div>
				</div>
			</div>
			</div>
			<div class="btn-group">
				<div class="save">保存</div>
				<div class="cancel">取消</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UserProfile',
		data() {
			return {

			};
		}
	};
</script>

<style>
	.user-title {
		width: 95%;
		margin: 0 auto;
		display: flex;
		height: 1.5625rem;
		align-items: center;
		border-bottom: 0.0625rem solid #8A8A8A;
	}

	.user-content {
		width: 90%;
		display: flex;
		flex-direction: column;
		margin: 6.25rem auto 0 auto;
	}

	.left-content {
		display: flex;
		flex-direction: column;
		flex: 0 0 50%;
		border-right: 0.0625rem solid #8A8A8A;
	}

	.right-content {
		flex: 0 0 50%;
		display: flex;
		flex-direction: column;
	}

	.name {
		display: flex;
		flex-direction: column;
	}

	.name-1 {
		width: 100%;
		font-size: 0.75rem;
		margin-bottom: 0.3125rem;
	}
	.setting-avatar{
		color: rgb(119,187,221);
		border: 0.0625rem solid rgb(119,187,221);
		width: 5rem;
		height: 1.875rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left:1.25rem;
		cursor: pointer;
		bottom: 0;
	}
	.btn-group{
		display: flex;
		justify-content: center;
		margin-top: 3.125rem;
		margin-bottom: 2.0rem;
	}
	.save{
		width: 4.6875rem;
		height: 1.875rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1.25rem;
		border: 0.0625rem solid rgb(119,187,221);
		color: rgb(119,187,221);
		cursor: pointer;
	}
	.cancel{
		width: 4.6875rem;
		height: 1.875rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1.25rem;
		border: 0.0625rem solid rgb(102,102,102);
		color: rgb(102,102,102);
		cursor: pointer;
	}
</style>
