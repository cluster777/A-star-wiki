<template>
  
  <div class="container">
    
    <div class="content">
    
      <div class="description">
        Active Skill<br>
        {{ActiveDescription}}
      </div>
      <div class=clearfix />
      <div class="AoE">
        <img :src="'/universal/type_detonator.png'" class="image"/>
      </div>
      <div class=clearfix />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ActiveSkill',
  props: {
    ActiveDescription: String,
    ActiveArea:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
  background-color: rgb(48, 44, 44);
  margin-bottom: 10px;
  width: 99%;
}
.content{
  padding-top:10px;
  padding-bottom:10px;
  padding-left:15px;
  padding-right:15px ;
  
}
.description{
  float:left;
  width: 80%;
}
.AoE{
  float:right;
  border-style: solid;

  width:100px
}
</style>
