/**
 * Axios传参示例
 * 日期：2018/4/18
**/
/* 用GET方式发送不同的参数获得不同数据 */
const btnLoadData1 = document.querySelector("#loadData-1");
btnLoadData1.onclick = function() {
    const petSelectVal = document.querySelector('#petSelect').value;
    const petInfo = document.querySelector('#petInfo');
    // 允许的参数有："pikachu"、"penhuolong"、"miaowahua"
    axios.get('http://aulence.com/php/role-info.php?role=' + petSelectVal)
    .then((resp) => {
        // console.log(resp);
        const data = resp.data;
        // 设定名称、系列和技能
        petInfo.children[0].children[1].innerHTML = data.name;
        petInfo.children[1].children[1].innerHTML = data.series;
        petInfo.children[2].children[1].innerHTML = data.skill.join("、");
    });
    // 或者是写成这种形式
    // axios.get('http://aulence.com/php/role-info.php', {
    //     params: {
    //         role: 'penhuolong'
    //     }
    // })
    // .then((resp) => {
    //     console.log(resp.data)
    // });
}



/* Axios使用POST方式向后台发送数据 */
const btnLoadData2 = document.querySelector("#loadData-2");
/* const userSignUpInfo = {
    name: '',
    tel: '',
    pwd: ''
} */
btnLoadData2.onclick = function() {
    const userSignUpInfo = {
        name: userInfoForm.name.value,
        tel: userInfoForm.tel.value,
        pwd: userInfoForm.pwd.value
    }
    // 创建一个URL查询字符串对象
    const params = new URLSearchParams();
    // 这样写效率低，可维护性不强
    // params.append('name','aulence');
    // params.append('tel','18116657687');
    // params.append('pwd','123456');
    // 可以改写成这种形式
    for(let x in userSignUpInfo) {
        params.append(x, userSignUpInfo[x]);
    }
    //　使用POST向后台发送带参数请求
    axios.post('http://aulence.com/php/user-signup.php', params).then((resp) => {
        alert('来自后台返回的结果：\n' + resp.data)
    });
}