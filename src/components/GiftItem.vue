<template>
    <div class=container>
        <div class=left><img :src=itemImage></div>
        <div class="right">
            <div>{{this.itemName}}</div>
            <div>{{this.value}}({{this.value*2}})</div>
            <div>{{this.description}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        itemName:String,
        value:Number,
        description:String
    },
    data: function(){
        return{
            itemImage:require('@/assets/universal/type_' + 'Detonator' + '.png')
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    border-bottom-style: solid;
    display: flex;
}
</style>