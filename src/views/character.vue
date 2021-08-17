<template>
  <Header />
  <div class="clearfix"></div>
  
  <CharSelector  v-show="this.active" :CharacterData="[{char_name: 'sinsa',element_main: 'fire',element_sub: 'thunder',faction: 'rediesel wrench',class:'detonator',char_rarity: 6},{char_name: 'faust',element_main: 'fire',element_sub: 'frost',faction: 'True Order',class:'converter',char_rarity: 5},{char_name: 'alice',element_main: 'fire',element_sub: 'x',faction: 'Northland',class:'support',char_rarity: 4}]"/>
  <CharacterImage :CharacterName=charname />
  <div class=sidebar>
    
    <Characterdash :CharacterName=charname />
    
    <ActiveSkill ActiveDescription="yeah" ActiveArea="vueee" />
    
    <chain-combo/>
    
    <LV :CharacterName=charname />
  </div>
  <div class="clearfix"></div>
  <Footer/>
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/Header.vue'
import LV from '../components/LV UI.vue'
import ChainCombo from '../components/Chain Combo.vue'
import ActiveSkill from '../components/ActiveSkill.vue'
import CharSelector from '../components/character selector.vue'
import Characterdash from '../components/Character_dash.vue'
import CharacterImage from '../components/character image.vue'
import { useRoute } from 'vue-router';
export default {
  name: 'character',
  computed: {
    // a computed getter
    charname() {
      // `this` points to the vm instance
      const route = useRoute()
      console.log(route.params.name)
      return route.params.name
    }
  
  },
  data:function(){
    return{
      active:false
    } 
  },
  components: {
    Footer,
    Header,
    LV,
    CharacterImage,
    ChainCombo,
    CharSelector,
    Characterdash,
    ActiveSkill
  },
  methods:{
    ActiveChange(){
      this.active=!this.active
    }
  }
}
</script>

<style>
.sidebar{
  float:right;
  width:45%;
  height:80%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
