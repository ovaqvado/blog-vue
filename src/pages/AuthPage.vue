<template>
	<div class="auth_box">
		<form class="form_login" action="">
			<p class="title">Регистрация</p>
			<div class="inputs">
				<div class="input_box">
					<label for="name" class="label_login">Имя</label>
					<input class="input" type="text" id="name" />
				</div>
				<div class="input_box">
					<label class="label_login" for="nickname">Ник</label>
					<input class="input" type="text" id="nickname" />
				</div>
				<div class="input_box">
					<label class="label_login" for="email">Email</label>
					<input class="input" type="text" id="email" />
				</div>
				<div class="input_box">
					<label class="label_login" for="password">Пароль</label>
					<input class="input" type="password" id="password" />
				</div>
				<div class="input_box">
					<label class="label_login" for="repeat_pass">Повторите пароль</label>
					<input class="input" type="password" id="repeat_pass" />
				</div>
			</div>
			<div class="checked_box">
				<input id="checked" type="checkbox" />
				<label class="label_checked" for="checked"
					>Я принимаю соглашение с испоьзованием данных на этом сайте</label
				>
			</div>
			<button class="btn_login">Зарегистрироваться</button>
		</form>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.auth_box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	border-radius: 10px;
}

.form_login {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #ffffff;
	padding: 60px;
	border-radius: 20px;
}

.title {
	font-size: 29px;
	margin-top: 30px;
	font-weight: 600;
}

.inputs {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: 40px;
}

.input_box {
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 3px;
}

.label_login {
	font-size: 14px;
	font-weight: 550;
}

.label_login:focus {
	font-size: 14px;
	font-weight: 550;
}

.input {
	width: 300px;
	height: 30px;
	padding-left: 8px;
	padding-right: 8px;
	font-weight: 500;
	border-radius: 5px;
	outline: none;
	border: 1px solid black;
}

.input:focus {
	border: 1px solid blue;
}

.checked_box {
	display: flex;
	flex-direction: row;
	widows: 300px;
	gap: 10px;
	text-align: justify;
	margin-top: 20px;
	margin-bottom: 40px;
}

.label_checked {
	font-size: 14px;
	width: 300px;
}

.btn_login {
	border-radius: 20px;
	border: 1px solid black;
	padding: 10px;
	cursor: pointer;
	background: darkblue;
	color: #ffffff;
	transition: 0.3s;
}

.btn_login:hover {
	background: rgb(32, 32, 169);
	opacity: 0.7;
}
</style>
