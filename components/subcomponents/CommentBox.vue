<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容"  maxlength="120"></textarea>
       <mt-button size="large" type="primary">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item">
            <div class="cmt-title">
              第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
              锄禾日当午 复方
            </div>
          </div>
          <div class="cmt-item">
            <div class="cmt-title">
              第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
              锄禾日当午 复方
            </div>
          </div>
          <div class="cmt-item">
            <div class="cmt-title">
              第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
              锄禾日当午 复方
            </div>
          </div>
          <div class="cmt-item">
            <div class="cmt-title">
              第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;发表时间：2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
              锄禾日当午 复方
            </div>
          </div>
        </div>

        <mt-button size="large" type="danger" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
  data () {
    return {
    };
  }
}
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