<template>
  <div class="containerx"> 
    <div class=tittle>
      Page title pls
    </div>
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
  border-style: solid;
  width: 100%;
  overflow: auto;
}
.tittle{
  float:left

}

</style>
