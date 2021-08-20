<template>
  <Header />
  <div class="clearfix"></div>
  
  <CharSelector  v-show="this.active" />
  <CharacterImage :CharacterName=charname :key=charname />
  <div class=sidebar>
    
    <Characterdash :CharacterName=charname :key=charname />
    
    <ActiveSkill :CharacterName=charname :key=charname />
    
    <chain-combo :CharacterName=charname :key=charname />
    
    <LV :CharacterName=charname :key=charname />
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
      this.$emit('onCharnameChange',route.params.name)
      //this.$state.chardata=require{'@/assets/json/'+charname+'.json'}
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
      this.$state.chardata=require('@/assets/json/'+this.charname+'.json')
    }
  }
}
</script>

<style>
.sidebar{
  float:right;
  width:30%;
  height:50%;
  margin-top:0px;
  margin-right:10px;
  padding:10px;
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
  height:50%;
  margin-top:0px;
  margin-right:30px;
  padding:10px;
  }
}
</style>
