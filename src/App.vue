<template>
	<div class="app">
		<MyHeader />
		<router-view />
	</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
export default {
	components: { MyHeader },
}
</script>

<style>
@import url('./assets/global.css');
* {
	margin: 0;
	padding: 0;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Roboto', sans-serif;
}

.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #0a0819;
	width: 100vw;
	height: 100vh;
}
</style>
