/**
 * jQuery的AJAX使用
 * 日期：2018/4/18
 **/

 $(function() {
    // jQuery 1.x版本AJAX调用
    $("#loadData-1").click(function() {
        jquery_v1();
    });

    // jQuery 2.x版本AJAX调用
    $("#loadData-2").click(function() {
        jquery_v2();
    });

    // jQuery 3.x版本AJAX调用
    $("#loadData-3").click(function() {
        jquery_v3();
    });
 });

/* jquery的AJAX-1 */
function jquery_v1() {
    $.get('../data/tea-info.json', function (data) {
        let teaInfo2 = document.getElementById('tea-info-1');
        const data_length = data.length;
        for(let i = 0; i < data_length; i++) {
            teaInfo2.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
        }
    });
}

/* jquery的AJAX-2 */
function jquery_v2() {
    $.get('../data/tea-info.json').done(function (data) {
        let teaInfo3 = document.getElementById('tea-info-2');
        const data_length = data.length;
        for(let i = 0; i < data_length; i++) {
            teaInfo3.innerHTML += `<li>${data[i].brand} - ${data[i].name} - ${data[i].type}</li>`;
        }
    });    
}

/* jquery的AJAX-3 */
function jquery_v3() {
    $.get('../data/tea-info.json').then(
        // 请求成功
        function (data) {
            let teaInfo4 = document.getElementById('tea-info-3');
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
}
