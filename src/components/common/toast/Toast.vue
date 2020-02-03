<template>
  <div class="toastbox" v-show="ifshow">{{message}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      ifshow: false
    };
  },
  methods: {
    isshow(message, timer = 2000) {
      this.message = message;
      this.ifshow = true;
      setTimeout(() => {
        this.message = "";
        this.ifshow = false;
      }, timer);
    }
  }
};
</script>

<style scoped>
.toastbox {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  color: rgb(253, 253, 253);
  border-radius: 3px;
}
</style>