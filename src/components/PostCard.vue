<template>
	<div class="card_box">
		<div class="header_card">
			<div class="user_data">
				<img class="profile_img" src="./people.avif" alt="photo_profile" />
				<p class="username_card">User Name or Nickname</p>
			</div>
			<button class="btn_subscribe">Subscribe</button>
		</div>
		<div class="img_post_card">
			<img class="img_post" src="../assets/img/israel.png" alt="photo_post" />
		</div>
		<div class="info_card">
			<p class="title_card">Israel religion</p>
			<p class="subtitle_card">
				According to the country's Central Bureau of Statistics (CBS)
				classification system (2021 data), approximately 73.8 percent of the
				population is Jewish, 18 percent Muslim, 1.9 percent Christian, and 1.6
				percent Druze.
			</p>
		</div>
		<div class="buttons_like_comment">
			<button class="comment_btn" id="comment">
				<img
					class="img_comment"
					src="../assets/img/comment.svg"
					alt="comment"
				/>
			</button>
			<button class="like_btn" id="like">
				<img class="img_like" src="../assets/img/like.svg" alt="like_btn" />
			</button>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.card_box {
	width: 500px;
	height: auto;
	background: rgba(40, 40, 40, 1);
	padding-top: 20px;
	padding-bottom: 20px;
	border-radius: 10px;
	box-sizing: border-box;
}

.header_card {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-left: 10px;
	margin-right: 10px;
}

.user_data {
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: center;
	cursor: pointer;
}

.profile_img {
	width: 50px;
	height: 50px;
	border-radius: 100px;
}

.username_card {
	font-size: 17px;
	color: #ffffff;
}

.btn_subscribe {
	font-size: 14px;
	color: rgba(116, 182, 236, 1);
	border: none;
	background: none;
	cursor: pointer;
}

.img_post_card {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
	box-sizing: border-box;
	padding-left: 10px;
	padding-right: 10px;
	margin-top: 30px;
	margin-bottom: 30px;
}

.img_post {
	max-width: 460px;
}

.info_card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: left;
	gap: 5px;
	margin-bottom: 30px;
	margin-left: 20px;
	margin-right: 20px;
}

.title_card {
	font-size: 20px;
	font-weight: 700;
	color: #ffffff;
}

.subtitle_card {
	font-size: 16px;
	font-weight: 500;
	color: #ffffff;
	text-align: justify;
}

.buttons_like_comment {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	width: 100%;
	right: 0;
	margin-left: 80%;
}

.comment_btn {
	background: none;
	border: none;
	cursor: pointer;
}

.img_comment {
	cursor: pointer;
}

.like_btn {
	background: none;
	border: none;
	cursor: pointer;
}

.img_like {
	cursor: pointer;
}
</style>
