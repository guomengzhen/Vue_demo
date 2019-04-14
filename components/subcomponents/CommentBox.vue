<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容" v-model.trim='txt' maxlength="120"></textarea>
       <mt-button size="large" type="primary" @click="addcommon">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for='(item,i) in list' :key='i'>
            <div class="cmt-title">
              第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_naem}} &nbsp;发表时间：{{item.add_time |dateFormat}}
            </div>
            <div class="cmt-body">
              {{item.content}}
            </div>
          </div>
     
        </div>

        <mt-button size="large" type="danger" plain @click='getmore'>加载更多</mt-button>
    </div>
</template>
<script>
export default { 
  props:['id'],
  data () {
    return {
      pageindex:1,
      list:[],
      txt:'',
    };
  },
 
  created() {
    this.getComment()
  },
  methods: {
    getComment(){ //发送请求 获取评论数据
      
      
        this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`).then(
          res=>{
            // console.log(res);
             if(res.status == 200){
               this.list=[...this.list,...res.body.message]
             }
             console.log(this.list);
             
          }
        )
    },
    getmore(){
       this.pageindex++
       //可以更简单 直接调用上面函数 改造一下
        // this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`).then(
        //       res=>{
        //     // console.log(res);
        //      if(res.status == 200){
        //        this.list=[...this.list,...res.body.message]
        //      }}
        // )
      this.getComment()
   },
   addcommon(){
    //  console.log(this.txt);
    if(this.txt==''){
          alert('数据不能为空')
        return 
    }
    this.$http.post(`api/postcomment/${this.id}`,{content:this.txt}).then(
      res=>{
        // console.log(res);
        if(res.body.status == 0){
            //第一种思路 清空所有的数据，再次请求数据   这个评论列表默认是倒序的
          // this.list = []
          //this.pageindex = 1
          // this.getList()
          // this.txt = ''
          //第二种思路            
          //构建一个新的数据对象  把它手动添加至客户端的第一个评论  其实是假数据 但是这里会发送请求所以手动刷新也会出来
          const obj = {
            add_time:Date.now(),
            content:this.txt,
            user_name:'匿名用户'
        }
         this.list.unshift(obj)
          this.txt = ''
        }
      }
    )
     
   }
  },
}

// 打开页面就要渲染出首页评论  需要具体文章id 这个id由父组件newsinfo传递过来 以及页码 
//  加载更多 给按钮点击事件 page++ 请求数据 然后和原来数据合拼
// 发表评论 双向数据绑定 按钮点击事件 发送请求 
</script>
<style lang="scss" scoped>
   .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea{
      font-size: 14px;
      height: 85px;
      margin:0;
    }
    .cmt-list{
      margin:5px 0;
      .cmt-item{
        font-size:13px;
        .cmt-title{
          line-height: 30px;
          background-color:#ccc;
        }
        .cmt-body{
          line-height:35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>