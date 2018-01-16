/**
 * 功能：Vue过滤器
 * 日期：2017/4/19
 **/

/*******************************************/
/* 过滤器操作 */
/*******************************************/
window.onload = function () {
	
	const app1 = new Vue({
		el: '#app-1',
		data: {
			content: 'this is vue filter!'
		}
	});
	
	const app2 = new Vue({
		el: '#app-2',
		data: {
			money: 234659.3
		}
	});
	
	const app3 = new Vue({
		el: '#app-3',
		data: {
			keyboardInfo: {
				goods: 'Cherry樱桃机械键盘-MX-BOARD 9.0',
				country: '德国',
				price: 1376
			}
		}
    });
    
    const app4 = new Vue({
		el: '#app-4',
		data: {
			refrigerator: {
				goods: '海尔智能王冰箱',
				country: '中国',
				manuDate: 1492531200000
			}
        },
        filters: {
            // 毫秒转本地日期格式过滤器
            toLocalDate: function(value) {
                if (!value) {
                    return '';
                }
                if(typeof value === 'number') {
                    value = new Date(value).toLocaleString();
                } 
                return value;
            }
        }
	});
};



/*******************************************/
/* 过滤器定义 */
/*******************************************/
// 首字母大写
Vue.filter('capitalize', function(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

// 全部字母大写
Vue.filter('uppercase', function(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.toUpperCase();
});

// 全部字母小写
Vue.filter('lowerCase', function(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.toLowerCase();
});

// 书名号
Vue.filter('bookmark', function (val) {
	if(!val) {
		return '';
	}
	val = '《' + val + '》';
	return val;
});

// 货币符号
Vue.filter('currency', function(value) {
    if (!value) {
        return '';
    }
    if(typeof value === 'number') {
        value = '￥' + parseFloat(value.toFixed(2)).toLocaleString();
        // 如果有小数
        if(value.lastIndexOf('\.') !== -1) {
            // 获取小数位
            const decimalLength = value.slice(value.lastIndexOf('\.') + 1).length;
            // 只有有一位小数
            if(decimalLength === 1) {
                value += "0"
            }
        }
        // 如果没有小数
		else {
            value += ".00"
        }
    }
    return value;
});



