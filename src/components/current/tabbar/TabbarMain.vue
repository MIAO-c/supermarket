<template>
  <tabbar>
      <tend path="/home">
        <img slot="tent-icon" src="../../../assets/img/tabbar/home.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt />
        <div slot="tent-text" class="text">首页</div>
      </tend>
      <tend path="/category">
        <img slot="tent-icon" src="../../../assets/img/tabbar/category.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt />
        <div slot="tent-text" class="text">分类</div>
      </tend>
      <tend path="/cart">
        <img slot="tent-icon" src="../../../assets/img/tabbar/shopcart.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="tent-text" class="text">购物车</div>
      </tend>
      <tend path="/about">
        <img slot="tent-icon" src="../../../assets/img/tabbar/profile.svg" alt />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt />
        <div slot="tent-text" class="text">我的</div>
      </tend>
  </tabbar>
</template>

<script>

import tabbar from "@/components/common/tabbar/Tabbar"
import tend from "@/components/common/tabbar/TabbarContent"

export default {
  name: 'TabbarMain',
  components:{
      tend,
      tabbar
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
