<template>
    <div>
        <CommentBox :id='id'></CommentBox>
    </div>
</template>
<script>
import CommentBox from '../subcomponents/CommentBox.vue'
export default {
  data () {
    return {
       id:this.$route.params.id,
    };
  },
  components:{
        CommentBox
  }
}
</script>
<style lang="scss" scoped>
</style>