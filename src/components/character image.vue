<template>
  <div class="container">
    <!-- put char picture here andd.... their char icon yeah-->
    <img class=image 
    :src=charimage v-bind:alt="pic">
    <img class=icon
    :src=charsymbol v-bind:alt="pic">
  </div>
</template>

<script>
//need character symbol
export default {
  name: 'CharImage',
  props: {
    CharacterName: String
  },
  data:function(){
    return{
      charimage:require('@/assets/character/' + this.CharacterName + '.png'),
      charsymbol:require('@/assets/universal/type_' + 'detonator' + '.png')
    }

  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
  background-color: rgb(83, 78, 78);

  height: 80%;
  width: 60%;
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
@media only screen and (max-width: 900px) {
  .container{
    position: relative;
    background-color: rgb(83, 78, 78);

    height: 80%;
    width: 100%;
    float: left;
    margin-left: 10px;
  }
}
</style>
