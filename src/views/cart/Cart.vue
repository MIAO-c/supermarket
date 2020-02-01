<template>
  <div class="cart">
    <navbar>
      <div slot="center">购物车({{length}})</div>
    </navbar>
  </div>
</template>

<script>
import navbar from "@/components/common/navBar/NavBar";

import {mapGetters} from "vuex"

export default {
  name: "cart",
  components: {
    navbar
  },
  computed:{
    ...mapGetters({
      length:'cartlength'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>