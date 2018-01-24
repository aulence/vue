/**
 * 功能：Vue组件进阶
 * 日期：2017/6/27
 **/
Vue.config.silent = false;
Vue.config.productionTip = false;

/**** 示例-1 ****/
// 定义公共组件
Vue.component('poetry-item', {
	template: `
    <li>
      {{ prop }}
      <button @click="$emit('remove')" class="li-delete">&times;</button>
    </li>
  `,
	props: ['prop']
});
const app1 = new Vue({
	el: '#app-1',
	data: {
		newPoetryText: '',
		poetryList: [
			'夜来携手梦同游，晨起盈巾泪莫收。',
			'漳浦老身三度病，咸阳宿草八回秋。',
			'君埋泉下泥销骨，我寄人间雪满头。',
			'阿卫韩郎相次去，夜台茫昧得知不？'
		]
	},
	methods: {
		addNewPoetry: function () {
			this.poetryList.push(this.newPoetryText);
			this.newPoetryText = ''
		}
	}
});

/**** 示例-2 ****/
// 定义一个基本组件
Vue.component('base-component',{
	props: ['content'],
	template: '<div>{{dataTxt}}</div>',
	// 尝试解开下面template注释，并将上面template注释观察
	// template: '<div>{{content}}</div>',
	// 在组件内部的data属性只能是一个函数，并保证其有一个对象作为返回值
	data() {
		// 。。。各种操作
		return {
			dataTxt: '这是一个显示文本的基本组件 -- by:component'
		}
	}
});
const app2 = new Vue({
	el: '#app-2',
	data: {
		dataTxt: '这是一个显示文本的基本组件 -- by:vm'
	}
});

/**** 示例-3 ****/
// 定义一个全局对象1，供视图模型内的组件定义处调用
const externalComponent_first = {
	props: ['title','content','style'],
	template: `<div>
		<h3>{{title}}</h3>
		<p>{{content}}</p>
		<p>
			<img v-for='url in albumList' :src="url">
		</p>
		<p>组件内即可以有字面量（常量）的内容，也可以有变量的内容（动态属性/模版语法）</p>
	</div>`,
	// 再次强调，组件内部的data属性必须是一个具有返回对象值类型的函数
	data() {
		return {
			albumList: [
				'../img/album/girl-01.jpg',
				'../img/album/girl-02.jpg',
				'../img/album/girl-03.jpg'
			]
		}
	}
};
// 定义一个全局对象2，供视图模型内的组件定义处调用
const externalComponent_second = {
	props: ['title','content','style'],
	template: `<div style="border-top:1px dashed #ddd">
		<h3>{{title}}</h3>
		<p>{{content}}</p>
		<div>
			<button type="button" @click="showDate" :style="setStyle">现在的时间</button>
		</div>
	</div>`,
	data() {
		return {
			setStyle: 'padding: 8px 16px; color: #333; font: 24px "幼圆"'
		}
	},
	methods: {
		showDate() {
			// 通过Date函数原型重写toLocaleString方法，解决Chrome、Firefox等浏览器本地日期输出有歧义的问题
			Date.prototype.toLocaleString = function() {
				return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "时" + this.getMinutes() + "分" + this.getSeconds() + "秒";
			};
			alert(new Date().toLocaleString());
		}
	}
}
const app3 = new Vue({
	el: '#app-3',
	// 这里注意components后面多了一个“s”
	components: {
		'local-component-first': externalComponent_first,
		'local-component-second': externalComponent_second
	}
});

/**** 示例-4 ****/
Vue.component('table-row', {
	props: ['prop'],
	template: `
		<tr>
			<td>{{prop.name}}</td>
			<td>{{prop.country}}</td>
			<td>{{prop.spiritAnimal}}</td>
			<td>{{prop.skill}}</td>
		</tr>
	`
});
const app4 = new Vue({
	el: '#app-4',
	data: {
		thData: ['姓名','国家','尾兽','技能'],
		tdData: [
			{ name: '鸣人', country: '火之国', spiritAnimal: '有', skill: '风遁·螺旋丸' },
			{ name: '我爱罗', country: '沙之国', spiritAnimal: '有', skill: '砂缚柩' },
			{ name: '奇拉比', country: '雷之国', spiritAnimal: '有', skill: '哟哟，切克闹' },
			{ name: '照美冥', country: '水之国', spiritAnimal: '无', skill: '熔遁·溶解爆酸' }
		]
	}
});

/**** 示例-5 ****/
// 尝试将该对象（只需counter变量名）替换掉组件的data函数内的return之后的对象，然后回到页面刷新后点击彩色按钮
const counter = {
	count: 0
};
Vue.component('data-component', {
	// 一个点击自身数字加1的按钮
	template: `<button type="button" class="btn mr-20" style="padding: 6px 20px" @click="count += 1">{{ count }}</button>`,
	data() {
		return {
            count: 0
        };
	}
});
const app5 = new Vue({
	el: '#app-5',
	data: {
		// 用于设置本节的编号
		smallHead: '',
		buttonStyle: {
			primary: 'btn-primary',
			success: 'btn-success',
			info: 'btn-info',
			warning: 'btn-warning',
			danger: 'btn-danger'
		}
	},
	// 由于Vue的生命周期关系，在实例化的过程中是没有办法通过app5.$el去访问模块ID的
	// 但通过访问配置项来获取该视图模型的ID值并设置data的属性是可行的
	created: function () {
		// 设置配置时的编号
		this.smallHead = this.$options.el;
	}
});

/**** 示例-6 ****/
Vue.component('childComponent', {
	// 第一个组件属性传递标签内容，第二传递标签属性
	props: ['communicate','styleProp'],
	template: '<div :style="styleProp">{{ communicate }}</div>'
});
const app6 = new Vue({
	el: '#app-6',
	// 其实这里的data和里面定义的默认属性都不是必须的，可以通过后面的生命周期Hook函数来完成
	/* data: {
		smallHead: ''
	}, */
	created: function () {
		this.smallHead = this.$options.el;
	}
});

/**** 示例-7 ****/
Vue.component('bind-component', {
	props: ['parentMessage'],
    template: `<div @click="showText">{{ parentMessage }}</div>`,
    data() {
        return {
            postValue1: "ABC",
            postValue2: "是英文字母",
        }
    },
	methods: {
		showText() {
			this.$emit('show-text', this.postValue1, this.postValue2);
		}
	}
});
const app7 = new Vue({
	el: '#app-7',
	data: {
		parentMsg1: '修改数据也会反应到父组件上',
		parentMsg2: '但对同一个组件的不同数据是不会产生影响的（可以点击的文本）',
        setNormal: 'color:#2396fd;cursor:pointer;text-decoration:underline;',
        // 等待接收子组件传过来的两个值通过事件进行合并
        parentData: ''
	},
	created: function () {
		this.smallHead = this.$options.el;
	},
	methods: {
		showVMData(pv1,pv2) {
            this.parentData = pv1 + pv2;
			alert(this.parentData);
		}
	}
});

/**** 示例-8 ****/
Vue.component('check-component', {
	props: {
        // 只允许为字符串类型
        propString: String,

        // 同时允许为字符串和数值型
        // propString: [String, Number]

        // 类型为字符串，且必须传值
        // propString: {
        //     type: String,
        //     required: true
        // },

        // 类型为字符串，未传值时默认值为“默认字符串”
        // propString: {
        //     type: String,
        //     default: '默认字符串'
        // }
	},
	template: `<div>{{ propString }}</div>`
});
const app8 = new Vue({
	el: '#app-8',
	data: {
		num: 18116657687,
		str: "这是字符串",
		bool: true
	},
	created: function () {
		this.smallHead = this.$options.el;
	}
});