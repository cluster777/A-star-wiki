<template>
  <div  class=overlay>
    <div class="middle-box">
      <div class=headclose>
        <button value=char v-on:click="showcharacterselector()" class="button-close" > X </button>
      </div>
      <div>
        <!--filter goes here-->
        <div class=filterbox>
          rarity
          <div></div>
        </div>
        <div class=filterbox>
          element_main
          <div></div>
        </div>
        <div class=filterbox>
          faction
          <div></div>
        </div>

      </div>
      <div v-for="field in CharacterData" :key="field" class="grid-container">
        <!--all char goes here with v-for char-->
        <div class="grid-item">
          <CharCard v-bind="options"
            :char_name=field.char_name 
            :element_main=field.element_main
            :element_sub=field.element_sub
            :faction=field.faction
            :class=field.class
            :char_rarity=field.char_rarity
            v-on:click="goto(field.char_name)"
            
          />
        </div>
      </div>
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
  },
  methods:{
    getParent(name){
      let p = this.$parent;
      while(typeof p !== 'undefined'){
        if(p.$options.name == name) {
          return p;
        }else {
          p = p.$parent;
        }
      }
      return false;
    },
    goto(name){

      console.log(name)
      this.getParent('character').ActiveChange()
      this.$router.push({ path: `/${name}` })
    },
    showcharacterselector(){
      this.getParent('character').ActiveChange()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.85); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
 /* Add a pointer on hover */
}
.grid-container {
  display: grid;
  margin-top: 10px;
  background-color: red;
  gap: 5px;
  grid-auto-rows: 130px;
}
.grid-item{
  height:150px;
  width:90px;
  padding: 10px;
  background-color: blue;
}
.filterbox{
  background-color: red;
  margin:5px;
  margin-top:10px;
}
.middle-box{
  position: relative;
  width:70%;
  height: 95%;
  align-content: center;
  background-color: green;
  margin:auto;
  margin-top: 20px;
}
.headclose{
  padding-bottom:20px;
}
.button-close{
  background-color: green;
  border:none;
  
  position:absolute;
  right:0;
}
</style>
