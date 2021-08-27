<template>
  
  <div class="container">
    <div v-for="i in 3" :key="i" class="Chain">
        
        <input type=button v-bind="options"
        :value=detail[0][i-1].cost
        v-on:click="OnChainChange(i)"/>
    </div>
    <div v-for="i in [3,2,1]" :key="i" class="ascension" v-show="this.faction!='silent hunter'">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnAscensionChange(i-1)"/>
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
    CharacterName: String
  },
   data: function() {
    var chardata=require('@/assets/json/' + this.CharacterName + '.json')
    return{
      faction:chardata.faction,
      name:"placeholder",
      detail:chardata.chain.detail,
      //AoE:chardata.chain.detail.AoE,
      description:chardata.chain.detail[0][0].description,
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

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chain{
  width:100%;
  height:10%;
  background-color: aqua;
}
.Chain input{
  float:left;
}
.ascension{
  width:50%;
  height:10%;
  background-color: aqua;
}
.ascension input{
  float:right
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

</style>
