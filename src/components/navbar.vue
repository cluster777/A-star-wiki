<template>
  <div class="container" > 
      <button value=char v-on:click="showcharacterselector()" > test </button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
    showcharacterselector(){
      this.getParent('character').ActiveChange()
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .container{
    float:left

  }

</style>
