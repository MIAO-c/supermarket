<template>
  <div class="tend" @click="tentClick">
    <div v-if="!actived">
      <slot name="tent-icon"></slot>
    </div>
    <div v-else>
      <slot name="tent-icon-active"></slot>
    </div>
    <div :class="{active: actived}">
      <slot name="tent-text"></slot>
    </div>
  </div>
</template>

<script>
// import { log } from 'util'
export default {
  name: "tend",
  props: {
    path: String
  },
  data() {
    return {};
  },
  computed: {
    actived() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    tentClick() {
      if(this.$route.path.indexOf(this.path) == -1){
        this.$router.replace(this.path);
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 24px;
  height: 24px;
  /* vertical-align: middle; */
}
.text {
  /* color: #555; */
  font-size: 12px;
}
.active {
  color: rgb(252, 77, 115);
}
</style>