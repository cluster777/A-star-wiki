<template>
  
  <div class="container">
    <div v-for="i in 3" :key="i" class="Chain">
        
        <input type=button v-bind="options"
        :value=detail[0][i-1].cost
        v-on:click="OnChainChange(i-1)"
        v-show="this.detail[0][i-1].cost!=null"
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
          {{name}}
          <hr>
          {{description}}
        </div>
        <div class="AoE">
          <img :src="require('@/assets/universal/type_' + 'Detonator' + '.png')" class="image"/>
        </div>
        <div class=clearfix />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ChainCombo',
  props: {
    chardata: Object
  },
   data: function() {
    return{
      ascensiondesc:this.chardata.ascension,
      rarity:Number(this.chardata.rarity),
      faction:this.chardata.faction,
      name:this.chardata.chain.name,
      detail:this.chardata.chain.detail,
      //AoE:chardata.chain.detail.AoE,
      description:this.chardata.chain.detail[0][0].description,
      val:0,
      ascension:0
    }
   },
  methods:{
    OnChainChange(value){
      this.val=value
      this.description=this.detail[this.ascension][value].description
    },
    OnAscensionChange(asc){
      this.ascension=asc
      this.description=this.detail[asc][this.val].description

    },
    selectorstate(i){
      if (this.faction=='silent hunter' && this.rarity==3) return false
      else if(typeof this.ascensiondesc[i] !== 'undefined' &&( this.ascensiondesc[i].type=='Chain Combo')) return true
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chain{
  width:100%;
  height:10%;
}
.Chain input{
  float:left;
  padding: 8px;
  margin-left:5px;
  padding-left:10px;
  padding-right: 10px;
  padding-bottom:7px;
  border-style:none;
  border-bottom-style: solid;
  border-width: 3px;
  background-color:rgb(100, 94, 94) ;
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
  float:left;
  width: 50%;
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
