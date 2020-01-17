<template>
    <div class="goods">
        <a :href="gooditem.link">
            <img :src="gooditem.show.img" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name:GoodsList,
    props:{
        gooditem:{
            type:Object,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>