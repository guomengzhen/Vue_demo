<template>
  <div class="photoinfo-container">
    <h3>{{data.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{data.add_time|dateFormat}} </span>
      <span>点击：{{data.click}}</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides='list'></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content" v-html='data.content'></div>
    <!-- 放置一个现成的评论子组件 -->
    <CommentBox :id='id'></CommentBox>

  </div>
</template>
<script>
 import CommentBox from '../subcomponents/CommentBox.vue'
export default {
   
  created() {
    this.getData()
    this.getThumbs()
  },
  methods: {
    getData(){
        this.$http.get(`api/getimageInfo/${this.id}`).then(
            res=>{
                // console.log(res);
                this.data=res.body.message[0]
            }
        )
    },
    // 获取缩略图数据
    getThumbs(){
        this.$http.get('api/getthumimages/'+this.id).then(
            res=>{
                console.log(res);
                res.body.message.forEach(item => {
                        item.w = 600
                        item.h = 400
                        item.msrc = item.src
                });
                this.list=res.body.message
            }
        )
    }
  },
  data () {
    return {
      id:this.$route.params.id ,
      data:{},
      list:[]
    };
  },
  components:{
      CommentBox
  }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
  padding:3px;
  h3{
    color:#26A2FF;
    font-size: 15px;
    text-align: center;
    margin:15px 0;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height:30px;
  }
}

</style>
<style lang="scss">
    .my-gallery{
    display: flex;
    // justify-content: ;
    flex-wrap: wrap;
    figure{
        margin: 10px;
        img{
            width: 100px;
        }
    }
}
</style>