<template>
  <div id="home">
    <navbar class="home-bc">
      <div slot="center">购物街</div>
    </navbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from "@/components/common/navBar/NavBar"


export default {
  name: 'home',
  components: {
    navbar
  }
}
</script>


<style scoped>


.home-bc{
  background-color: #ff8198;
  color: #fff;
  /* font-size: 14px; */
}
</style>
