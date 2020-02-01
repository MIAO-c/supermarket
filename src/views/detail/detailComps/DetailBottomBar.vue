<template>
  <div class="bottom-bar">
    <div class="left">
      <span class="text">客服</span>

      <span class="text">店铺</span>

      <span class="text">收藏</span>
    </div>
    <div class="right">
      <div class="cart" @click="cartclick">加入购物车</div>
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
    
  },
  methods: {
    cartclick(){
      this.$emit("cartclick")
    }
  }
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
.left span{
   padding: 0 10px;
}
.left span:nth-child(2){
 
  border-left: 1px solid rgb(194, 194, 194); 
  border-right: 1px solid rgb(194, 194, 194); 
}
.left,.right{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
.cart,.buy{
  flex: 1;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart{
  background: rgb(253, 55, 115);
  color: #ffffff;
}
.buy{
  background: #eedb31;
}
</style>
