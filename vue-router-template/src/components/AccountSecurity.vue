<template>
	<div>
		<div class="user-title">
			<div style="width: 0.45rem;height: 0.45rem;background-color: rgb(0,187,221);"></div>
			<div style="font-size: 0.875rem;margin-left: 0.625rem;">账户安全</div>
		</div>
		<div class="account-content">
			<div class="account">
				<div style="display: flex;">
				<img src="https://www.mosoteach.cn/web/common/images/my-center-icon_phone.png" height="80px" width="80px" />
				<div class="guanlian">
					<div style="display: flex;margin-bottom: 15px;">
					<div class="g-name">关联手机：</div>
					<div class="g-number">18852009609</div>
					</div>
					<div class="info">·关联手机后可使用手机号加密码登录，也可使用短信验证登录</div>
					<div class="info">·密码丢失时可以通过手机轻松找回</div>
				</div>
				</div>
				<div class="account-btn">更换关联</div>
			</div>
			<div class="account">
				<div style="display: flex;">
				<img src="https://www.mosoteach.cn/web/common/images/my-center-icon_mail.png" height="80px" width="80px" />
				<div class="guanlian">
					<div style="display: flex;margin-bottom: 15px;">
					<div class="g-name">关联邮箱：</div>
					<div class="g-number">未关联</div>
					</div>
					<div class="info">·关联邮箱后，可使用邮箱加密码进行登录</div>
					<div class="info">·密码丢失时可以通过邮箱轻松找回</div>
				</div>
				</div>
				<div style="display: flex;flex-direction: column;">
				<div class="account-btn">关联邮箱</div>
				<div class="cancel-guanlian">取消关联</div>
				</div>
			</div>
			<div class="account" style="border: none;">
				<div style="display: flex;">
				<img src="https://www.mosoteach.cn/web/common/images/my-center-icon_password.png" height="80px" width="80px" />
				<div class="guanlian">
					<div style="display: flex;margin-bottom: 15px;">
					<div class="g-name">修改密码</div>
					</div>
					<div class="info">· 为了你的账号安全，请不要向他人透露账号密码</div>
				</div>
				</div>
				<div class="account-btn">修改密码</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AccountSecurity',
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
	.account-content{
		display: flex;
		flex-direction: column;
		width: 90%;
		align-items: center;
		margin: 2.1875rem auto 2.1875rem auto;
	}
	.account{
		width: 85%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 7.5rem;
		border-bottom:0.0625rem solid #E5E5E5 ;
	}
	.guanlian{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 45px;
	}
	.info{
		font-size: 0.75rem;
		color:#b2b2b2;
	}
	.g-number{
		color: rgb(225,85,0);
	}
	.account-btn{
		width: 100px;
		height: 30px;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.0625rem solid rgb(119,187,221);
		color: rgb(119,187,221);
		cursor: pointer;
	}
	.cancel-guanlian{
		width: 100px;
		height: 30px;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: 1px solid #E5E5E5;
		color: #E5E5E5;
		margin-top:10px;
	}
</style>
