<template>
  
  <div class="container">
    <div v-for="i in 3" :key="i" class="Chain">
        
        <input type=button v-bind="options"
        :value=detail[i-1].cost
        v-on:click="OnChainChange(i)"/>
    </div>
    <div class=clearfix />
    <div class="content">
      
        <div class="description">
          {{name}}
          <hr>
          {{description}}
        </div>
        <div class="AoE">
          <img :src="'/universal/type_Detonator.png'" class="image"/>
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
      name:chardata.chain.name,
      detail:chardata.chain.detail[0],
      //AoE:chardata.chain.detail.AoE,
      description:chardata.chain.detail[0][0].description //should be require(@/assets/universal/AoEname.png)
    }
   },
  methods:{
    OnChainChange(value){
      if(value==1){
        this.description=this.detail[0].description
      }
      else if(value==2){
        this.description=this.detail[1].description
      }
      else this.description=this.detail[2].description
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
.container{
  background-color: rgb(48, 44, 44);;
  margin-bottom: 10px;
  width: 99%;
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
