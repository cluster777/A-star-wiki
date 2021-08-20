<template>
  
  <div class="container">
    
    <div class="content">
      {{name}} <div class=cd>CD:{{CD}}</div><hr>
      <div class="description">
        
        {{ActiveDescription}}
      </div>
      <div class=clearfix />
      <!--<div class="AoE">
        <img v-show=false :src=AoE class="image"/>
      </div>-->
      <div class=clearfix />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ActiveSkill',
  props: {
    CharacterName: String
  },
   data: function() {
    var chardata=require('@/assets/json/' + this.CharacterName + '.json')
    return{
      name:chardata.active_skill.name,
      ActiveDescription:chardata.active_skill.description,
      CD:chardata.active_skill.cooldown,
      AoE:chardata.active_skill.AoE //should be require(@/assets/universal/AoEname.png)
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  background-color: rgb(48, 44, 44);
  margin-bottom: 10px;
  width: 99%;
}
.content{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:15px;
  padding-right:15px ;
  width: 80%;
}
.description{
  float:left;
  width: 100%;
}
.container hr{
  margin:0px;
  padding: 0px;
  background-color: red;
  height:1px;
}
.AoE{
  float:right;
  border-style: solid;

  width:100px
}
.cd{
  float:right;
  background-color: rgb(77, 74, 74);
}
.preemptive{
  float:right;
  background-color: rgb(77, 74, 74);
}
</style>
