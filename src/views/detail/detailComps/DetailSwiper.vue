<template>
  <swiper class="swiperstyle">
    <swiperitem v-for="item in imgs" :key="item">
      <img :src="item"/>
    </swiperitem>
  </swiper>
</template>

<script>
import swiperitem from "@/components/common/swiper/SwiperItem";
import swiper from "@/components/common/swiper/Swiper";

export default {
  name: "DetailSwiper",
  components: {
    swiperitem,
    swiper
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
      
  },
};
</script>

<style scoped>
img{
    margin-top: -100px;
}
.swiperstyle{
    height: 250px;
    overflow: hidden;
}
</style>