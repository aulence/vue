 // 引入 ECharts 主模块
 var echarts = require('echarts/lib/echarts');
 // 引入柱状图
 require('echarts/lib/chart/bar');
 // 引入提示框和标题组件
 require('echarts/lib/component/tooltip');
 require('echarts/lib/component/title');
 // 请求echarts的古典主题
 require('echarts/theme/vintage')

 export default {
     name: 'Echarts',
     data() {
         return {
             myChart: null
         }
     },
     created() {
         
     },
     methods: {
         drawBarCharts() {
             // 基于准备好的dom，初始化echarts实例
             var myChart = echarts.init(this.$refs.barCharts, 'vintage');

             // 使用刚指定的配置项和数据显示图表。
             myChart.setOption({
                 title: {
                     text: 'ECharts在Vue中的使用--柱状图',
                     left: 10,
                     top: 10
                 },
                 tooltip: {},
                 legend: {
                     data: ['产量','销量'],
                     right: 10,
                     top: 'center',
                     textStyle: {
                         fontSize: 16
                     },
                     orient: 'vertical'
                 },
                 xAxis: {
                     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                     axisLabel: {
                         fontSize: 20,
                         rotate: 45,
                         margin: 20,
                         color: '#fdbc6b'
                     }
                 },
                 yAxis: {
                     axisLabel: {
                         fontSize: 30,
                         rotate: 45,
                         margin: 20,
                         color: '#fdbc6b'
                     }
                 },
                 grid: {
                     right: 100,
                     bottom: 80
                 },
                 series: [
                     {
                         name: '产量',
                         type: 'bar',
                         data: [5, 20, 36, 10, 10, 20]
                     },
                     {
                         name: '销量',
                         type: 'bar',
                         data: [5, 20, 36, 10, 10, 20]
                     }
                 ]
             });
             window.onresize = function() {
                 myChart.resize();
             }
             this.myChart = myChart;
         }
     },
     mounted() {
         this.drawBarCharts();
     }
 }