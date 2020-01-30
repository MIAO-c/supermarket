<template>
  <div class="detail">
    <tabbar></tabbar>
    <scroll class="content" ref="scrollcontent">
      <swiper :imgs="topimg"></swiper>
      <detailbase :gooddetail="goodDetail"></detailbase> 
      
      <detailshop :shop="shop"></detailshop>


      <detailimgs :images-info="imgsDetail"
                  @imgLoad="imgload"></detailimgs>
      
       <detailparam :param-info="paramsInfo"></detailparam> 

      <detailcomment :comment-info="commentInfo"></detailcomment>
      <goodslist :goods="recommendData"></goodslist>
    </scroll>
  </div>
</template>

<script>
import tabbar from "./detailComps/DetailTabbar";
import swiper from "@/views/detail/detailComps/DetailSwiper";
import detailbase from "@/views/detail/detailComps/DetailBase";
import detailshop from "@/views/detail/detailComps/DetailShopInfo";
import detailimgs from "@/views/detail/detailComps/DetailImagesInfo";
import detailcomment from "./detailComps/DetailCommentInfo";
import detailparam from "./detailComps/DetailParamInfo";

import goodslist from "@/components/current/goods/GoodList";

import scroll from "@/components/common/scroll/Scroll";

import { getDetailData,getRecommendData, goodDetail, shopDetail, GoodsParams } from "@/network/detail";
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
    goodslist
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
      recommendData:[]
    };
  },
  methods: {
    imgload(){
      this.$refs.scrollcontent.refresh();
      
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
      this.paramsInfo = new GoodsParams(res.result.itemParams.info, res.result.itemParams.rule || {});

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
    getRecommendData().then(res=>{
      this.recommendData = res.data.list
      // console.log(this.recommendData);
      
    })
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
  z-index: 9; 
  background: #ffffff;

}
</style>