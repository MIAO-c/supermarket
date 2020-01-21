<template>
  <swiper>
    <swiperitem v-for="item in banners" :key="item.item">
      <a :href="item.link">
        <img :src="item.image" @load="swiperimgload" />
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
import swiperitem from "@/components/common/swiper/SwiperItem";
import swiper from "@/components/common/swiper/Swiper";

// import {Swiper, SwiperItem} from "@components/common/swiper/index"

export default {
  name: "HomeSwiper",
  data() {
    return {
      imgload: true
    };
  },
  props: {
    banners: {
      type: Array,
      //默认值（array,obj必须是函数）
      default() {
        return [];
      }
    }
  },
  components: {
    swiperitem,
    swiper
  },
  methods: {
    swiperimgload() {
      if (this.imgload) {
        this.$emit("swiperimgload");
        this.imgload = false;
      }
    }
  }
};
</script>

<style scoped>
</style>