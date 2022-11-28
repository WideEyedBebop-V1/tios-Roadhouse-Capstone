import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import Home from "./Home.vue"
const routes = [
    {
        path: '/',
        alias: "/home",
        component: Home,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App).use(router).mount('#app');

