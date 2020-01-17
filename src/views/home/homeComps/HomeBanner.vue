<template>
  <div class="hombanner">
    <div v-for="item in recommends" :key="item.item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
// import {Swiper, SwiperItem} from "@components/common/swiper/index"

export default {
  name: "HomeBanner",
  props: {
    recommends: {
      type: Array,
      //默认值（必须是函数）
      default() {
        return [];
      }
    }
  },
  components: {}
};
</script>

<style scoped>
.hombanner{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 10px 0 30px;
    border-bottom: 10px solid rgb(243, 243, 243);
    
    
}
.hombanner div a img{
    width: 70px;
    /* height: 50px; */
}

.hombanner div a{
    text-decoration: none;
    color: rgb(90, 90, 90);
    font-size: 14px;
}

.hombanner div a div{
    margin-top: 5px;
}
</style>