<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in list ' :key='item.id'>
					<router-link :to="'/home/newsinfo/'+item.id">  
						<img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
						<div class="mui-media-body">
						{{item.title}}	
							<p class="mui-ellipsis"><span>发布时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span><span>点击：{{item.click}}</span></p>
						</div>
					</router-link>
				</li>
			

			</ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
        list:[]
    };
  },
  created() {
      this.getlist()
  },
  methods: {
      getlist(){
          this.$http.get("api/getnewslist").then(
              res=>{
                  console.log(res);
                  this.list=res.body.message
              }
          )
      }
  },
}
</script>
<style lang="scss" scoped>
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
    }
</style>