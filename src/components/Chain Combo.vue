<template>
  
  <div class="container">
    <div v-for="i in 3" :key="i" class="Chain">
        
        <input type=button v-bind="options"
        :value=i
        v-on:click="OnChainChange(i)"/>
    </div>
    <div class=clearfix />
    <content>
        {{description}}
    </content>
    
  </div>
</template>

<script>
export default {
  name: 'ChainCombo',
  data: function() {
    return {
      description:"first",

    }
  },
  props: {
    msg: String
  },
  methods:{
    OnChainChange(value){
      console.log(value)
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
  background-color: rgb(83, 78, 78);
  border-style: solid;
  width: 99%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
