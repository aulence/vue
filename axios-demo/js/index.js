/**
 * 功能：Axios示例
 * 日期：2017/6/26
 **/
/* axios的AJAX */
axios.get('data/tea-info.json')
	.then(function (response) {
		let teaInfo = document.getElementById('tea-info');
		console.log(response);
		const data = response.data,
			data_length = data.length;
		for(let i = 0; i < data_length; i++) {
			teaInfo.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
		}
	})
	.catch(function () {
		console.error('数据请求错误');
	});

/* jquery的AJAX-1 */
$.get('data/tea-info.json', function (data) {
	let teaInfo2 = document.getElementById('tea-info2');
	//console.log(data);
	const data_length = data.length;
	for(let i = 0; i < data_length; i++) {
		teaInfo2.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
	}
});

/* jquery的AJAX-2 */
$.get('data/tea-info.json').done(function (data) {
	let teaInfo3 = document.getElementById('tea-info3');
	//console.log(data);
	const data_length = data.length;
	for(let i = 0; i < data_length; i++) {
		teaInfo3.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
	}
});

/* jquery的AJAX-3 */
$.get('data/tea-info.json').then(
	// 请求成功
	function (data) {
		let teaInfo4 = document.getElementById('tea-info4');
		const data_length = data.length;
		for(let i = 0; i < data_length; i++) {
			teaInfo4.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
		}
	},
	// 请求失败
	function () {
		console.error('数据URL错误或网络错误！');
	}
);

/* axios通过不同参数向后台发送GET请求 */
// 允许的参数有："pikachu"、"penhuolong"、"miaowahua"
axios.get('http://aulence.com/php/role-info.php?role=pikachu')
.then((resp) => {
    console.log('---------------------------------');
	console.log('axios通过不同参数向后台发送GET请求：pikachu');
	console.log(resp.data);
    console.log('---------------------------------');
});
// 或者是
axios.get('http://aulence.com/php/role-info.php', {
    params: {
        role: 'penhuolong'
    }
})
.then((resp) => {
    console.log('---------------------------------');
    console.log('axios通过不同参数向后台发送GET请求：penhuolong');
    console.log(resp.data)
    console.log('---------------------------------');
});

/* axios向后台发送POST请求 */
// 这里是通过表单获取到的键值对
const userSignUpInfo = {
    name: 'aulence',
    tel: '18116657687',
    pwd: '123456'
}
// 创建一个URL查询字符串对象
const params = new URLSearchParams();
// params.append('name','aulence');
// params.append('tel','18116657687');
// params.append('pwd','123456');
for(let x in userSignUpInfo) {
    params.append(x, userSignUpInfo[x]);
}

axios.post('http://aulence.com/php/user-signup.php', params).then((resp) => {
    console.log('---------------------------------');
    console.log('axios向后台发送POST请求');
    console.log(resp.data);
    console.log('---------------------------------');
});



