<template>
  <div class="mui-numbox" data-numbox-min='1'  >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
    <!-- 分析：子组件什么时候把值传递给父组件 -->
</template>
<script>
import mui from '../../src/lib/mui/js/mui.js'
export default {
  mounted(){
    //初始化数字选择组件
    mui('.mui-numbox').numbox()
  },
  props:['initcount','goodsId'],
  data () {
    return {
    };
  },
  methods: {
    countChanged(){
    //  commit调用vuex里的mutations方法 目的是input框数值改变就同步到仓库本地存储中，传入id和输入框数值
        // input框的value通过ref获取dom元素获得
        console.log(this.$refs.numbox.value);
        this.$store.commit('updateGoodsInfo',{id:this.goodsId,count:this.$refs.numbox.value})
        

    }
  },
}
</script>
<style lang="scss" scoped>
</style>