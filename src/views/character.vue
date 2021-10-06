<template>
  <div v-if="state.ready">
    <Header />
    <div class="clearfix"></div>
    
    
    <CharacterImage :chardata=state.test :key=state.test />
    <div class=sidebar>
      
      <Characterdash :chardata=state.test :key=state.test />
      
      <ActiveSkill :chardata=state.test :key=state.test />
      
      <chain-combo :chardata=state.test :key=state.test />
      <equipment :chardata=state.test :key=state.test />
      <LV :chardata=state.test :key=state.test />
    </div>
    <div class="clearfix"></div>
    <Footer/>
  </div>
  <div v-else>
    {{chardata}}
    whatever this is requiem
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/Header.vue'
import LV from '../components/LV UI.vue'
import ChainCombo from '../components/Chain Combo.vue'
import ActiveSkill from '../components/ActiveSkill.vue'
import Characterdash from '../components/Character_dash.vue'
import CharacterImage from '../components/character image.vue'
import equipment from '../components/equipment.vue'

import { useRoute } from 'vue-router'
import {  onMounted,  reactive, watch } from '@vue/runtime-core'


export default {
  setup(){
    const state = reactive({
      test: null,
      ready:false
    });
    const route=useRoute()
    const getdata= async () =>{
      const response = await import('@/assets/json/' + route.params.name.toLowerCase() + '.json')
      state.test= await response;
      console.log(state.test)
      state.ready=true
    }
    watch(
      () => route.params.name,
      () => {
        getdata()
        console.log("watched")
      }
    )
    onMounted(async () => {
      getdata()
      console.log("mounted")
    });
    return{
      state
    }
  },
  name: 'character',

  data:function(){
    return{
      active:false,
    } 
  },
  components: {
    Footer,
    Header,
    LV,
    CharacterImage,
    ChainCombo,
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
