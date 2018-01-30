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
        notContent: function() {
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
        },
        deleItem(index) {
            this.todoList.splice(index,1);
        }
    },
    watch: {
        todo(nowVal, oldVal) {
            this.prevContent = oldVal;
        }
    }
};