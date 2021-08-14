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
      {{this.char_rarity}}
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
    char_rarity: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  border-style: solid;
  width: 10%;
}
</style>
