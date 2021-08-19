<template>
  
  <div class="container">
    <div v-for="i in 3" :key="i" class="Chain">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnChainChange(i)"/>
    </div>
    <div class=clearfix />
    <div class="content">
      
        <div class="description">
          {{description}}
        </div>
        <div class="AoE">
          <img :src="'/universal/type_detonator.png'" class="image"/>
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
      name:chardata.chaincombo.name,
      ActiveDescription:chardata.chaincombo.description,
      cost:chardata.chaincombo.cost,
      AoE:chardata.chaincombo.AoE //should be require(@/assets/universal/AoEname.png)
    }
   },
  methods:{
    OnChainChange(value){
      if(value==1){
        this.description="first"
      }
      else if(value==2){
        this.description="second"
      }
      else this.description="third"
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
  width: 80%;
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
