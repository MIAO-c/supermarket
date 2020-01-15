<template>
  
    <div class="tab"></div>
  
</template>

<script>

export default {
  name: "tabbar",
  components: {
    // tent
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
