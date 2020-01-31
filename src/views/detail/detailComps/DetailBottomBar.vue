<template>
  <div class="bottom-bar">
    <div class="left">
      <span class="text">客服</span>

      <span class="text">店铺</span>

      <span class="text">收藏</span>
    </div>
    <div class="right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  computed: {
    // 对象写法可以自己命名
  },
  created() {
    // 每次刷新页面获取本地存储购物车数据
    // let list = JSON.parse(localStorage.getItem("cartList")) || [];
    // if (list) {
    //   this.$store.commit("setCartList", list);
    // }
  },
  methods: {}
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgb(255, 255, 255);
  box-shadow: 0 -1px 3px rgb(214, 214, 214);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left,.right{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
.cart,.buy{
  height: 50px;
  padding: 0 5px;

}
.cart{
  background: rgb(253, 55, 115);
}
</style>
