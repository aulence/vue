/**
 * Axios基本示例
 * 日期：2018/4/18
**/
/* axios使用GET请求HTML文档 */
const btnLoadData1 = document.querySelector("#loadData-1");
btnLoadData1.onclick = function() {
    // 执行GET方式请求HTML文件
    axios.get('../data/test-fragment.html')
    .then(function(frag) {
        let teaInfo = document.querySelector('#tea-info-1');
        console.log(frag);
        teaInfo.innerHTML = frag.data;
    })
}

/* axios使用GET请求JSON数据 */
const btnLoadData2 = document.querySelector("#loadData-2");
btnLoadData2.onclick = function() {
    // 执行GET方式请求JSON文件
    axios.get('../data/tea-info.json')
    // 请求成功
	.then(function (response) {
		let teaInfo = document.querySelector('#tea-info-2');
		console.log(response);
		const data = response.data,
			data_length = data.length;
		for(let i = 0; i < data_length; i++) {
			teaInfo.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
		}
    })
    // 请求失败
	.catch(function () {
		console.error('数据请求错误');
	});
}

