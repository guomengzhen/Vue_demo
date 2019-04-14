<template>
    <div>
      <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"  @change="getNum"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>
<script>
import mui from '../../src/lib/mui/js/mui.js'
export default {
  props:['max'],
  data () {
    return {
    };
  },
  mounted() {
      mui('.mui-numbox').numbox()
  },
  methods: {
    getNum(e){  //使用change事件 监听输入框变化 一变化触发change事件 获取到value值 给父组件传过去
          // 子组件给父组件传值  事件$.emit

          // console.log(e.target.value);
          this.$emit('getcount',parseInt(e.target.value))
    }
  },
  watch: {  //监听ajax数据改变 触发函数
    max:function(newVal,oldNew){
        mui('.mui-numbox').numbox().setOption('max',newVal)
    }
  },
}
</script>
<style lang="scss" scoped>
</style>