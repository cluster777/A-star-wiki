<template>
  <div class="container"> 
    Ascension diff
    <ul v-for="index in brk" :key="index">
    <li>{{index}}</li>

    </ul>
  </div>
</template>

<script>


export default {

  name: 'ascension',

  data: function() {
    return {
      description:"first",
      charData:null,
      brk:['first','second','third']
    }
  },
  props: {
    CharacterName: String
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
  background-color: rgb(83, 78, 78);
  border-style: solid;
  width: 40%;
}
</style>
