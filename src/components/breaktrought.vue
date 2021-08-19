<template>
  <div class="container"> 
    <h4>Breaktrought</h4>
    <hr>
    <ul v-for="item in breaktrought.description" :key="item">
      <li>{{item}}</li>

    </ul>
  </div>
</template>

<script>


export default {

  name: 'breaktrought',

  data: function() {
    return {
      description:"first"
    }
  },
  props: {
    breaktrought: Object
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
.container h4{
  margin:0px;
  padding: 0px;
}
.container hr{
  margin:0px;
  padding: 0px;
  background-color: red;
}
.container ul{
  margin-top:0px;
  margin-bottom: 5px;
  padding-left: 20px;
  
}
</style>
