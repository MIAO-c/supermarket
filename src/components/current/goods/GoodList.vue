<template>
  <div class="GoodList">
    <goodlistitem v-for="item in goods" :key="item.item" :gooditem="item">

    </goodlistitem>
  </div>
</template>

<script>
import goodlistitem from "./GoodListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
      return{

      }
  },
  components: {
    goodlistitem
  },

}
</script>

<style scoped>
.GoodList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: space-around;
    box-sizing: border-box;
}
</style>