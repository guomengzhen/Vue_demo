<template>
    <div class='app-container'>
    <!-- 头部 -->
    <mt-header fixed title="Vue项目"></mt-header>
    <!-- 主体部分 -->
	<transition>
	<router-view></router-view>
	</transition>
   
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
					<router-link class="mui-tab-item " to="/home">
						<span class="mui-icon mui-icon-home"></span>
						<span class="mui-tab-label">首页</span>
					</router-link>
					<router-link class="mui-tab-item" to="/member">
						<span class="mui-icon mui-icon-contact"></span>
						<span class="mui-tab-label">会员</span>
					</router-link>
					<router-link class="mui-tab-item" to="/shopcar">
						<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
						<span class="mui-tab-label">购物车</span>
					</router-link>
					<router-link class="mui-tab-item" to="/search">
						<span class="mui-icon mui-icon-search"></span>
						<span class="mui-tab-label">搜索</span>
					</router-link>
				</nav>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .app-container{
        padding-top: 40px;
				padding-bottom: 50px;
			overflow-x: hidden;
    }
	 .v-enter{ //进场动画的起点  在右边
   		 opacity:0;
   		 transform:translateX(100%);
  }
//  .v-enter-to,.v-leave{transform:translateX(0%);opacity:1;}进场动画的终点和离场动画的起点 都在他原本就该在的位置

  .v-leave-to{ //离场动画终点  向左
    
    transform:translateX(-100%);
    position:absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition:all 0.5s ease;
  }

</style>
