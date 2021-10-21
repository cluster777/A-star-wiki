<template>
    <div class="container">
        <h3>{{this.title}}</h3>
        <hr>
        <p v-html="this.content"></p>
    </div>
</template>
<script>
export default {
    name:"Container",
    props:{
        title:String,
        content:String
    }
}
</script>

<style scoped>
.container{
    margin: 10px 20px 0px 20px;
    background-color: rgb(61, 54, 54);
}
h3{
    margin: 0 0 0 0;
    padding-left:10px ;
}
p{
    margin: 0;
    padding:0 10px 10px 10px;
}
hr{
    margin:1px 0 5px 0;
}
</style>