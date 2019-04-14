<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
        <div class="mui-card" v-for='(item,i) in list' :key="item.id">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <mt-switch v-model="$store.getters.getSelected[item.id]" @change="updataSelect(item.id)"></mt-switch>
                <img :src="item.thumb_path" alt="">
                <div class="info">
                  <h1>{{item.title}}</h1>
                  <p>
                    <span class="price">{{item.sell_price}}</span>
                    <!-- 这块放numbox -->
   <!-- // 把加入了购物车的每个商品的数量渲染到numbox 在vuex仓库里处理数据 id：count 
      然后这里父传子传值过来props接收                    -->
    <!-- $store.getters.getGoodsCount[item.id]等于obj[id]的意思 obj.id就会把count呈现 -->
    <!-- 把id传给numbox，他的change事件要用 -->
                    <numbox :initcount='$store.getters.getGoodsCount[item.id]' :goodsId='item.id'></numbox>
                    <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                  </p>
                </div>
              </div>
            </div>
          </div> 
    </div> 
    <!-- 结算区域 -->
         
    <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner jiesuan">
                <div class="left">
                  <p>总计(不含运费)</p>
                  <p>已勾选商品{{$store.getters.getTotal.count}}件，<span class="red">总价&yen;{{$store.getters.getTotal.sum}}</span></p>
                </div>
                <mt-button type="danger">去结算</mt-button>
              </div>
            </div>
          </div>
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'

// 把数据请求回来渲染到购物车页面
// numbox里的数量与本地存储的数据同步
// 让numbox里面加减商品数量按钮与本地仓库同步  input框的change事件

// 删除商品 点击删除按钮删除商品，需要删两个 视图上的 和本地仓库内的 删除视图上的要用到for循环的索引i


// 让select按钮开关与仓库里的数据同步 仓库里提供一个对象{id：select}
// 给select按钮一个change事件 select按钮开关的修改（true或false） 同步保存到仓库和本地存储
//渲染 已勾选商品的总数量 和总价 到页面，这个放在vuex的getters计算属性里计算 
export default {
  data () {
    return {
      list:[],
    };
  },
   created(){
    this.getlist()
  
  }, 
 methods: {
    // 把数据请求回来渲染到购物车页面  接口参数为ids 所有加入购物车的商品的id 以，分隔
    // 从vuex。state取到数据id 并处理成我们要的格式
      getlist(){
        var arr=[];
        this.$store.state.car.forEach(item =>  arr.push(item.id))
                
        if(arr.length<=0)return  ////如果购物车中没有数据，则直接返回，不需要请求数据接口，否则会报错
        // 发送数据请求                                      arr数组，分隔成字符串
        this.$http.get('api/goods/getshopcarlist/'+arr.join(',')).then(res=>{
            if(res.body.status == 0){
              // console.log(res);   
              this.list=res.body.message
            }
          
        })

      },
      updataSelect(id){ //让select按钮开关与仓库里的数据同步
          this.$store.commit('updataSelect',id)
      },
      remove(id,i){
        this.list.splice(i,1)  //删除视图
        // 删除本地存储的数据 vuex
        this.$store.commit('delete',id)
        // console.log(id);
        
      }

  },

   components:{
    numbox
  },
}
</script>
<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}

</style>