/**
 * 功能：vue基础
 * 日期：2017/4/17
 **/

const app1 = new Vue({
	el: '#app-1',
	data: {
		message: '这是我希望在该标签输出的内容'
	}
});

const app2 = new Vue({
	el: '#app-2',
	data: {
        title: '这是鼠标悬浮后提示的文本',
        url: 'https://www.baidu.com/'
	}
});

const app3 = new Vue({
	el: '#app-3',
	data: {
		show: true,
		hide: false
	}
});

const app4 = new Vue({
	el: '#app-4',
	data: {
        // 汽车信息
		carInfo: [
			{ name: '柯尼塞格one1', price: '99999999' },
			{ name: 'LykanHypersport', price: '90000000' },
			{ name: '迈巴赫exelero', price: '60000000' },
			{ name: '西尔贝', price: '50000000' },
			{ name: '阿斯顿马丁one-77', price: '47000000' }
		]
	}
});

const app5 = new Vue({
	el: '#app-5',
	data: {
		content: '#app-5：原来的文本内容。'
    },
    // Vue的事件都是通过这个对象进行设置的
	methods: {
        // 添加文本的事件
		addText: function () {
            const testStr = '新增的文本内容';
            // 如果找不到对应的字符串，则新增指定文本
            if(!this.content.includes(testStr)) {
                this.content += testStr;
            } else {
               alert('文本已经添加！');
            }
		}
	}
});

const app6 = new Vue({
	el: '#app-6',
	data: {
		text: '数据双向绑定'
	}
});


