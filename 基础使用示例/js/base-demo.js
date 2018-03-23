/**
 * 功能：Vue基础总结练习
 * 日期：2017/4/21
**/
Vue.config.silent = true;

let vm = new Vue({
	el: '#app',
	data: {
		seriesDefined: ['雷','木','水','火','土','光','暗'],
		strongPointDefined: ['攻击','防御','智力','体质','敏捷'],
		buttonName: '创建角色',
		modifyStatus: false,
		operateObjIndex: NaN,
		newRole: {
			id: 'DS-',
			name: '',
			series: '雷',
			strongPoint: '攻击'
		},
		roleInfo: [
			{
				id: 'DS-001',
				name: '钢·雷顿兽',
				series: '雷',
				strongPoint: '防御'
			},
			{
				id: 'DS-002',
				name: '噩梦·幽梦兽',
				series: '暗',
				strongPoint: '攻击'
			},
			{
				id: 'DS-003',
				name: '冰·花刺兽',
				series: '木',
				strongPoint: '敏捷'
			},
			{
				id: 'DS-004',
				name: '熔·岩甲兽',
				series: '土',
				strongPoint: '体质'
			}
		]
	},
	methods: {
		// 创建角色
		createRole: function () {
			// 如果当前的状态不为修改状态
			if(this.modifyStatus === false) {
				// 添加到一条新数据到
				this.roleInfo.push(this.newRole);
			}
			// 如果为修改状态
			else {
				// 修改对象对应的表格数据
				this.roleInfo.splice(this.operateObjIndex, 1, this.newRole);
				// 恢复按钮名称
				this.buttonName = '创建角色';
				this.modifyStatus = false;
			}
			
			// 添加完newRole对象后，重置newRole对象
			this.newRole = {
				id: 'DS-',
				name: '',
				series: '雷',
				strongPoint: '攻击'
			}
		},
		// 删除角色
		deleteRole: function (index) {
			this.roleInfo.splice(index,1);
		},
		// 修改角色
		editRole: function (index) {
			// 修改按钮名称
			this.buttonName = '确认修改';
			this.newRole = {
				id: this.roleInfo[index].id,
				name: this.roleInfo[index].name,
				series: this.roleInfo[index].series,
				strongPoint: this.roleInfo[index].strongPoint
			};
			this.modifyStatus = true;
			this.operateObjIndex = index;
		},
		// 表格升序排列
		ascending: function () {
			this.roleInfo.sort(function (role1, role2) {
				let id_1 = role1.id.replace(/\D*/g,''),
					id_2 = role2.id.replace(/\D*/g,'');
				return id_1 - id_2;
			});
		},
		// 表格降序排列
		descending: function () {
			this.roleInfo.sort(function (role1, role2) {
				let id_1 = role1.id.replace(/\D*/g,''),
					id_2 = role2.id.replace(/\D*/g,'');
				return id_2 - id_1;
			});
		}
	}
});


/**
 * 到目前为止我们接触的VM主要的配置项包括
 */
/* new Vue({
    // 基本配置
    el: '#app',         // 选择器
    data: {},           // 数据
    computed: {},       // 计算属性
    methods: {},        // 事件
    // 8个钩子函数
    beforeCreate() {},  // 数据创建前
    created() {},       // 数据创建后
    beforeMount() {},   // 视图元素生成前
    mounted() {},       // 视图元素生成后
    beforeUpdate() {},  // 数据在更新的时候之前的操作
    updated() {},       // 数据在更新的时候之后的操作
    beforeDestroy() {}, // VM（视图模型）在销毁操作执行的时候之前的操作
    destroyed() {},     // VM在销毁操作执行的时候之后的操作
    // 其它配置
    filters: {},        // 过滤器
    watch: {},          // 检测器
    components: {}      // 组件
}); */

