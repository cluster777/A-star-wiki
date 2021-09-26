<template>
  <div>
    {{chardata.res}}
    <Header />
    <div class="clearfix"></div>
    
    <CharSelector  v-show="this.active" />
    <CharacterImage :chardata=chardata :key=chardata.name />
    <div class=sidebar>
      
      <Characterdash :chardata=chardata :key=chardata.name />
      
      <ActiveSkill :chardata=chardata :key=chardata.name />
      
      <chain-combo :chardata=chardata :key=chardata.name />
      <equipment :chardata=chardata :key=chardata.name />
      <LV :chardata=chardata :key=chardata.name />
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
import { reactive } from '@vue/reactivity'
export default {
  async setup(){
    const state=reactive({res:null})
    state.res=await import('@/assets/json/' + 'sinsa' + '.json')
    console.log(state.res)
    return{
      chardata:state.res
    }
  },
  name: 'character',
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
