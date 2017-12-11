<template>
    <header>
        <h1 class="container">
            {{setTitle}}
            <small>{{smallTitle}}</small>
        </h1>
    </header>
</template>

<script>
    export default {
        name: "HeaderBlock",
        props: ['setTitle','smallTitle'],
        data() {
            return {
            };
        }
    };
</script>

<style lang="less" scoped>
    // 主题色
    @theme-color: rgb(63, 51, 39);
    header {
        padding: 20px;
        background-image: linear-gradient(140deg, rgb(101, 87, 76),rgb(61, 47, 36));;
        border: 1px solid @theme-color;
        h1 {
            small {
                color: lighten(@theme-color,60%);
            }
        }
    }
</style>