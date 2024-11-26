<template>
	<div class="home">
		<button @click="ok">Click me</button>
		<ul>
			<li v-for="(item, index) in genderData" :key="index">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'HomeView',
	data() {
		return {
			genderData: [],
		}
	},
	methods: {
		ok() {
			const URL =
				'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

			axios
				.get(URL)
				.then(response => {
					this.genderData = [response.data.data]
					console.log(response.data.data)
				})
				.catch(error => {
					console.log(error)
				})
				.finally(() => {})
		},
	},
}
</script>

<style scoped>
.home {
	width: 100vw;
	height: 100vh;
	background: rgba(40, 40, 40, 1);
}
ul {
	width: 800px;
}

li {
	color: red;
}
</style>
