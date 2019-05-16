<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app {
	width: 100%;
	background-color: #eee;
}
.bottom-footer {
		height: 3.45rem;
		width: 100%;
		display: flex;
		bottom: 0;
		background-color: #FFFFFF;
		font-size: 0.75rem;
		margin-top: 1.25rem;
		justify-content: center;
		align-items: center;
	}
</style>
