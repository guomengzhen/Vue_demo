<template>
     <div class="newsinfo-container">
    <h3 class="title">{{newinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newinfo.add_time | dateFormat}} </span>
      <span>点击：{{newinfo.click}}次</span>
    </p>
    <div class="content" v-html='newinfo.content'></div>

     <Comment-Box></Comment-Box>
  </div>
</template>
<script>
// 引入公共子组件,注册为私有子组件  也可以放入 main里面 注册成全局组件，只要放入标签都能用
import CommentBox from '../subcomponents/CommentBox.vue'

export default {
  data () {
    return {
        id:this.$route.params.id,
        newinfo:{}
    };
  },
  created() {
      this.getData()
  },
  methods: {
      getData(){
          this.$http.get('api/getnew/'+this.id).then(
              res=>{
                //   console.log(res);
                  this.newinfo=res.body.message[0]
                  console.log(this.newinfo);
                  
              }
          )
      }
  },
  components:{
      CommentBox
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding:0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin:15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
<style lang="scss">  //因为v-html也属于子组件，所以上面的scoped会让我们在上面设置样式失效，所以这里设置个全局的style
    .newsinfo-container{
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>