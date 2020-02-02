<template>
  <div class="cartlist">
    <scroll class="content" ref="scrollcontent">
        <cartitem v-for="item in content" :key="item.item" :cartitemcontent="item"></cartitem>
    </scroll>
  </div>
</template>

<script>
import cartitem from "@/views/cart/cartComps/CartItem";

import scroll from "@/components/common/scroll/Scroll";


export default {
  name: "CartList",
  components: {
      scroll,cartitem
  },
  props:{
      content:{
          type:Array,
          default(){
              return []
          }
      }
  },
  mounted(){
    this.$refs.scrollcontent.refresh()
  }
};
</script>

<style scoped>
.cartlist{
    height: 100vh;
}
.content{
    height: calc(100% - 134px);
    overflow: hidden;
    margin-bottom: 90px;
}
</style>