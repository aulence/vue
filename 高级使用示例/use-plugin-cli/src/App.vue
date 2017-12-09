<template>
    <div id="app">
        <nav class="navbar navbar-default">
            <ul class="container">
                <router-link :to="{name: 'boot'}" tag="li" exact>Bootstrap</router-link>
                <router-link :to="{name: 'jquery'}" tag="li">jQuery</router-link>
                <router-link :to="{name: 'echarts'}" tag="li">ECharts</router-link>
                <router-link :to="{name: 'axios'}" tag="li">Axios</router-link>
            </ul>
        </nav>
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    * {
        box-sizing: border-box;
    }
    html,body {
        font: 20px 'Avenir', Helvetica, 'Microsoft YaHei', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .navbar {
        ul {
            margin: 0 auto;
            list-style: none;
            display: flex;
            li {
                @bgcolor: #2396fd;
                padding: 16px 30px;
                justify-content: flex-start;
                cursor: pointer;
                &:hover {
                    color: @bgcolor;
                }
                &.active {
                    background-color: @bgcolor;
                    color: #ffffff
                }
            }
        }
    }
</style>