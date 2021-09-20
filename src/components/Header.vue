<template>
  <div class="containerx"> 
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
.containerx{
  background-color: rgb(31, 31, 31);
  width: 100%;
  overflow: auto;
  padding:20px;
}
.tittle{
  float:left

}

</style>
