// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue.js核心文件导入
import Vue from 'vue'
// App.vue组件导入
import App from './App'
// 路由配置文件导入
import router from './router'
import BootstrapCSS from 'bootstrap-css'
// DOM操作文件导入
import domCtrl from './scripts/dom-ctrl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
