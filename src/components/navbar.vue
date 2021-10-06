<template>
  <div class="container" > 
      <button value=char v-on:click="showcharacterselector()" > Character </button>
      <button value=Stats v-on:click="Navigate('statistic')">Statistic</button>
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
    navigate(pathName){
      this.$router.push({ path: `/`+pathName })
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
    display: inline;

    margin-left: 20px;
    
  }
  button{
    background-color: rgb(43, 43, 190);
    border-style: none;
    color:whitesmoke;
  }

</style>
