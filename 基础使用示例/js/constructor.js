/**
 * 功能：vue构造器
 * 日期：2017/4/18
 **/

// 关闭 Vue 所有的日志与警告
Vue.config.silent = true;
// 关闭 Vue 控制台中输出的“处于开发模式”的信息
Vue.config.productionTip = false;

/* 模块通用对象（全局） */
window.appname = {
	setName: '数据内容1'
};

/* #app1 */
let appname = {
	setName: '数据内容1'
};
const app1 = new Vue({
	el: '#app-1',
	data: appname
});

/* #app2 */
let app2data = {
	setName: '数据内容2',
	oldVal: '--暂无--'
};
const app2 = new Vue({
	el: '#app-2',
	data: app2data
});
app2.$watch('setName', function (newVal, oldVal) {
	app2data.oldVal = oldVal;
});

let createData = "未处理";
/* #app3 */
const app3 = new Vue({
    // 注意这里指定的“el”并非是在构造函数的参数内配置的
    // 而是在实例最后通过“$mount”方法进行指定的
	data: {
        handle: createData,
		name: '我是app-3的名称',
		prop: '我是app-3的属性'
    },
    // 钩子函数：数据实例创建前执行
    beforeCreate: function() {
        createData = "处理后";
    },
	// 钩子函数：数据实例创建后执行
	created: function () {
        document.getElementsByClassName('content')[0].textContent = `${this.handle}： ${this.name}，${this.prop}。`;
    }
}).$mount('#app-3');

/* #app4 */
const app4 = new Vue({
    el: '#app-4',
    data: {
        testString: ''
    },
    created: function () {
        this.testString = '测试文本内容';
    },
    // 钩子函数：模板编译之后，但在VM实例替换视图前执行
    beforeMount: function() {
        this.testString = '被修改后的' + this.testString;
    },
	// 钩子函数：VM实例替换视图后执行
	mounted: function () {
        this.testString += "~~~"
        this.$refs.hookElement.style.cssText = `
            padding: 10px 12px;
            background-image: linear-gradient(179deg, rgb(222, 108, 251), rgb(83, 3, 103));
            color:#fff;
        `;
    }
});

/* #app5 */
const app5 = new Vue({
    el: '#app-5',
    data: {
        testString: '测试的',
        run: false,
    },
	mounted: function () {
        this.testString += "文本内容"
    },
    // 钩子函数：数据更新前执行
    beforeUpdate: function() {
        if(this.testString.includes('文本内容')) {
            this.run = true;
        }
    },
    // 钩子函数：数据更新后执行
    updated: function() {
        if(this.run) {
            this.$refs.hookElement.style.fontSize = "32px";
            this.$refs.hookElement.style.color = "#08f";
        } else {
            alert('请确保数据中包含“文本内容”字样！');
        }
    }
});

/* #app6 */
const app6 = new Vue({
    el: '#app-6',
    data: {
        str: '我想要被销毁'
    },
    methods: {
        deleteVM() {
            app6.$destroy();
        }
    },
    beforeDestroy: function() {
        this.$refs.hookElement.style.color = '#f00';
        alert('我可能要被销毁了');
    },
    destroyed: function() {
        alert('我已经被销毁了。无法再对“app6”这个VM进行修改了。');
    }
});

