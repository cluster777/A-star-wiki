<template>
  <div class="containerz">
    <div class="title-container">
      <div class="codename"><h2>{{chardata.name}}</h2></div>
      <div class="realname"><h3>{{chardata.realName}}</h3></div>
    </div>
    <hr>
    <img v-show="this.faction!='silent hunter'" class="faction-icon" :src=charfaction />

    <img class="class-icon" :src=charclass>
    <div class="content-description">
    {{description}}
    <breaktrought :breaktrought=chardata.breaktrought :key=CharacterName />
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
  props: {
    chardata: Object
  },
  data: function() {
    return {
      description:this.chardata.description,
      faction:this.chardata.faction,
      charfaction:require('@/assets/universal/' + this.chardata.faction + '.png'),
      charclass:require('@/assets/universal/type_' + this.chardata.class + '.png'),

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.containerz{
  position:relative;
  background-color: rgb(48, 44, 44);

  width: 99%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top:0px;
}
.containerz h2{
  padding-left: 10px;
  margin-bottom: 0px;
}
.containerz h3{
  color:rgb(168, 167, 167);
  padding-top:5px;
  padding-left: 10px;
  margin-bottom: 0px;
}
.containerz hr{
  margin-top:30px;
}
.title-container{
  padding:0;
  margin: 0;
  display: flex;
  flex-direction: row;
}
.class-icon{
  position:absolute;
   background-color: rgb(48, 44, 44);
  border-style: solid;
  right:10px;
  top:10px;
  width:80px;
  height:80px;
}
.faction-icon{
  position: absolute;
  border-style: solid;
  background-color:rgb(48, 44, 44) ;
  top:50px;
  width: 30px;
  height:30px;
  left :20px ;
}
.content-description{
  padding-left:10px;
  padding-right: 20px;
  margin-top:20px;
  text-align: justify;
}

</style>
