<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
     -->
     <router-view/>
    <tabbarMain></tabbarMain>
  </div>
</template>

<script>

// import tabbar from "@/components/common/tabbar/Tabbar"
import tabbarMain from "@/components/current/tabbar/TabbarMain"

export default {
  name: 'app',
  components: {
    tabbarMain
  }
}
</script>

<style>

@import "./assets/css/normalize.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
