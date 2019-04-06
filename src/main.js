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

// 导入mui
import  './lib/mui/css/mui.css'



const vm=new Vue({
    el:'#app',
    render:function (createEl) {
     return   createEl(App)
    }
})