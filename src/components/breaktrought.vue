<template>
  <div class="container"> 
    Breaktrought
    <ul v-for="index in brk" :key="index">
    <li>{{index}}</li>

    </ul>
  </div>
</template>

<script>


export default {

  name: 'breaktrought',

  data: function() {
    return {
      description:"first",
      charData:null,
      brk:['one','two','three','four','five','six']
    }
  },
  props: {
    CharacterName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  border-style: solid;
  margin:5px
}
</style>
