<template>
  <LV msg="something awesome"/>
  <chain-combo/>
  <CharSelector :CharacterData="[{char_name: 'Place6',element_main: 'fire',element_sub: 'thunder',faction: 'rediesel',char_image: 'placeholder',char_rarity: 6},{char_name: 'Place5',element_main: 'fire',element_sub: 'water',faction: 'True Order',char_image: 'placeholder',char_rarity: 5},{char_name: 'Place4',element_main: 'fire',element_sub: 'nill',faction: 'Northland',char_image: 'placeholder',char_rarity: 4}]"/>
  <Characterdash :CharacterName=charname />
</template>

<script>
import LV from './components/LV UI.vue'
import ChainCombo from './components/Chain Combo.vue'
import CharSelector from './components/character selector.vue'
import Characterdash from './components/Character_dash.vue'
import { useRoute } from 'vue-router';
export default {
  name: 'app',
  computed: {
    // a computed getter
    charname() {
      // `this` points to the vm instance
      const route = useRoute()
      console.log(route.params.name)
      return route.params.name
    }

  },
  components: {
    LV,
    ChainCombo,
    CharSelector,
    Characterdash
  }
}
</script>

<style>

</style>
