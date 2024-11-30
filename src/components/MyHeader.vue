<template>
	<div class="header">
		<nav>
			<router-link class="link" to="/">Главная</router-link>
			<router-link class="link" to="/about">О нас</router-link>
			<router-link class="link" to="/auth">Авторизация</router-link>
		</nav>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
	background: #0a0819;
	border-bottom: 1px solid white;
	height: 80px;
	width: 100vw;
}

nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 30px;
	padding: 30px;
}

nav a {
	color: rgb(255, 255, 255);
	text-decoration: none;
}

nav a.router-link-exact-active {
	color: rgb(48, 196, 255);
}
.link {
	font-size: 16px;
}
</style>
