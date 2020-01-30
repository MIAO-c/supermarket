<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <tabbarMain></tabbarMain>
  </div>
</template>

<script>
// import tabbar from "@/components/common/tabbar/Tabbar"
import tabbarMain from "@/components/current/tabbar/TabbarMain";

export default {
  name: "app",
  components: {
    tabbarMain
  }
};
</script>

<style>
@import "./assets/css/normalize.css";
</style>
