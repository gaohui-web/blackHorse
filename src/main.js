//入口文件

console.log('ok')


import Vue from 'vue'
import app from './app.vue'
//按需导入mintui的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import '../lib/mui/css/mui.css'


var vm = new Vue({
    el: "#app",
    render: c => c(app)
})