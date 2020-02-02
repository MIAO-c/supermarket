<template>
  <div class="box">
    <div :class="{checkbox:nowcheck}"></div>
  </div>
</template>

<script>
export default {
  name: "Yes",
  components: {},
  props: {
    nowcheck: Boolean,
    default: true
  }
};
</script>

<style scoped>
.checkbox {
  width: 100%;
  height: 100%;
  background: #ff8198;
}
.box {
  width: 15px;
  height: 15px;
  border: 1px solid #eee;
  background: white;
}
</style>