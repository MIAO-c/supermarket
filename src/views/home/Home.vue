<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      :class="{'tab-style':true,'fixed':tabcontrolfixed}"
      v-show="tabcontrolfixed"
      ref="tabcontrol1"
    ></tabcontrol>

    <scroll
      class="content"
      ref="backcontent"
      :probe-type="3"
      @scroll="getPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- //@pullingUp="loadMore" -->
      <homeswiper :banners="banners" @swiperimgload="swiperimgload"></homeswiper>

      <homebanner :recommends="recommends"></homebanner>

      <homefeature></homefeature>

      <tabcontrol
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        class="tab-style"
        ref="tabcontrol2"
      ></tabcontrol>

      <goodslist :goods="goods[nowGood].list"></goodslist>
    </scroll>

    <backtop @click.native="backClick" v-show="show"></backtop>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from "@/components/common/navBar/NavBar";
import tabcontrol from "@/components/current/tabControl/TabControl";
import goodslist from "@/components/current/goods/GoodList";
import scroll from "@/components/common/scroll/Scroll";
import backtop from "@/components/common/backTop/BackTop";

import { getHomeMultidata, getHomeTabdata } from "@/network/home";

import { debounce } from "@/components/common/utils/utils";

import homeswiper from "./homeComps/HomeSwiper";
import homebanner from "./homeComps/HomeBanner";
import homefeature from "./homeComps/HomeFeature";
// import { log } from 'util';

export default {
  name: "home",
  components: {
    navbar,
    tabcontrol,
    goodslist,
    scroll,
    backtop,

    homeswiper,
    homebanner,
    homefeature
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      nowGood: "pop",
      show: false,
      settop: 0,
      tabcontrolfixed: false,
      scrolly: 0
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeTabdata("pop");
    this.getHomeTabdata("new");
    this.getHomeTabdata("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.backcontent.refresh, 50);
    this.$bus.$on("imgload", () => {
      refresh();
    });
  },
  activated(){
    this.$refs.backcontent.scrollTo(0, this.scrolly, 0)
    this.$refs.backcontent.refresh()
  },
  deactivated(){
    this.scrolly = this.$refs.backcontent.scroll.y
    // console.log(this.scrolly);
    
  },
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.nowGood = "pop";
          break;
        case 1:
          this.nowGood = "new";
          break;
        case 2:
          this.nowGood = "sell";
          break;
      }
      this.$refs.tabcontrol1.clickIndex = index;
      this.$refs.tabcontrol2.clickIndex = index;
      // console.log(this.$refs.tabcontrol1.clickIndex)
    },
    backClick() {
      this.$refs.backcontent.scrollTo(0, 0, 500);
    },
    getPosition(position) {
      this.show = position.y < -800;
      this.tabcontrolfixed = position.y < -this.settop;
    },
    loadMore() {
      this.getHomeTabdata(this.nowGood);
      // this.$refs.backcontent.scroll.refresh();
      // console.log("fjkchedlriuielekfjd");
      this.$refs.backcontent.finishPullUp();
    },
    swiperimgload() {
      this.settop = this.$refs.tabcontrol2.$el.offsetTop;
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res.data.banner.list)
      });
    },
    getHomeTabdata(type) {
      const page = this.goods[type].page + 1;
      getHomeTabdata(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        // console.log(res.data.list)
      });
    }
  }
};
</script>

<style scoped>
#home {
  /* position: relative;
  width: 100%; */
  height: 1vh;
  /* padding-top: 44px; */
}

.content {
  /* width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px; */
  /* height: calc(100% - 93px); */
  height: 480px;
  /* padding-top: 44px; */
  padding-bottom: 49px;
  overflow: hidden;
}
.home-bc {
  /* width: 100%; */
  background-color: #ff8198;
  color: #fff;
  /* font-size: 14px; */
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 9; */
}

.tab-style {
  position: sticky;
  top: 44px;
}

.fixed {
  position: fixed;
  top: 43px;
  left: 0;
  z-index: 9;
}
</style>
