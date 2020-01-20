<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>

    <scroll
      class="content"
      ref="backcontent"
      :probe-type="3"
      @scroll="getPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <homeswiper :banners="banners"></homeswiper>

      <homebanner :recommends="recommends"></homebanner>

      <homefeature></homefeature>

      <tabcontrol :titles="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-style"></tabcontrol>

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
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      nowGood: "pop",
      show: false
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeTabdata("pop");
    this.getHomeTabdata("new");
    this.getHomeTabdata("sell");
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
      // console.log(index)
    },
    backClick() {
      this.$refs.backcontent.scrollTo(0, 0, 500);
    },
    getPosition(position) {
      this.show = position.y < -1000;
    },
    loadMore() {
      this.getHomeTabdata(this.nowGood);
      this.$refs.backcontent.scroll.refresh();
      // console.log("fjkchedlriuielekfjd");
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

        this.$refs.backcontent.finishPullUp();
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
  padding-top: 44px;
}

.content {
  /* width: 100%;
  position: absolute;
  top: 44px;
  bottom: 49px; */
  /* height: calc(100% - 93px); */
  height: 480px;
  padding-top: 44px;
  padding-bottom: 49px;
  overflow: hidden;
}
.home-bc {
  /* width: 100%; */
  background-color: #ff8198;
  color: #fff;
  /* font-size: 14px; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.tab-style {
  position: sticky;
  top: 44px;
}
</style>
