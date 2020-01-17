<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>

    <homeswiper :banners="banners"></homeswiper>

    <homebanner :recommends="recommends"></homebanner>

    <homefeature></homefeature>

    <tabcontrol :titles="['流行', '新款', '精选']" class="tab-style"></tabcontrol>

    <goodslist :goods="goods['pop'].list"></goodslist>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from "@/components/common/navBar/NavBar";
import tabcontrol from "@/components/current/tabControl/TabControl";
import goodslist from "@/components/current/goods/GoodList";

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
      }
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeTabdata("pop");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res.data.banner.list)
      });
    },
    getHomeTabdata(type) {
      const page = this.goods[type].page++;
      getHomeTabdata(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        // console.log(res)
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
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
  top: 40px;
}
</style>
