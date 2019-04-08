<template>
    <div>
      <!-- 轮播图 -->
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for='item in list' :key="item.id">
            <img :src="item.img" alt="" >
          </mt-swipe-item>
          <!-- <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
        <!-- 九宫格 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to='/home/newslist'>
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></a></li>
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

export default { 
  // 通过接口获取数据，将数据保存到data，通过v-for渲染到页面上

  data () {
    return {
      list:[]
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
              console.log(this.list);
              
          }else{
            Toast('数据获取失败');
          }
         
        }
      )
    }
  },
}
</script>
<style lang="scss" scoped>

    .mint-swipe{
      height: 300px;
      background-color: #0aa;
      img{
        width: 100%;
        height: 100%;
      }
    }
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