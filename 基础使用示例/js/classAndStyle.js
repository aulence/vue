/**
 * 功能：Vue的class和style绑定
 * 日期：2017/6/26
 **/
Vue.config.silent = true;

const app1 = new Vue({
	el: '#app-1',
	data: {
		statusTrue: true,
		statusFalse: false
	}
});

const app2 = new Vue({
	el: '#app-2',
	data: {
		styleObject: {
			'fz-26': true,
			'text-blue': true,
			'text-underline': false
		}
	}
});

const app3 = new Vue({
	el: '#app-3',
	data: {
        getHobby: [],
		hobbyList: [
			{ buttonName: '编程', activeStatus: true },
			{ buttonName: '游戏', activeStatus: true },
			{ buttonName: '看书', activeStatus: false },
			{ buttonName: '美食', activeStatus: true },
			{ buttonName: '运动', activeStatus: false },
			{ buttonName: '电影', activeStatus: true }
		]
	},
	methods: {
        // 选中效果
		toggleClass: function (index) {
			// 通过这样的方式来实现状态的切换（true/false）是比较常用的最简单方式
            this.hobbyList[index].activeStatus = !this.hobbyList[index].activeStatus;
            this.getHobby = this.getHobbyMethod(this.hobbyList);
        },
        // 返回选中项数组的方法
        getHobbyMethod(arr) {
            const hobby = [];
            for(let x in arr) {
                if(arr[x].activeStatus) {
                    hobby.push(arr[x].buttonName);
                }
            }
            return hobby;
        }
	}
});

const app4 = new Vue({
	el: '#app-4',
	data: {
		stateText: {
			success: '成功',
			fail: '失败'
		},
		toggle: true,
		status: 'ok',
		header: null
	},
	computed: {
		successClass: function () {
			return {
				'border-success': this.toggle && this.status && !this.header,
				'text-success': this.toggle === true && this.status === 'ok' && this.header === null
			}
		},
		failClass: function (index) {
			return {
				'border-success': !this.toggle && !this.status  && this.header,
				'text-success': this.toggle === false && this.status === 'fail' &&  this.header !== null,
				'border-fail': 2 > 3 || 5 > 3,
				'text-fail': true,
				'mt-10': 53 + 47 === 100
			}
		}
	}
});

const app5 = new Vue({
	el: '#app-5',
    data: {
        danger: '危险的操作',
        security: '安全的操作',
        operate: true,
        setFont: {
            setRed: true,
            setGreen: false,
            setFamily: true,
            setSize: true
        }
    },
    methods: {
        changeState() {
            this.operate = !this.operate;
            this.setFont.setRed = !this.setFont.setRed;
            this.setFont.setGreen = !this.setFont.setGreen;
        }
    }
});

const app6 = new Vue({
	el: '#app-6',
	data: {
		red: 'text-red',
		blue: 'text-blue',
		fz: 'fz-22',
		fs: 'fs-italic',
		yes: true,
		no: false
	}
});

Vue.component('test-class', {
	props: ['prop'],
	template: '<p class="text-success">测试组件挂载class，及样式优先级</p>'
});
const app7 = new Vue({
	el: '#app-7',
	data: {}
});
