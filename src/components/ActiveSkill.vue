<template>
  
  <div class="container">
    <div v-for="i in [1,2]" :key="i" class="ascension" v-show="this.faction!='silent hunter'">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + i + '.png')"
        v-on:click="OnAscensionChange(i-1)"
        v-show="i==1 || selectorstate(i-1)" 
        :class="{active :this.ascension==i-1, inactive:this.ascension!=i-1}" />
    </div>
    <div class="ascension" v-if="this.faction=='silent hunter' || this.rarity>3">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 3 + '.png')"
        v-on:click="OnAscensionChange(2)"
        v-show="selectorstate(2)"
        :class="{active :this.ascension==2, inactive:this.ascension!=2}" />
    </div>
    <div class="clearfix" />
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
    console.log(chardata.ascension)
    return{
      faction:chardata.faction,
      ascensiondesc:chardata.ascension,
      rarity:Number(chardata.rarity),
      name:"placeholder",
      detail:chardata.skill.description,
      ActiveDescription:chardata.skill.description[0],
      CD:chardata.skill.cd,
      ascension:0
      //AoE:chardata.skill.AoE //should be require(@/assets/universal/AoEname.png)
    }
   },
   methods:{
     OnAscensionChange(asc){
      this.ascension=asc
      this.ActiveDescription=this.detail[asc]
    },
    selectorstate(i){
      if (this.faction=='silent hunter' || this.rarity==3) return false
      else if(typeof this.ascensiondesc[i] !== 'undefined' &&( this.ascensiondesc[i].type=='Active Skill')) return true
      else return false
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
  padding-top:0px;
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
.ascension{
  width:100%;
  height:10%;
  background-color: rgb(48, 44, 44);
}
.ascension img{
  width: 45px;
  height: 30px;
  margin-left:10px;
  float:left;
  border-style: none;
  border-bottom-style: solid;
  background-color: rgb(73, 69, 69);
  border-width: 3px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.active{
    border-color: rgb(208, 255, 0);
  }
.inactive{
  border-color:rgb(48, 44, 44) ;
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
