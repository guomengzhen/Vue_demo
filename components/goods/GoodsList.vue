<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="getGoodsInfo(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">&yen;{{item.sell_price}}</span>
          <span class="old">&yen;{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
    name:'GoodsList',
  data () {
    return {
        pageIndex:1,
        goodslist:[]
    };
  },
    created() {
       this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get(`api/getgoods?pageindex=${this.pageIndex}`).then(res=>{
                // console.log(res);
                this.goodslist=[...this.goodslist,...res.body.message]
            })
        },
        getMore(){
             this.pageIndex++,
              this.getGoodsList()
        },
        getGoodsInfo(id){  //编程式导航  给元素设置事件 跳转
            // this.$router.push('/home/goodsinfo/'+id)
            // this.$router.push({path:'/home/goodsinfo/'+id})
             //第三种玩法 命名路由  命名路由需要在设置路由的时候增加name属性
            this.$router.push({name:'goodsinfo',params:{id}})
        }
    },
}
</script>
<style lang="scss" scoped>
.goods-list{
  display:flex;
  flex-wrap:wrap;
  padding:7px;
  justify-content: space-between;
}
.goods-item{
  width:49%;
  border:1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin:4px 0;
  padding:2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height:229px;
  img{
    width:100%;
  }
  .title{
    font-size: 14px;
  }
  .info{
    background: #eee;
    p{
      margin:0;
      padding:5px;
      .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .old{
        text-decoration: line-through;
      }
    }
  }
}
</style>