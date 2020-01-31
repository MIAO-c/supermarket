<template>
  <div class="detail">
    <tabbar @titleclick="titleclick" ref="tabbarr"></tabbar>
    <backtop @click.native="backClick"></backtop>
    
    <scroll class="content" ref="scrollcontent" :probe-type="3" @scroll="getdetailPosition">
      <swiper :imgs="topimg"></swiper>
      <detailbase :gooddetail="goodDetail" ref="one"></detailbase>

      <detailshop :shop="shop"></detailshop>

      <detailimgs :images-info="imgsDetail" @imgLoad="imgload"></detailimgs>

      <detailparam :param-info="paramsInfo" ref="two"></detailparam>

      <detailcomment :comment-info="commentInfo" ref="three"></detailcomment>
      <goodslist :goods="recommendData" ref="four"></goodslist>
    </scroll>
    
    <btabbar></btabbar>
  </div>
</template>

<script>
import tabbar from "@/views/detail/detailComps/DetailTabbar";
import swiper from "@/views/detail/detailComps/DetailSwiper";
import detailbase from "@/views/detail/detailComps/DetailBase";
import detailshop from "@/views/detail/detailComps/DetailShopInfo";
import detailimgs from "@/views/detail/detailComps/DetailImagesInfo";
import detailcomment from "@/views/detail/detailComps/DetailCommentInfo";
import detailparam from "@/views/detail/detailComps/DetailParamInfo";
import btabbar from "@/views/detail/detailComps/DetailBottomBar";

import goodslist from "@/components/current/goods/GoodList";

import scroll from "@/components/common/scroll/Scroll";
import backtop from "@/components/common/backTop/BackTop";

import {
  getDetailData,
  getRecommendData,
  goodDetail,
  shopDetail,
  GoodsParams
} from "@/network/detail";
import { debounce } from "@/components/common/utils/utils";

import { log } from "util";

export default {
  name: "Detail",
  components: {
    tabbar,
    swiper,
    detailbase,
    detailshop,
    detailimgs,
    scroll,
    detailcomment,
    detailparam,
    btabbar,

    goodslist,
    backtop
  },
  data() {
    return {
      iid: 1,

      topimg: [],
      goodDetail: {},
      shop: {},
      imgsDetail: {},
      paramsInfo: {},
      commentInfo: {},
      recommendData: [],

      themetypes: []
    };
  },
  methods: {
    getdetailPosition(position) { //getdetailPosition是scroll vue文件中一触发滚动事件就发射scroll事件和传值position
      // console.log(position.y);
      for (let i = 0; i < this.themetypes.length; i++) {
        if (this.$refs.tabbarr.clickIndex != i &&  //当前index与之前相符则不继续执行，防止每滚动一点就执行函数
        (i < this.themetypes.length-1 && -position.y >= this.themetypes[i] && -position.y < this.themetypes[i + 1] 
            || i == this.themetypes.length-1 && -position.y >= this.themetypes[i])) {
            this.$refs.tabbarr.clickIndex = i
            console.log(i);
            
        }
      }
    },

    titleclick(index) {
      this.$refs.scrollcontent.scrollTo(0, -this.themetypes[index], 500);
    },
    imgload() {
      this.$refs.scrollcontent.refresh();

      // 等图片加载完成，获取个区域位置
      this.themetypes.push(0);
      this.themetypes.push(this.$refs.two.$el.offsetTop);
      this.themetypes.push(this.$refs.three.$el.offsetTop);
      this.themetypes.push(this.$refs.four.$el.offsetTop);
      // console.log(this.themetypes);
    },
    backClick() {
      this.$refs.scrollcontent.scrollTo(0, 0, 500);
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scrollcontent.refresh, 50);
    this.$bus.$on("detailimgload", () => {
      refresh();
    });
  },

  created() {
    this.iid = this.$route.query.iid;
    getDetailData(this.iid).then(res => {
      // console.log(res);
      this.topimg = res.result.itemInfo.topImages;
      this.imgsDetail = res.result.detailInfo;
      this.paramsInfo = new GoodsParams(
        res.result.itemParams.info,
        res.result.itemParams.rule || {}
      );

      //获取评论数据
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0] || {};
      }

      //  console.log(this.topimg);
      this.goodDetail = new goodDetail(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = new shopDetail(res.result.shopInfo);
      // console.log(this.goodDetail);
      // console.log(this.shop);
    });
    getRecommendData().then(res => {
      this.recommendData = res.data.list;
      // console.log(this.recommendData);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  height: 100vh;
}

.content {
  height: calc(100% - 44px);
  position: relative;
  overflow: hidden;
  z-index: 2;
  background: #ffffff;
}
</style>