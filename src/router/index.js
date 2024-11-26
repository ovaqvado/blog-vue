import AboutPage from '@/pages/AboutPage.vue'
import AuthPage from '@/pages/AuthPage.vue'
import HomePage from '@/pages/HomePage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage,
	},
	{
		path: '/auth',
		name: 'auth',
		component: AuthPage,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
