import Vue from 'vue'
import Router from 'vue-router'
// 主组件导入
import Home from '@/components/Home'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
// 分支组件导入
import Details from '@/components/Details'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: 'details',
            name: 'details',
            component: Details
        }
    ]
})
