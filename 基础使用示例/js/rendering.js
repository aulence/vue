/**
 * 功能：Vue渲染方式
 * 日期：2017/4/17
 **/

const roleInfo_arr = ['天魁星——及时雨：宋江','天罡星——玉麒麟：卢俊义','天机星——智多星：吴用','天闲星——入云龙：公孙胜','天勇星——大刀：关胜','天雄星——豹子头：林冲','天猛星——霹雳火：秦明'];

const roleInfo_obj = [
	{ star: '天威星', title: '双鞭', name: '呼延灼'},
	{ star: '天英星', title: '小李广', name: '华荣'},
	{ star: '天贵星', title: '小旋风', name: '柴进'},
	{ star: '天富星', title: '扑天雕', name: '李应'},
	{ star: '天满星', title: '美髯公', name: '朱仝'},
	{ star: '天孤星', title: '花和尚', name: '鲁智深'},
	{ star: '天伤星', title: '行者', name: '武松'},
	{ star: '...', title: '...', name: '...'}
];
const app1 = new Vue({
	el: '#app-1',
	data: {
		listRender_arr: roleInfo_arr,
		listRender_obj: roleInfo_obj
	}
});
