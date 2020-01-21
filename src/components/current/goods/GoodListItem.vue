<template>
  <div class="gooditem">
    <img :src="gooditem.show.img" @load="imgload"/>
    <div>
      <p>{{gooditem.title}}</p>
      <span class="price">￥{{gooditem.price}}</span>
      <span class="collect">收藏：{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgload(){
      //$bus事件总线
      this.$bus.$emit("imgload")
      
    }
  },
};
</script>

<style scoped>
.gooditem{
    width: 48%;
    /* border-radius: 10px ; */
    font-size: 14px;
    /* position: absolute; */
    margin: 10px 0;
    color: rgb(104, 104, 104);
}
.gooditem img{
    width: 100%;
    border-radius: 5px;
}
.gooditem div{
    margin-top: -10px;
    display: flex;
    flex-wrap: wrap;
    /* padding: 10px; */
    justify-content: space-around;
}
.gooditem div p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.gooditem div .price{
    color: #ff5777;
    font-weight:bold;
    font-size: 18px;
}
</style>