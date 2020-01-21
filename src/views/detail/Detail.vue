<template>
  <div class="detail">
      <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/views/detail/detailComps/Tabbar";

export default {
  name: "Detail",
  components:{
      tabbar
  },
  data() {
    return {
      iid: null
    };
  },
  created(){
      this.iid=this.$route.params.id
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>