<template>
    <div class='goodsdesc-container'>
        <h3>{{list.title}}</h3>
        <div class="content" v-html='list.content'></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      id:this.$route.params.id,
      list:[]
    };
  },
  created() {
    this.getGoodsdesc()
  },
  methods: {
      getGoodsdesc(){
          this.$http.get(`api/goods/getdesc/${this.id}`).then(res=>{
            console.log(res);
            if(res.body.status == 0){
                this.list=res.body.message[0]
            }
          })
      }
  },
}
</script>
<style lang="scss" >
.goodsdesc-container{
  padding:4px;
  h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin:15px 0;
  }
  // 因为content里的内容是动态生成的，会生成在其他页面，这个css有局部作用域就对他无法生效。把它设为全局的
  .content{
   .gomeImgLoad{
      width:100%;
    }
  }
} 

</style>