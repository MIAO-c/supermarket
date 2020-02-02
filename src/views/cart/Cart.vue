<template>
  <div class="cart">
    <navbar class="nav">
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <cartlist :content="content"></cartlist>
    <carttoltal></carttoltal>
  </div>
</template>

<script>
import navbar from "@/components/common/navBar/NavBar";
import cartlist from "@/views/cart/cartComps/CartList";
import carttoltal from "@/views/cart/cartComps/CartToltal";

import { mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    navbar,
    cartlist,
    carttoltal
  },
  computed: {
    ...mapGetters({
      length: "cartlength",
      content: "cartcontent"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  background-color: #ff8198;
  color: #fff;
}
</style>