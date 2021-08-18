<template>
  <div class="containerz"> 
    {{CharacterName}}
    {{charclass}}
    {{charfaction}}
    <div>
    char description
    {{description}}
    <breaktrought />
    </div>
  </div>
</template>

<script>
import breaktrought from './breaktrought.vue'


export default {

  name: 'Character_dash',
  components:{
    breaktrought
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

.containerz{
  background-color: rgb(48, 44, 44);
  border-style: solid;
  width: 99%;
}
</style>
