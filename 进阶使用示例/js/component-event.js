/**
 * 功能：Vue组件进阶
 * 日期：2017/6/27
 **/
Vue.config.silent = false;
Vue.config.productionTip = false;

/**** 示例-1 ****/
const app1 = new Vue({
	el: '#app-1',
	data: {
        normal: `<input v-model="something">`,
        actually: `<input v-bind:value="something" v-on:input="something = $event.target.value">`
	},

});

/**** 示例-2 ****/
Vue.component('button-calc-add', {
	template: `<button type="button" @click="addSelf(1)" class="btn btn-primary">{{ num }}</button>`,
	data: function () {
		return {
			num: 0
		}
	},
	methods: {
		addSelf: function (num) {
			this.num += num;
			// 触发子组件上绑定的“视图模型”（Vue示例的）部分的calcResult事件
			this.$emit('add-self');
		}
	}
});
const app2 = new Vue({
	el: '#app-2',
	data: {
		res: 0
	},
	methods: {
		calcResult: function () {
			this.res += 1
		}
    }
});

/**** 示例-3 ****/
Vue.component('component-event', {
    template: `
        <div>
            <input 
                type="text" 
                @keypress="componentEvent($event)"
                placeholder="请按下键盘任意键观察下方输出结果"
                :style="inputLong"
            />
            <p>
                是否按住shift键：{{ shiftKey }} <br>
                输入的键名是：{{ keyName }} <br>
                对应的键值是：{{ keyCode }} <br>
                通过什么事件触发的：{{ eventType }} <br>
                元素的类型是：{{ elType }} <br>
                元素父级元素是：{{ eltParent }} <br>
                从页面载入完成到触发事件经过了多少秒： {{ timeStamp | toSecond }}
            </p>
        </div>
    `,
	data: function () {
		return {
            'inputLong': 'width: 480px;',
            shiftKey: '',
            keyName: '',
            keyCode: '',
            elType: '',
            eltParent: '',
            eventType: '',
            timeStamp: '',
		}
	},
	methods: {
		componentEvent (e) {
            this.shiftKey = e.shiftKey;
            this.keyName = e.key;
            this.keyCode = e.keyCode;
            this.eventType = e.type;
            this.elType = e.target.type;
            this.eltParent = e.target.parentElement.tagName;
            this.timeStamp = e.timeStamp;

			console.log(e);
		}
    },
    filters: {
        toSecond(val) {
            if(val === '') {
                return val = '';
            }
            return (val / 1000).toFixed(2);
        }
    }
});
const app3 = new Vue().$mount('#app-3');

/**** 示例-4 ****/
Vue.component('event-modifier', {
    template: `
        <div>
            <p>
                <a href="https://www.baidu.com" target="_blank">可以打开百度</a>
            </p>
            <p>
                <a href="https://www.baidu.com" target="_blank" @click.prevent>打不开百度</a> 
            </p>
            <p>
                <a href="https://www.baidu.com" target="_blank" @click.prevent="taunt">不仅打不开百度，还会被嘲讽</a>
            </p>
            
        </div>
    `,
	data: function () {
		return {
			num: 0
		}
	},
	methods: {
		taunt: function () {
			alert('哈哈哈，打不开吧！！！')
		}
	}
});
const app4 = new Vue({
	el: '#app-4'
});
