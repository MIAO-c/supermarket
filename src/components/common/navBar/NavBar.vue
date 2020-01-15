<template>
  <div class="NavBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.NavBar{
    display: flex;
    height: 44px;  
    line-height: 44px;
    box-shadow: 0 1px 2px rgb(236, 236, 236);
    /* background: #ff5777;
    color: aliceblue; */
}
.left,.right{
    width: 60px;
    /* background: #f5c5ce; */
}
.center{
    flex: 1;
    text-align: center;
}
</style>
