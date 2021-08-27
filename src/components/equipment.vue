<template>
  
  <div class="container">
    <div v-for="i in [1,4,6,10]" :key="i" class="Chain" v-show="this.faction!='silent hunter'">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnChainChange(i-1)"/>
    </div>
    <div v-for="i in [3,2,1]" :key="i" class="ascension" v-show="this.faction!='silent hunter'">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnAscensionChange(i-1)"/>
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
    console.log(chardata.equip.description)
    return{
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
.ascension{
  width:50%;
  height:10%;
  background-color: aqua;
}
.ascension input{
  float:right
}
.Chain input{
  float:left;
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

</style>
