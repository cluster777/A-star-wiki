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
  background-color: rgb(48, 44, 44);

  margin:10px
}
.container li{
  margin:0px;
  padding: 0px;
}
.container ul{
  margin-top:0px;
  margin-bottom: 5px;
  padding-left: 20px;
}
</style>
