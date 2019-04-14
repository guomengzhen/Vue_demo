<template>
    <div>
       <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item " :class="{'mui-active':item.id==0}" href="#item1mobile " v-for='item in cateList' :key="item.id" data-wid="tab-top-subpage-1.html" @click="getList(item.id)" >
							{{item.title}}
						</a>
						<!-- 这个:class="{'mui-active':item.id==0}三元表达式也可以" 原来仅仅是让初始化时只有id为0时高亮，点击其他active的样式是scoll插件里封装好的 -->
					</div>
				</div>
			</div>
 <ul class="list">
  <router-link :to="'/home/photoinfo/'+item.id" tag='li' v-for="item in list" :key='item.id'>
    <img v-lazy="item.img_url">
    <div class="info">
		<h3 class="info-title">{{item.title}}</h3>
		<div class="info-body">{{item.zhaiyao}}</div>
	</div>
  </router-link>
</ul>
    </div>
</template>
<script>
import mui from '../../src/lib/mui/js/mui.js'
export default {
  data () {
    return {
        cateList:[],
        list:[],
    }
  },
  mounted() {    //dom元素已经渲染完毕触发
       mui('.mui-scroll-wrapper').scroll({deceleration: 0.0005  });  //初始化导航栏滚动
      
  },
  created() {
      this.getcates()
      this.getList(0)
  },
  methods: {
      getcates(){
          this.$http.get('api/getimgcategory').then(
              res=>{
                //   console.log(res);
                  this.cateList=[{title:'全部',id:0},...res.body.message]
                  console.log(this.cateList);
                  
              }
          )
      },
      getList(id){
          console.log(id)
       this.$http.get('api/getimages/'+id).then(result=>{
				if(result.body.status == 0){
					this.list = result.body.message
                }
                 console.log(this.list)
                
      })
      }
  },
}
</script>
<style lang="scss" scoped>

	
.list{
	background:#ccc;
	list-style:none;
	padding:0 15px ;
		img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	li{
		position: relative;
        margin:10px 0;
		
		img{
            display: block;
			width:100%;
		}
		.info{
           
           
			position: absolute;
			bottom:0;
			background:rgba(0,0,0,.4);
            font-size: 14px;
            color: #fff;
		}
	}
}


</style>