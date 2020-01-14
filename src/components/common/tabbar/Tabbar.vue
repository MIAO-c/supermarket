<template>
  <div id="tabbar">
    <div class="tab">
      <tent>
        <img slot="tent-icon" src="../../../assets/img/tabbar/home.svg" alt="" />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="" />
        <div slot="tent-text" class="text">首页</div>
      </tent>
      <tent>
        <img slot="tent-icon" src="../../../assets/img/tabbar/category.svg" alt="" />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="" />
        <div slot="tent-text" class="text">分类</div>
      </tent>
      <tent>
        <img slot="tent-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="" />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="" />
        <div slot="tent-text" class="text">购物车</div>
      </tent>
      <tent>
        <img slot="tent-icon" src="../../../assets/img/tabbar/profile.svg" alt="" />
        <img slot="tent-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="" />
        <div slot="tent-text" class="text">我的</div>
      </tent>
    </div>
  </div>
</template>

<script>
import tent from "@/components/current/tabbar/Tabbar_content.vue";

export default {
  name: "tabbar",
  components: {
    tent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  height: 49px;
  width: 100%;

  background: #f1f1f1;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
}
</style>
