<template>
  <navbar>
      <div slot="left" class="left" @click="goback">
          <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
          <span v-for="(item,index) in lists" :key="item.item" @click="nowclick(index)" :class="{active:index==clickIndex}">{{item}}</span>
      </div>
  </navbar>
</template>

<script>
import navbar from "@/components/common/navBar/NavBar";

export default {
  name: "Tabbar",
  data(){
      return{
          lists:["详情","参数","评价","推荐"],
          clickIndex:0
      }
  },
  methods: {
      nowclick(index){
          this.clickIndex = index
        //   console.log(this.clickIndex);   
      },
      goback(){
          this.$router.go(-1)
      }
  },
  components:{
      navbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: 20px;
    margin-top: 12px;
}
.center{
    display: flex;
    justify-content: space-around;
    font-size: 16px;

}
.active{
    color:#ff5777;
}
</style>