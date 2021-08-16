<template>
  <div class="container" >
    <!--the card container -->
    <div>
      <!--the image and icon container-->
      <div>
        <!-- char image full width full height -->
        {{this.char_image}}
      </div>
      <div>
        <!-- element float it left -->
        {{this.element_main}}
        {{this.element_sub}}
      </div>
      <div>
        <!--float it right-->
        {{this.faction}}
      </div>
    </div>
    <div>
      <!--rarity line-->
      <hr v-bind="options" :class=colorClass>
    </div>
    <div>
      {{this.char_name}}
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
    char_image: String,
    char_rarity: Number 
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
  height:2px
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
  width: 10%;
}
</style>
