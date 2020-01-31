<template>
  <div class="BackTop">
      <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .BackTop{
        position: fixed;
        bottom: 50px;
        right: 5px;
        z-index: 9;
    }
    img{
        width: 45px;
    }
</style>