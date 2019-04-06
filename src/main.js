import Vue  from 'vue'
// 导入根组件
import App from './App.vue'
// 导入完整mint-UI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)  //注册

// 按需导入mint-ui  需要什么组件就导入 比如按钮 弹出框
// import {Button} from 'mint-ui'
// Vue.component(Button.name,Button)
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

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


const vm=new Vue({
    el:'#app',
    render:function (createEl) {
     return   createEl(App)
    },
    router
})