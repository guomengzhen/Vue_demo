<template>
    <div>
      <!-- 轮播图 并传参 -->
     <swipe :list="list" :isfull="isfull"></swipe>    
        <!-- 九宫格 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to='/home/newslist'>
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link  to='/home/photolist'>
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div>
                      </router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/goodslist">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div>
                    </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
		 
		        </ul> 

    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import swipe from '../subcomponents/swipe.vue'  //引入轮播图组件
export default { 
  // 通过接口获取数据，将数据保存到data，通过v-for渲染到页面上

  data () {
    return {
      list:[],
      isfull:true,   //轮播图样式开关
    };
  },
    created() {  //vm初始化之后，渲染数据
      this.getList()
  },
  methods: {
    getList(){   //获取轮播图数据
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(
        res=>{
          // console.log(res);
          if(res.status==200){
             this.list=res.body.message
              // console.log(this.list);
              
          }else{
            Toast('数据获取失败');
          }
         
        }
      )
    }
  },
  components:{
    swipe   //注册轮播图组件
  }
}
</script>
<style lang="scss" scoped>

  
    .mui-grid-9{
      background-color: #fff;
      >li{
        width: 33.3%;
        img{
          width: 60px;
          height: 60px;
        }
      }
    }
    

</style>