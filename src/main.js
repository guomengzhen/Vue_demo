import Vue from "vue";
// 导入根组件
import App from "./App.vue";
// 导入完整mint-UI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI); //注册
// 全局组件
// 按需导入mint-ui  需要什么组件就导入 比如按钮 弹出框

// 导入mui
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

// 配置路由 引入路由文件
import VueRouter from "vue-router"; //导入路由包
Vue.use(VueRouter); //安装
import router from "./router.js"; //导入我们自己的路由模块

// vue-resource  ajax
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "http://www.liulongbin.top:3005/"; //配置一个全局URL请求地址
Vue.http.options.emulateJSON = true; //post请求返回json

// 定义一个全局日期过滤器 引入moment日期模块
import moment from "moment";
// 过滤器名字 回调函数
Vue.filter("dateFormat", function(datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
  //给pattern设置了形参默认值 也可以调用过滤器的那边传过来
  return moment(datastr).format(pattern);
});

// 缩略图插件
import VuePreview from "vue-preview";
Vue.use(VuePreview);

import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    car: JSON.parse(localStorage.getItem("car")) || []
    //存放购物车数据   将数据在addCar方法中存入localstarage 在这里读取
  },
  mutations: {
    //  commit调用
    addCar: function(state, obj) {
      var flag = false;
      for (var i = 0; i < state.car.length; i++) {
        if (state.car[i].id == obj.id) {
          state.car[i].count += obj.count;
          flag = true;
          break;
        }
      }

      if (!flag) {
        state.car.push(obj);
      }
      // 将最新的car数据存入本地存储
      localStorage.setItem("car", JSON.stringify(state.car));

      //当你没有必要对循环全部执行
      // var flag = false
      // state.car.some(item=>{
      //   if(item.id == obj.id){
      //     item.count += obj.count
      //     flag = true
      //     return true
      //   }
      // })

      // if(!flag){
      //   state.car.push(obj)
      // }

      //如果之前这个商品已经有了，让数量增加
      //如果之前没有，push
      // var flag=false
      // for(var i=0;i<state.length;i++){
      //     if(state.car[i].id==obj.id){
      //         state.car[i].count+=obj.count
      //         flag=true
      //         break
      //     }
      // }
      // if(!flag){
      //     state.car.push(obj)
      // }
    },
    updataSelect: function(state, id) {
      //select按钮的改变
      state.car.some(item => {
        if (item.id == id) {
          item.selected = !item.selected;
          localStorage.setItem("car", JSON.stringify(state.car));
          return true;
        }
      });
    },
    updateGoodsInfo: function(state, obj) {
      //这个方法目的是input框数值改变就同步到仓库本地存储中
      state.car.some(item => {
        if (item.id == obj.id) {
          item.count = parseInt(obj.count);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    delete:function(state,id) {
      state.car.some((item,index)=>{
        if(item.id==id){
          console.log(state.car);
          
         state.car.splice(index,1)
          return true;
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car));
    }
  },
  getters: {
    //计算属性
    total(state) {
      // 把car中的count汇总
      // setTimeout(() => {
      var sum = 0;
      state.car.forEach(item => {
        sum += item.count;
      });
      return sum;
      // }, 600);
    },
    getGoodsCount(state) {
      //处理car里的数据 处理成一个对象{id：count} 如{88:1}供 numbox里渲染
      var obj = {};
      state.car.forEach(item => (obj[item.id] = item.count));
      return obj;
    },
    getSelected(state) {
      //商品的select按钮数据 处理成一个对象{id：select}
      var obj = {};
      state.car.forEach(item => {
        obj[item.id] = item.selected;
      });
      return obj;
    },
    getTotal(state) {
      //计算已勾选商品的总数量 和总价
      //  定义一个对象 总结总数量 存入
      var obj = {
        count: 0,
        sum: 0
      };
      state.car.forEach(item => {
        if (item.selected) {
          //判断是否勾选
          obj.count += parseInt(item.count);
          obj.sum += item.price * item.count;
        }
      });
      return obj;
    }
  },
  actions: {}
});

const vm = new Vue({
  el: "#app",
  render: function(createEl) {
    return createEl(App);
  },
  router,
  store
});
