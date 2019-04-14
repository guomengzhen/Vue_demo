import VueRouter from 'vue-router'

// 引入路由组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import MemberContainer from "../components/tabbar/MemberContainer.vue";
import ShopcarContainer from "../components/tabbar/ShopcarContainer.vue";
import SearchContainer from "../components/tabbar/SearchContainer.vue";

import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import PhotoList from '../components/photo/photoList.vue'
import PhotoInfo from '../components/photo/photInfo.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsDesc from "../components/goods/GoodsDesc.vue"
import GoodsComment from '../components/goods/GoodsComment.vue'

var router = new VueRouter({
  routes: [
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer },
    { path: "/", redirect: "/home" },
    //home页面下的组件
    { path: "/home/newslist", component: NewsList },
    { path: "/home/newsinfo/:id", component: NewsInfo }, //如果要传参，路由这里也要设置参数占位符
    // 图片页
    { path: "/home/photolist", component: PhotoList },
    { path: "/home/photoinfo/:id", component: PhotoInfo },
    //商品页
    { path: "/home/goodslist", component: GoodsList },
    { path: "/home/goodsinfo/:id", component: GoodsInfo, name: "goodsinfo" },
    { path: "/home/goodsdesc/:id", component: GoodsDesc, name: "goodsdesc" },
    { path: "/home/goodscomment/:id", component: GoodsComment, name: "goodscomment" }
  ],
  linkActiveClass: "mui-active"
});

export default router