<template>
  <div class="box">
    <div class="title">{{gooddetail.title}}</div>
    <div class="price">
      <span class="nowprice">￥{{gooddetail.realPrice}}</span>
      <span class="oldprice">{{gooddetail.oldPrice}}</span>
      <span class="discount" v-show="gooddetail.discount">{{gooddetail.discount}}</span>
    </div>
    <div class="pop">
      <!-- <span>{{gooddetail.columns[0]}}</span>
      <span>{{gooddetail.columns[1]}}</span>
      <span>{{gooddetail.services[3].name}}</span>-->
      <span v-for="item in gooddetail.columns" :key="item.item">{{item}}</span>
    </div>
    <div class="free">
      <span v-for="item in gooddetail.services" :key="item.item" class="freeitem">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBase",
  props: {
    gooddetail: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.box {
  box-sizing: border-box;
  padding: 15px 10px;
  border-bottom: 5px solid #dddddd;
  color: #6d6c6c;
}
.title {
  font-size: 18px;
  color: #474747;
  /* font-weight: bold; */
  font-weight: 500;
}
.nowprice {
  color: #ff5777;
  font-size: 22px;
  font-weight: bold;
}
.oldprice {
  text-decoration: line-through;
  padding: 0 15px;
  font-size: 14px;

}
.discount {
  padding: 2px 5px;
  border-radius: 10px;
  font-size: 14px;
  background-color: #ff5777;
  color: rgb(255, 255, 255);
}
.pop {
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.price,
.pop,
.free {
  margin-top: 10px;
}
.pop,.free {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;

}
.free img {
  width: 14px;
  margin-right: 2px;
}
.freeitem{
  font-size: 14px;
  margin: 3px 6px;
  color: #474747;

}
</style>