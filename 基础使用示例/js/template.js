/**
 * 功能：Vue模板语法
 * 日期：2017/4/19
 **/

const app1 = new Vue({
	el: '#app-1',
	data: {
		content: '一次性插值的内容，数据更新不会影响插值的节点'
	},
	methods: {
		modifContent: function () {
			this.content = '修改后的内容';
		}
	}
});

const app2 = new Vue({
	el: '#app-2',
	data: {
		content1: '<span style="color: #2397ec">正常的文本内容</span>',
		content2: '<span style="color: #2397ec">能显示HTML的内容，注意写法</span>'
	}
});

const app3 = new Vue({
	el: '#app-3',
	data: {
        // 禁用状态
		state: true
    },
    methods: {
        // 主按钮执行的操作
        runMethod: function() {
            alert('操作成功执行！');
        },
        // 激活按钮操作
        activer: function() {
            // 将禁用状态设置为false
            this.state = false;
        },
        // 禁用按钮操作
        disabler: function() {
            // 将禁用状态设置为true
            this.state = true;
        }
    }
});

const app4 = new Vue({
	el: '#app-4',
	data: {
		total: 1000,
		state: '正确',
		skillArr: ['Angular', 'React', 'Vue'],
		obj: {
			quantifier:	'个',
			personName: '葫芦娃'
		},
		fn: function (a,b) {
			return a * b;
		}
	}
});

const app5 = new Vue({
	el: '#app-5',
	data: {
		gender: '保密'
	}
});

const app6 = new Vue({
	el: '#app-6',
	data: {
		hobby: ['电影']
	}
});

