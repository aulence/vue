<template>
    <div class="todos">
        <article>
            <h1>待办事项</h1>
            <input class="todo-input" type="text" v-model="todo" @keyup.enter="createTodo" @keyup.up="getPrevVal" placeholder="请输入待办事项后Enter键">
            <ul class="todo-list">
                <li v-if="notContent" class="noContent">-- 尚未输入待办事项 --</li>
                <li v-for="(item, index) in todoList" :key="item.id">
                    <i class="icon icon-checkbox-yes" v-if="item.checked" @click="swithState(index)"></i>
                    <i class="icon icon-checkbox-no" v-else @click="swithState(index)"></i>
                    <span class="content" :class="{complete:item.checked}" :title="item.content">{{item.content}}</span>
                    <span class="setTime">{{item.nowTime}}</span>
                    <span class="deleItem" @click="deleItem(index)">&times;</span>
                </li>
            </ul>
            <div>还有 {{ noDone }} 项未完成</div>
        </article>
    </div>
</template>

<script src="../scripts/todos.js"></script>

<style scoped lang="less">
    @import "../styles/style.less";
    @import "../styles/todo-list.less";
</style>
