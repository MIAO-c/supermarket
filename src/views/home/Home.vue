<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>

    <homeswiper :banners="banners"></homeswiper>

    <homebanner :recommends="recommends"></homebanner>

    <homefeature></homefeature>

    <tabcontrol :titles="['流行','新款','精选']" class="tab-style"></tabcontrol>

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
    </ul><ul>
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
    </ul><ul>
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
    </ul><ul>
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
import navbar from "@/components/common/navBar/NavBar"
import tabcontrol from "@/components/current/tabControl/TabControl"

import {getHomeMultidata} from "@/network/home"

import homeswiper from "./homeComps/HomeSwiper"
import homebanner from "./homeComps/HomeBanner"
import homefeature from "./homeComps/HomeFeature"





export default {
  name: 'home',
  components: {
    navbar,tabcontrol,
    homeswiper,homebanner,homefeature
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res.data.banner.list)
    })
  }
}
</script>


<style scoped>

#home{
  padding-top: 44px;
}
.home-bc{
  /* width: 100%; */
  background-color: #ff8198;
  color: #fff;
  /* font-size: 14px; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.tab-style{
  position: sticky;
  top: 40px;
}
</style>
