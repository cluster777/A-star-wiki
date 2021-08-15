<template>
  <div class="container"> 
      Page title pls
    <!-- header header-->
    <navbar />
  </div>
</template>

<script>
import navbar from './navbar.vue'

export default {

  name: 'Header',
  components:{
    navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chain{
  width:100%;
  height:10%;
  background-color: aqua;
}
.Chain input{
  float:left;
}
.container{
  border-style: solid;
  width: 40%;
}
</style>
