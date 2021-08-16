<template>
  <div class="container">
    the image bruh
    <!-- put char picture here andd.... their char icon yeah-->
    {{charimage}}
    {{charicon}}
  </div>
</template>

<script>
export default {
  name: 'CharImage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  border:solid;
  height: 80%;
  width: 40%;
  float: left;
}
</style>
