<template>
  <div class="containerz"> 
    <h2>{{chardata.charname}}</h2>
    <hr>
    <img class="faction-icon" :src=charfaction />

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
    CharacterName: String
  },
  data: function() {
    var chardata=require('@/assets/json/' + this.CharacterName + '.json')
    console.log(chardata.charname)
    return {
      description:"first",
      chardata,
      charfaction:require('@/assets/universal/' + chardata.faction + '.png'),
      charclass:require('@/assets/universal/type_' + chardata.class + '.png'),

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
  padding-top: 20px ;
  padding-left: 10px;
  margin-bottom: 0px;
}
.containerz hr{
  margin-top:30px;
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
  margin-top:5px;

}

</style>
