<template>
    <div id="app">
        <nav>
            <ul>
                <router-link :to="{name: 'home'}" tag="li" exact>首页</router-link>
                <router-link :to="{name: 'category'}" tag="li">分类</router-link>
                <router-link :to="{name: 'cart'}" tag="li">购物车</router-link>
                <router-link :to="{name: 'me'}" tag="li">我的</router-link>
            </ul>
        </nav>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app',
        watch: {
            // 判断路由到的页面及来源
            $route(to, from) {
                console.log(to);
                console.log(from);
            }
        }
    }
</script>

<style lang="less">
    @import (less) "./styles/common";
</style>