<template>
  <div class="containerz">
     <h3>Collosus Skill</h3>

    <div>
      <item :itemName="skill[0].name" :value="0" :description="skill[0].effect"/>
      <item :itemName="skill[1].name" :value="0" :description="skill[1].effect"/>
    </div>
    
  </div>
</template>

<script>
import item from '@/components/item.vue'
export default {
  name: 'collosus',
  props: {
    chardata: Object
  },
  components:{
    item
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
h3{
  margin:0 0 0 15px;

}
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
