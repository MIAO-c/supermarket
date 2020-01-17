<template>
  <div class="tab">
    <div class="tab-item" 
         v-for="(item, index) in titles" 
         :key="item.item" 
         :class="{active:index == clickIndex}"
         @click="changeIndex(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
        clickIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
      changeIndex(index){
          this.clickIndex = index
      }
  }
};
</script>

<style scoped>
.tab{
    width: 100%;
    height: 45px;
    background: #ffffff;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: #525252;
    font-size: 15px;
}
.tab-item{
    padding: 5px;
}
.active{  
    color: #ff5777;
    border-bottom: 2px solid #ff5777;
}
</style>