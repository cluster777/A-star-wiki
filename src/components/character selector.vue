<template>
  <div>
    bruh
    <div v-for="field in CharacterData" :key="field">
      <!--all char goes here with v-for char-->
      <CharCard v-bind="options"
      :char_name=field.char_name 
      :element_main=field.element_main
      :element_sub=field.element_sub
      :faction=field.faction
      :char_image=field.char_image
      :char_rarity=field.char_rarity
      />
    </div>
  </div>
</template>

<script>
import CharCard from './character card.vue'
export default {
  name: 'CharSelector',
  props: {
    CharacterData
  },
  components:{
    CharCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
