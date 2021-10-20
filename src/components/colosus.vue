<template>
  <div class="containerz">
    Skill
    <hr>
    <div>
      <div>{{skill[0].name}}</div>
      <div>{{skill[0].effect}}</div>
      <div>{{skill[1].name}}</div>
      <div>{{skill[1].effect}}</div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'collosus',
  props: {
    chardata: Object
  },
  data: function(){
    return{
      skill:this.chardata.collosus.skill
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.containerz{
  position:relative;
  background-color: rgb(48, 44, 44);

  width: 99%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top:0px;
}
.containerz h2{
  padding-left: 10px;
  margin-bottom: 0px;
}
.containerz h3{
  color:rgb(168, 167, 167);
  padding-top:5px;
  padding-left: 10px;
  margin-bottom: 0px;
}
.containerz hr{
  margin-top:30px;
}
.title-container{
  padding:0;
  margin: 0;
  display: flex;
  flex-direction: row;
}
.class-icon{
  position:absolute;
   background-color: rgb(48, 44, 44);
  border-style: solid;
  right:10px;
  top:10px;
  width:80px;
  height:80px;
}
.faction-icon{
  position: absolute;
  border-style: solid;
  background-color:rgb(48, 44, 44) ;
  top:50px;
  width: 30px;
  height:30px;
  left :20px ;
}
.content-description{
  padding-left:10px;
  margin-top:20px;
  text-align: justify;
}

</style>
