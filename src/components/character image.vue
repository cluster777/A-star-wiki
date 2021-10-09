<template>
  <div class="container" >
    <!-- put char picture here andd.... their char icon yeah-->
    <img class=icon
    :src=charsymbol v-bind:alt="pic">
    <img class=image 
    :src=charimage v-bind:alt="pic">
    <div class="selector" v-if="this.chardata.faction!='silent hunter'">
      <div>
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 0 + '.png')" 
        v-on:click="ascensionChange(0)" 
        :class="{active :this.ascension==0, inactive:this.ascension!=0}"/>
      </div>
      <div v-if="this.chardata.rarity!='3'">
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 3 + '.png')" 
        v-on:click="ascensionChange(3)"
        :class="{active :this.ascension==3, inactive:this.ascension!=3}"/>
      </div>
    </div>
    <div class="selector" v-else>
      <div>
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 3 + '.png')" 
        :class="{active :this.ascension==0, inactive:this.ascension!=0}"/>
      </div>
    </div>
  </div>
</template>

<script>
//need character symbol

export default {
  name: 'CharImage',
  props: {
    chardata: Object
  },
  data:function(){
    return{
      ascension:0,
      charimage:require('@/assets/character/' + this.chardata.name.toLowerCase() + '.png'),
      charsymbol:require('@/assets/icon/' + this.chardata.name.toLowerCase() + '.png'),

    }

  },
  methods:{
    imageupdate(value){
      console.log(value)
      import(`@/assets/json/${value}.json`).then((module) => {
        this.test.value = module.default
      })
    this.charimage=require('@/assets/character/' + value + '.png')
    this.charsymbol=require('@/assets/universal/type_' + 'Detonator' + '.png')
    },
    ascensionChange(value){
      this.ascension=value
      if(value==0)this.charimage=require('@/assets/character/' + this.chardata.name.toLowerCase() + '.png')
      else this.charimage=require('@/assets/character/' + this.chardata.name.toLowerCase() + '3.png')
    }
    
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
  background-color: rgb(83, 78, 78);

  height: 80%;
  width: 58.5%;
  float: left;
  margin-left: 10px;
}
.image{
  width:100%;
  height:auto;
  max-height:100vh;
  z-index: 10;
}
.icon{
  position: absolute;
  width:20%;
  z-index: 0;
}
.selector{
  position: absolute;
  top:50%;
  left:0px;
  background-color: rgb(48, 44, 44);
}
.selector img{
  width: 50px;
  
}
.active{
    background-color: rgb(208, 255, 0);
}
.inactive{
   background-color:rgb(48, 44, 44) ;
}
@media only screen and (max-width: 900px) {
  .container{
    position: relative;
    background-color: rgb(83, 78, 78);

    height: 80%;
    width: 100%;
    float: left;
    margin-left: 10px;
  }
  .image{
  width:100vw;
  height:auto;
  max-width: 100vw;
  }
  .selector img{
  width: 40px;
  
  }
}
</style>
