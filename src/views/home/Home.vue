<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>

    <homeswiper :banners="banners"></homeswiper>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from "@/components/common/navBar/NavBar"

import {getHomeMultidata} from "@/network/home"

import homeswiper from "./homeComps/HomeSwiper"




export default {
  name: 'home',
  components: {
    navbar,homeswiper
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


.home-bc{
  background-color: #ff8198;
  color: #fff;
  /* font-size: 14px; */
}
</style>
