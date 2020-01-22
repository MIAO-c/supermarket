<template>
    <div>
        <div class="title">{{gooddetail.title}}</div>
        <span class="nowprice">{{gooddetail.realPrice}}</span>
        <span class="oldprice">{{gooddetail.oldPrice}}</span>

    </div>
</template>

<script>
export default {
    name:"DetailBase",
    props:{
        gooddetail:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style scoped>

</style>