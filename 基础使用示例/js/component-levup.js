/**
 * 功能：Vue组件进阶
 * 日期：2017/4/17
 **/

// 定义公共组件
Vue.component('poetry-item', {
	template: `
    <li>
      {{ prop }}
      <button @click="$emit('remove')" class="li-delete">×</button>
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
			this.poetryList.push(this.newPoetryText)
			this.newPoetryText = ''
		}
	}
});
