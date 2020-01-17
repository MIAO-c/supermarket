<template>
<div class="GoodList">
    <div v-for="item in goods" :key="item.item">
        <goodslistitem :gooditem="goods.item"></goodslistitem>
    </div>
</div>
</template>

<script>

import goodslistitem from "./GoodsListItem";


export default {
    name:GoodList,
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodslistitem
    }
}
</script>

<style scoped>

</style>