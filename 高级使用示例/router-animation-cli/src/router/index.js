import Vue from 'vue';
import Router from 'vue-router';
// 组件导入
import Home from '@/components/Home';
import Category from '@/components/Category';
import Cart from '@/components/Cart';
import Me from '@/components/Me';

Vue.use(Router)

export default new Router({
    // 默认mode（模式）为hash，可选值history（路径仿真）、abstract（无状态路径）
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Category/:id',
            name: 'category',
            component: Category
        },
        {
            path: '/Cart/:id',
            name: 'cart',
            component: Cart
        },
        {
            path: '/Me/:id',
            name: 'me',
            component: Me
        },
    ],
    linkActiveClass: 'active'
})
