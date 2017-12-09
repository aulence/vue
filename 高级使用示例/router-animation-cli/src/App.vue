<template>
    <div id="app">
        <nav>
            <ul>
                <router-link :to="{name: 'home'}" tag="li" exact>首页</router-link>
                <router-link :to="{name: 'category', params: {id: 'app'}}" tag="li">分类</router-link>
                <router-link :to="{name: 'cart', params: {id: 'app'}}" tag="li">购物车</router-link>
                <router-link :to="{name: 'me', params: {id: 'app'}}" tag="li">我的</router-link>
            </ul>
        </nav>
        <main>
            <transition name="bounce">
                <router-view/>
            </transition>
        </main>
    </div>
</template>

<script>
    export default {
        name: "app",
        watch: {
            // 判断路由到的页面及来源
            $route(to, from) {
                console.log(to);
                console.log(from);
            }
        }
    };
</script>

<style lang="less">
    @import './styles/common.less';
    .bounce-enter-active {
        animation: bounce-in .6s;
    }

    .bounce-leave-active {
        animation: bounce-in .6s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.5;
        }
        100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
        }
    }
</style>