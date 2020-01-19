<template>
  <div ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data(){
      return{
          scroll : null
      }
  },
  mounted(){
      const scroll = new BScroll(this.$refs.wrapper,{
          click:true
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>