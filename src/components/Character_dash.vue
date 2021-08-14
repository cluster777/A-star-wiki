<template>
  <div class="container"> 
    {{charname}}
    {{charclass}}
    <div>
    char description
    <breaktrought />
    <ascensionoverview />
    </div>
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
  border-style: solid;
  width: 40%;
}
</style>
