<template>
  <div class="container" > 
      <button value=char v-on:click="activeChange()" > Character </button>
      <button value=Stats v-on:click="navigate('statistic')">Statistic</button>
  </div>
  <CharSelector  v-show="this.active" />
</template>

<script>
import CharSelector from './character selector.vue'
export default {
  name: 'Navbar',
  data: function(){
    return{
      active:false
    }
  },
  components:{
    CharSelector
  },
  methods:{
    navigate(pathName){
      this.$router.push({ path: `/`+pathName })
    },
    activeChange(){
      this.active=!this.active
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
