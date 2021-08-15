<template>
  <div class="container"> 
    {{charname}}
    {{charclass}}
    <div>
    char description
    <breaktrought />
    <ascensionoverview />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup(){
    const route = useRoute()
    const charname = route.params
    return charname,route
  },
  name: 'Character_dash',
  data: function() {
    return {
      description:"first",

    }
  },
  props: {
    msg: String
  },
  methods: {
    retcharname(){
      console.log(this.charname)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chain{
  width:100%;
  height:10%;
  background-color: aqua;
}
.Chain input{
  float:left;
}
.container{
  border-style: solid;
  width: 40%;
}
</style>
