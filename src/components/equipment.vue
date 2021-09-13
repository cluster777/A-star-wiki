<template>
  
  <div class="container">
    <div v-for="i in [1,4,6,10]" :key="i" class="Chain" v-show="this.faction!='silent hunter'">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnChainChange(i-1)"
        :class="{active :this.val==i-1,inactive :this.val!=i-1}" />
    </div>
    <div v-for="i in [1,2]" :key="i" class="ascension" v-show="this.faction!='silent hunter'">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + i + '.png')"
        v-on:click="OnAscensionChange(i-1)"
        v-show="i==1 || selectorstate(i-1)" 
        :class="{active :this.ascension==i-1, inactive:this.ascension!=i-1}" />
    </div>
    <div class="ascension" v-if="this.faction!='silent hunter' && this.rarity>3">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 3 + '.png')"
        v-on:click="OnAscensionChange(2)"
        v-show="selectorstate(2)"
        :class="{active :this.ascension==2, inactive:this.ascension!=2}" />
    </div>
    <div class=clearfix />
    <div class="content">
      
        <div class="description">
          {{name}} :: {{passive}}
          <hr>
          {{description}}
        </div>
        
        <div class=clearfix />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Equipment',
  props: {
    CharacterName: String
  },
   data: function() {
    var chardata=require('@/assets/json/' + this.CharacterName + '.json')
    return{
      ascensiondesc:chardata.ascension,
      rarity:Number(chardata.rarity),
      faction:chardata.faction,
      name:chardata.equip.name,
      passive:chardata.equip.passive,
      detail:chardata.equip.description,
      //AoE:chardata.chain.detail.AoE,
      description:chardata.equip.description[0][0],
      ascension:0,
      val:0
    }
   },
  methods:{
    OnChainChange(value){
      this.val=value
      this.description=this.detail[this.ascension][value]
    },
    OnAscensionChange(asc){
      this.ascension=asc
      this.description=this.detail[asc][this.val]

    },
    selectorstate(i){
      if (this.faction=='silent hunter' && this.rarity==3) return false
      else if(typeof this.ascensiondesc[i] !== 'undefined' &&( this.ascensiondesc[i].type=='Equipment')) return true
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chain{
  width:50%;
  height:10%;
  background-color: aqua;
}
.Chain input{
  float:left;
  padding: 8px;
  padding-left:10px;
  padding-right: 10px;
  margin-left:5px;
  border-style:none;
  border-bottom-style: solid;
  background-color:rgb(100, 94, 94) ;
  border-width: 3px;
  color:whitesmoke;
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
.container{
  background-color: rgb(48, 44, 44);;
  margin-bottom: 10px;
  width: 99%;
}
hr{
  margin-top: 2px;
  margin-bottom:5px;
}
h4{
  margin:0;
}
.content{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:15px;
  padding-right:15px ;
  
}
.description{

  width: 100%;
}
.AoE{
  float:right;
  border-style: solid;

  width:100px
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.active{
    border-bottom-color: rgb(208, 255, 0);
}
.inactive{
   border-bottom-color:rgb(48, 44, 44) ;
}
</style>
