import Vue from 'vue'
import Router from 'vue-router'
import Boot from '@/components/Boot'
import Jquery from '@/components/Jquery'
import Echarts from '@/components/Echarts'
import Axios from '@/components/Axios'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'boot',
            component: Boot
        },
        {
            path: '/jquery',
            name: 'jquery',
            component: Jquery
        },
        {
            path: '/echarts',
            name: 'echarts',
            component: Echarts
        },
        {
            path: '/axios',
            name: 'axios',
            component: Axios
        }
    ]
})
