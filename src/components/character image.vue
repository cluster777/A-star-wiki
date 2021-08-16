<template>
  <div class="container">
    the image bruh
    <!-- put char picture here andd.... their char icon yeah-->
    <img class=image 
    :src="'/character/' + CharacterName + '.png'" v-bind:alt="pic">
    {{CharacterName}}
  </div>
</template>

<script>

export default {
  name: 'CharImage',

  props: {
    CharacterName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  border:solid;
  height: 80%;
  width: 53%;
  float: left;
}
.image{
  width:100%
}
</style>
