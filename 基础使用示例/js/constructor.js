/**
 * 功能：vue构造器
 * 日期：2017/4/18
 **/

// 取消 Vue 所有的日志与警告
Vue.config.silent = true;

/* 模块通用对象（全局） */
window.appname = {
	setName: '数据内容1'
};

/* #app1 */
let appname = {
	setName: '数据内容1'
};
let app1 = new Vue({
	el: '#app-1',
	data: appname
});

/* #app2 */
let app2data = {
	setName: '数据内容2',
	oldVal: '--暂无--'
};
let app2 = new Vue({
	el: '#app-2',
	data: app2data
});
app2.$watch('setName', function (newVal, oldVal) {
	app2data.oldVal = oldVal;
});

/* #app3 */
let app3 = new Vue({
	el: '#app3',
	data: {
		name: '我是app-3的名称',
		prop: '我是app-3的属性'
	},
	// hook
	created: function () {
		document.getElementsByClassName('content')[0].textContent = `${this.name}，${this.prop}。`;
	}
});

