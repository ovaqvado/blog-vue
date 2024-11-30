<template>
	<div class="all_posts">
		<post-card />
	</div>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
	components: { PostCard },
}
</script>

<style scoped>
.all_posts {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
