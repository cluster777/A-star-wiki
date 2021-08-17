<template>
  <div class="container">
    <!-- put char picture here andd.... their char icon yeah-->
    <img class=image 
    :src="'/character/' + CharacterName + '.png'" v-bind:alt="pic">
    <img class=icon
    :src="'/universal/type_' + 'detonator' + '.png'" v-bind:alt="pic">
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
  position: relative;
  background-color: rgb(83, 78, 78);

  height: 80%;
  width: 52%;
  float: left;
  margin-left: 10px;
}
.image{
  width:100%
}
.icon{
  position: absolute;
  top:0px;
  left:0px;
  width:20%;
}
</style>
