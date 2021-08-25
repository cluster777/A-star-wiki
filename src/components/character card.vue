<template>
  <div class="container" >
    <!--the card container -->
    <div>
      <!--the image and icon container-->
      <div>
        <!-- char image full width full height -->
        <img class="mainchar" 
          :src=charcard v-bind:alt="pic">
        <div class="element">
          <!-- element float it left -->
          <img class="icon" 
            :src=element_main_image v-bind:alt="pic"><br>
          
          <img v-show="this.element_sub!='null'" class="icon" 
            :src=element_sub_image v-bind:alt="pic">
          
        </div>
        <div class="detail">
          <!--float it right-->
          <img class="icon main-detail" 
            :src=class_image v-bind:alt="pic"><br>
          <img v-show="this.faction!='silent hunter'" class="icon sub-detail" 
            :src=faction_image v-bind:alt="pic">
          
        </div>
      </div>
      
    </div>
    <div class=bottom-detail>
      <div>
      <!--rarity line-->
        <hr v-bind="options" :class=colorClass>
      </div>
      <div>
        {{this.char_name}}
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharCard',
  props: {
    char_name: String,
    element_main: String,
    element_sub: String,
    faction: String,
    class:String,
    char_image: String,
    char_rarity: Number 
  },
  data:function(){
    return{
      charcard:require(`@/assets/character_card/${this.char_name}.png`),
      element_main_image:require('@/assets/universal/'+this.element_main+'.png'),
      element_sub_image:require('@/assets/universal/'+this.element_sub+'.png'),
      faction_image:require('@/assets/universal/'+this.faction+'.png'),
      class_image:require('@/assets/universal/type_'+this.class+'.png'),
    }
  },
  computed:{
    colorClass(){
      if(this.char_rarity==6){
        return 'red'
      }
      else if(this.char_rarity==5){
        return 'yellow'
      }
      else if(this.char_rarity==4){
        return 'purple'
      }
      else if(this.char_rarity==3){
        return 'blue'
      }
      return 'blue'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  height:2px;
  margin-bottom: 0px;
}
.blue{
  background-color:#187cf5 ;
}
.purple{
  background-color:#a600ff ;
}
.yellow{
  background-color: #ffbb00;
}
.red{
  background-color:#f5341b ;
}
.container{
  border-style: solid;
  border-color: darkgrey ;
  width: 100%;
  position: relative;
  background-color: darkgray;
}
.icon{
  width:20px;
  height:20px;
  background-color: black;
}
.mainchar{
  position: absolute;
  width:80px;
  height:80px;
  padding:5px;
  z-index:2;
}
.element{
  position:absolute;
  top:5px;
  left:5px;
  float:left;
  z-index: 10;
}
.detail{
  position: absolute;
  float: right;
  right:5px;
  top:5px;
  z-index: 10;
}
.bottom-detail{
  margin-top: 88px;
  bottom: 0;
  left:0;
  right:0;
  text-align: center;
  padding-bottom: 5px ;
}
</style>
