import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import Home from "./Home.vue"
import _IndexAuthentication from "./authentication/_IndexAuthentication.vue"
import Login from "./authentication/Login.vue"
import Register from "./authentication/Register.vue"
import AdminLogin from "./authentication/AdminLogin.vue"
import AdminRegister from "./authentication/AdminRegister.vue"
import ChangePassword from "./authentication/ChangePassword.vue"
import ForgotPassword from "./authentication/ForgotPassword.vue"
import _IndexClient from "./client/_IndexClient.vue"
import About from "./client/About.vue"
import Cart from "./client/Cart.vue"
import EditProfile from "./client/EditProfile.vue"
import Menu from "./client/Menu.vue"
import _IndexAdmin from "./admin/_IndexAdmin.vue"
import CustomerService from "./admin/CustomerService.vue"
import Dashboard from "./admin/Dashboard.vue"
import EditProfileAdmin from "./admin/EditProfile.vue"
import Inventory from "./admin/Inventory.vue"







const routes = [
    {
        path: '/',
        alias: "/home",
        component: Home,

    },
    {
        path: '/authentication',
        component: _IndexAuthentication,
        children: [
            {
                path: 'login',
                component: Login,
            },
            {
                path: 'register',
                component: Register,
            },
            {
                path: 'Adminlogin',
                component: AdminLogin,
            },
            {
                path: 'Adminregister',
                component: AdminRegister,
            },
            {
                path: 'ChangePassword',
                component: ChangePassword,
            },
            {
                path: 'ForgotPassword',
                component: ForgotPassword,
            }
        ]
    },
    {
        path: '/client',
        component: _IndexClient,
        children: [
            {
                path: 'About',
                component: About,
            },
            {
                path: 'Cart',
                component: Cart,
            },
            {
                path: 'EditProfile',
                component: EditProfile,
            },
            {
                path: 'Menu',
                component: Menu,
            }
        ]
    },
    {
        path: '/admin',
        component: _IndexAdmin,
        children: [
            {
                path: 'CustomerService',
                component: CustomerService,
            },
            {
                path: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'EditProfile',
                component: EditProfileAdmin,
            },
            {
                path: 'Inventory',
                component: Inventory,
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App).use(router).mount('#app');

