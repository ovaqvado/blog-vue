import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
	router,
	store,
	pinia,
	render: h => h(App),
}).$mount('#app')
