<template>
  <div v-if="dataReady">
    <Header />
    <div class="clearfix"></div>
    
    <CharSelector  v-show="this.active" />
    <CharacterImage :chardata=chardata :key=chardata />
    <div class=sidebar>
      
      <Characterdash :chardata=chardata :key=chardata />
      
      <ActiveSkill :chardata=chardata :key=chardata />
      
      <chain-combo :chardata=chardata :key=chardata />
      <equipment :chardata=chardata :key=chardata />
      <LV :chardata=chardata :key=chardata />
    </div>
    <div class="clearfix"></div>
    <Footer/>
  </div>
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
import equipment from '../components/equipment.vue'

import { useRoute } from 'vue-router'


export default {
  async mounted(){
    const route=useRoute()
    const response = await import('@/assets/json/' + route.params.name.toLowerCase() + '.json')
    this.chardata= await response;
    console.log(this.chardata)
    this.dataReady=true
  },
  name: 'character',
  data:function(){
    return{
      dataReady:false,
      active:false,
      chardata:{}
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
    ActiveSkill,
    equipment
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
  width:30%;
  height:100vh;
  margin-top:0px;
  margin-right:0px;
  padding:0;
  overflow:scroll;
  overflow-x:hidden;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
@media only screen and (max-width: 900px) {
  .sidebar{
  float:left;
  width:98%;
  height:auto;
  margin-top:0px;
  margin-right:auto;
  margin-left: 5px;
  padding:0px;
  overflow:visible;
  }
}
</style>
