<template>
	<div class="home">
		<post-list />
	</div>
</template>

<script>
import PostList from '@/components/PostList.vue'
export default {
	components: { PostList },
}
</script>

<style scoped>
.home {
	width: 100vw;
	height: 100vh;
}
ul {
	width: 800px;
}

li {
	color: red;
}
</style>
