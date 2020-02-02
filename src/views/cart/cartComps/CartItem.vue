<template>
<div class="box">
  <div class="cartitem">
    <yes @click.native="check" :nowcheck="cartitemcontent.checked"></yes>
    <div class="img">
      <img :src="cartitemcontent.img" alt />
    </div>
    <div class="text">
      <div class="title">{{cartitemcontent.title}}</div>
      <div class="desc">{{cartitemcontent.desc}}</div>
      <div class="price">
        <span class="newprice">￥{{cartitemcontent.newPrice}}</span>
        <span class="count">*{{cartitemcontent.count}}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import yes from "@/components/common/yes/Yes"
export default {
  name: "CartItem",
  components: {yes},
  props: {
    cartitemcontent: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
    return{}
  },
  methods: {
    check(){
      this.cartitemcontent.checked = !this.cartitemcontent.checked
      // console.log(this.cartitemcontent.checked);
      
    }
  },
};
</script>

<style scoped>
.cartitem{
  display: flex;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  height: 120px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgb(223, 223, 223);
}
.img{
  width: 35%;
  height: 100px;
  overflow: hidden;
  border-radius: 5px;
  margin:0 10px;
}
.text{
  width: 55%;
  line-height: 30px
}
.img img{
  width: 100%;
}
.title,.desc{
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(82, 82, 82);
  
}
.title{
  font-size: 14px;
}
.desc{
  font-size: 12px;
}
.newprice{
  color: #ff8198; 
}
.count{
  margin-left: 20px;
  font-size: 14px;
}
</style>