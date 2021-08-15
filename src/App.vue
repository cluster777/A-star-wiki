<template>
  <LV msg="something awesome"/>
  <chain-combo/>
  <CharSelector :CharacterData="[{char_name: 'Place6',element_main: 'fire',element_sub: 'thunder',faction: 'rediesel',char_image: 'placeholder',char_rarity: 6},{char_name: 'Place5',element_main: 'fire',element_sub: 'water',faction: 'True Order',char_image: 'placeholder',char_rarity: 5},{char_name: 'Place4',element_main: 'fire',element_sub: 'nill',faction: 'Northland',char_image: 'placeholder',char_rarity: 4}]"/>
  <Characterdash/>
</template>

<script>
import LV from './components/LV UI.vue'
import ChainCombo from './components/Chain Combo.vue'
import CharSelector from './components/character selector.vue'
import Characterdash from './components/Character_dash.vue'
export default {
  name: 'app',
  components: {
    LV,
    ChainCombo,
    CharSelector,
    Characterdash
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
