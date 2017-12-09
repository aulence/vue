<template>
    <div class="hello">
        <article>
            <h1>待办事项</h1>
            <input class="todo-input" type="text" v-model="todo" @keyup.enter="createTodo" @keyup.up="getPrevVal" placeholder="请输入待办事项后Enter键">
            <ul class="todo-list">
                <li v-if="hasContent" class="noContent">-- 尚未输入待办事项 --</li>
                <li v-for="(item, index) in todoList" :key="item.id">
                    <i class="icon icon-checkbox-yes" v-if="item.checked" @click="swithState(index)"></i>
                    <i class="icon icon-checkbox-no" v-else @click="swithState(index)"></i>
                    <span class="content" :class="{complete:item.checked}" :title="item.content">{{item.content}}</span>
                    <span class="setTime">{{item.nowTime}}</span>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
    export default {
        name: "TodosList",
        data() {
            return {
                todo: "",
                todoList: [],
                prevContent: ''
            };
        },
        computed: {
            hasContent: function() {
                if(this.todoList.length === 0) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
            createTodo() {
                const nowTime = new Date().toLocaleString();
                const newTodo = {
                    content: this.todo,
                    checked: false,
                    nowTime
                }
                this.todoList.push(newTodo);
                this.todo = "";
            },
            getPrevVal() {
                this.todo = this.prevContent;
            },
            swithState(index) {
                this.todoList[index].checked = !this.todoList[index].checked;
            }
        },
        watch: {
            todo(nowVal, oldVal) {
                this.prevContent = oldVal;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../styles/style.less";
    @import "../styles/todo-list.less";
</style>
