<template>
    <div>
     <!-- 轮播图 -->
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for='item in list' :key="item.id">
            <img :src="item.img" :class="{full:isfull}">
          </mt-swipe-item>
          <!-- <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['list','isfull'],
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe{
      height: 200px;
    //   background-color: #0aa;
      text-align: center;
      img{
        
        height: 100%;
      }
    }
    .full{
        width:100%
    }
</style>