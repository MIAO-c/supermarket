<template>
  <div id="tabbarMain">
    <tabbar>
      <tent path="/home">
        <img slot="tent-icon" src="../../../assets/img/tabbar/home.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt />
        <div slot="tent-text" class="text">首页</div>
      </tent>
      <tent path="/category">
        <img slot="tent-icon" src="../../../assets/img/tabbar/category.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt />
        <div slot="tent-text" class="text">分类</div>
      </tent>
      <tent path="/cart">
        <img slot="tent-icon" src="../../../assets/img/tabbar/shopcart.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="tent-text" class="text">购物车</div>
      </tent>
      <tent path="/about">
        <img slot="tent-icon" src="../../../assets/img/tabbar/profile.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt />
        <div slot="tent-text" class="text">我的</div>
      </tent>
    </tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import tabbar from "@/components/common/tabbar/Tabbar"
import tent from "@components/common/tabbar/TabbarContent"

export default {
  name: "tabbarMain",
  components: {
    tabbar,
    tent
  }
};
</script>
