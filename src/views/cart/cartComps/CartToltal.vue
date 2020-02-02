<template>
  <div class="toltalbox">
    <div>
      <yes></yes>
      <span class="sel">全选</span>
    </div>
    <div>
      <span class="sum">合计</span>
      <span class="money">￥{{tolsum}}</span>
    </div>
    <div class="mon">
        <span class="sum">去结算</span>
        <span class="coun">{{tolcount}}</span>
    </div>
  </div>
</template>

<script>
import yes from "@/components/common/yes/Yes";
import { mapGetters } from "vuex";

export default {
  name: "CartToltal",
  components: {
    yes
  },
  computed: {
    ...mapGetters(["tolcount","tolsum"])
  }
};
</script>

<style scoped>
.toltalbox {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgb(231, 231, 231);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 10px ;
  box-sizing: border-box;
}
.toltalbox div:nth-child(1) {
  display: flex;
}
.sel,
.sum {
  margin: 0 10px;
}
.money{
    font-size: 18px;
    font-weight: bold;
    color: rgb(255, 92, 51)
}
.mon{
    height: 40px;
    background: rgb(255, 120, 86);
    color: white;
    line-height: 40px;
    padding-right: 10px;
    box-sizing: border-box;
}
</style>
