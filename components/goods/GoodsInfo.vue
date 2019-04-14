<template>
  <div class="goodsinfo-container">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
       <div class="ball" v-show='ballflag' ref='ball' ></div>
      </transition>
     
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					 <swipe :list="list" :isfull='isfull'></swipe> 
					</div>
				</div>
			</div>
   
    <!-- 商品购买区域 -->
    <div class="mui-card">



				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					    <p class="price">
                           市场价：<del>&yen;2399</del>&nbsp;&nbsp;销售价：<span class="now_price">&yen;            2199</span>
                         </p>
                         <p>购买数量： <NumBox @getcount='getNumCount' :max='goodsinfo.stock_quantity'></NumBox></p>
                            <!-- 这个num组件 涉及了子组件向父组件传值 父组件向子组件传值 -->
                         <p>
                           <mt-button type="primary" size="small">立即购买</mt-button>
                           <mt-button type="danger" size="small" @click='addToShopCar'>加入购物车</mt-button>
                         </p>
					</div>
				</div>
			</div>

    <!-- 商品参数区域 -->
     
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}} </p>
            <p>库存情况：{{goodsinfo.stock_quantity}}</p>
            <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
        </div>
		</div>
  </div>
</template>
<script> 

// 引入轮播图 注册 放入标签  这里因为数据与轮播组件里的不同 所以要处理一下
import swipe from '../subcomponents/swipe.vue'
// 引入数量盒子 注册
import NumBox from '../subcomponents/NumBox.vue'
export default {
  data () {
    return {
        list:[],
        id:this.$route.params.id,  //拿到id 
         isfull:false,   //轮播图样式开关
         goodsinfo:[],
         ballflag:false,    //小球开关
         selectNum:1,      //购物数量 由num组件传递过来
    };
  },
  created() {
      this.getlunbotu()
      this.getgoodsinfo()
  },
  methods: {
      getlunbotu(){
          this.$http.get(`api/getthumimages/${this.id}`).then(res=>{
            //   console.log(res);
                if(res.body.status == 0){
                    // this.list = res.body.message
                        // 这里因为数据与轮播组件里的不同 所以要处理一下
                        res.body.message.forEach(item=>{
                            item.img=item.src
                        })
                        this.list = res.body.message
                    }
              
          })
      },
        // 获取商品详细数据渲染
        getgoodsinfo(){
        this.$http.get(`api/goods/getinfo/${this.id}`).then(
                res=>{
                    // console.log(res);
                      if(res.body.status == 0){
                          this.goodsinfo=res.body.message[0]
                      }
                }
            )
       
    },
        //编程式导航
        goDesc(id){
            this.$router.push('/home/goodsdesc/'+id)
        },
        goComment(id){
             this.$router.push({name:'goodscomment',params:{id}})
        },
        // 小球动画效果
          beforeEnter(el){
              el.style.transform = 'translate(0,0)'
          },
          enter(el,done){
               el.offsetWidth 
               // 动态获取需要位偏移的x y 值 这样就改变页面位置也不会位置不对
               // ref操作dom元素 ，使用方法来获取 
               const ballPosition = this.$refs.ball.getBoundingClientRect()
                 const badgePosition = document.querySelector('#badge').getBoundingClientRect()
               const x = badgePosition.left - ballPosition.left 
               const y = badgePosition.top - ballPosition.top 

               el.style.transform=`translate(${x}px,${y}px)`
               el.style.transition = 'all cubic-bezier(.17,.67,.8,.99) .3s'
               done()
                 },
          afterEnter(el){
                this.ballflag=!this.ballflag
          },
        // 接收Num组价传来的值
        getNumCount(count){
            this.selectNum=count;
            console.log(this.selectNum);
            
        },
        addToShopCar(){
            this.ballflag=!this.ballflag
            // 拼接一个对象存入vuex仓库
            const obj={
                id:this.id,
                count:this.selectNum,
                price:this.goodsinfo.sell_price,
                selected:true
            }
            this.$store.commit('addCar',obj)

        }
    
    },
  components:{
      swipe,
      NumBox
  },
 
}
</script>
<style lang="scss" scoped>

.goodsinfo-container{
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
    .mui-card-footer{
        display: block;
    }
    .ball{
         width:15px;
         height: 15px;
         border-radius: 50%;
         background-color: red;
         position: absolute;
         z-index:99;
         top:412px;
         left:78px;
         transform: translate()
        }   
}
</style>
<style lang="scss">
    
// .mint-swipe-item{
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// }
// div{
//   -webkit-transform: translate3d(0, 0, 0);
// transform: translate3d(0, 0, 0);
// }
</style>