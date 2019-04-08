import Vue  from 'vue'
// 导入根组件
import App from './App.vue'
// 导入完整mint-UI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)  //注册
// 全局组件
// 按需导入mint-ui  需要什么组件就导入 比如按钮 弹出框
import {Button} from 'mint-ui'
Vue.component(Button.name,Button)

import { Header } from "mint-ui";
Vue.component(Header.name, Header);
//mint-ui 轮播图
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入mui
import  './lib/mui/css/mui.css'
import  "./lib/mui/css/icons-extra.css"

// 配置路由 引入路由文件
import VueRouter from 'vue-router'  //导入路由包
Vue.use(VueRouter)                 //安装
import router from './router.js'   //导入我们自己的路由模块

// vue-resource  ajax
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = "http://www.liulongbin.top:3005/"; //配置一个全局URL请求地址

// 定义一个全局日期过滤器 引入moment日期模块
import moment from 'moment'
            // 过滤器名字 回调函数
Vue.filter('dateFormat',function(datastr,pattern='YYYY-MM-DD HH:mm:ss'){ //给pattern设置了形参默认值 也可以调用过滤器的那边传过来
    return moment(datastr).format(pattern)
})




const vm=new Vue({
    el:'#app',
    render:function (createEl) {
     return   createEl(App)
    },
    router
})