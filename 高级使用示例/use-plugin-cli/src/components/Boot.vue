<template>
    <div class="boot">
        <div class="jumbotron">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <p>
                <a class="btn btn-primary btn-lg" href="#" role="button">了解更多</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Boot',
        data() {
            return {
                title: '这是一个巨幕',
                content: '这是描述内容，这是描述内容，这是描述内容，这是描述内容，这是描述内容，这是描述内容'
            }
        }
    }
</script>

<style scoped>
</style>