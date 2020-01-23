<template>
  <div class="detail">
    <tabbar></tabbar>
    <swiper :imgs="topimg"></swiper>
    <detailbase :gooddetail="goodDetail"></detailbase>
    <detailshop :shopdetail="shopDetail"></detailshop>
  </div>
</template>

<script>
import tabbar from "@/views/detail/detailComps/DetailTabbar";
import swiper from "@/views/detail/detailComps/DetailSwiper";
import detailbase from "@/views/detail/detailComps/DetailBase";
import detailshop from "@/views/detail/detailComps/DetailShopInfo";

import { getDetailData, goodDetail, shopDetail } from "@/network/detail";
import { log } from "util";

export default {
  name: "Detail",
  components: {
    tabbar,
    swiper,
    detailbase,
    detailshop
  },
  data() {
    return {
      iid: null,
      topimg: [],
      goodDetail: {},
      shopDetail: {}
    };
  },
  created() {
    this.iid = this.$route.params.id;
    getDetailData(this.iid).then(res => {
      this.topimg = res.result.itemInfo.topImages;
      // console.log(res);
      //  console.log(this.topimg);
      this.goodDetail = new goodDetail(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shopDetail = new shopDetail(res.result.shopInfo)
      console.log(this.goodDetail);
      console.log(this.shopDetail);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>