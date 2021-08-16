<template>
  <div class="container"> 
    {{CharacterName}}
    {{charclass}}
    {{charfaction}}
    <div>
    char description
    {{description}}
    <breaktrought />
    <ascension />
    </div>
  </div>
</template>

<script>
import breaktrought from './breaktrought.vue'
import ascension from './ascension.vue'

export default {

  name: 'Character_dash',
  components:{
    breaktrought,
    ascension
  },
  data: function() {
    return {
      description:"first",
      charData:null
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
  border-style: solid;
  width: 40%;
}
</style>
