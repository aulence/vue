<template>
    <div id="app">
        <!-- <todos-list></todos-list> -->
        <TodosList/>
    </div>
</template>

<script>
    import TodosList from "./components/TodosList";
    
    export default {
        name: "app",
        components: {
            TodosList
        }
    };
</script>

<style lang="less">
    * {
        box-sizing: border-box;
    }
    html,body {
        background-color: #ffffff;
        margin: 0;
        font-size: 20px;
    }
    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
