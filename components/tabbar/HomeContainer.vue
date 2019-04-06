<template>
    <div>
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for='item in list' :key="item.id">
            <img :src="item.img" alt="" >
          </mt-swipe-item>
          <!-- <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
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
    getList(){
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
      img{
        width: 100%;
        height: 100%;
      }
    }
</style>