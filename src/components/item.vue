<template>
    <div class=container>
        <div class=left><img :src=itemImage></div>
        <div class="right">
            <div>{{this.itemName}}</div>
            <hr>
            <div v-if="this.value!=0">{{this.value}}({{this.value*2}})</div>
            <div>{{this.description}}</div>
            <hr>
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
    display: flex;
    text-align: justify;
    align-items:center;
}
img{
    margin:auto;
}
.right{
    padding-right: 20px;
}
</style>