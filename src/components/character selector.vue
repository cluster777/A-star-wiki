<template>
  <div  class=overlay>
    <button value=char v-on:click="showcharacterselector()" > test </button>
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
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.grid-container {
  display: grid;
  gap: 5px;
  grid-auto-rows: 140px;
}
.grid-item{
  height:150px;
  width:90px;
  padding: 10px;
}

</style>
