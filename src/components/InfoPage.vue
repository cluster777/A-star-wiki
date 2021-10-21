<template>
  <div  class=overlay v-on:click.self="this.$parent.infoChange()">
    <div class="middle-box">
      <div class=headclose>
        <button value=char v-on:click="showcharacterselector()" class="button-close" > X </button>
      </div>
      <div>
        <!--character detailed info goes here with the voice lines-->
        <div>
            <h2>{{this.chardata.realName}} character info</h2>
            <div class="infoContainer">
                <p>Name : {{this.chardata.realName}}</p>
                <p>Nickname : {{this.chardata.nickname}}</p>
                <p>Gender : {{this.chardata.gender}}</p>
                <p>Height : {{this.chardata.height}}</p>
                <p>Birthday : {{this.chardata.birthday}}</p>
                <p>Birthplace : {{this.chardata.birthplace}}</p>
                <p>Fighting Style : {{this.chardata.style}}</p>
            </div>

            <div>
                <infoContaint v-for="file in this.chardata.files" :key=file 
                :title="file.file_name" 
                :content="file.files" />
            </div>
            </div>
            <!---
            <div>
                <p class="voiceContainer" v-for="voice in this.chardata.voice" :key=voice>
                    {{voice}}
                </p>
            </div>-->

        </div>
      </div>
        
  </div>
</template>

<script>
import infoContaint from '@/components/titledContainer.vue'

export default {
  name: 'info',
  components:{
    infoContaint
  },
  props:{
      chardata:Object
  },
  methods:{
    showcharacterselector(){
      this.$parent.infoChange()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  margin:0 0 0 20px;
  padding:0 0 0 0;
}
.overlay {
  overflow: scroll;
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
.infoContainer{
  background-color: rgb(61, 54, 54);
  margin: 0px 20px 0 20px;
}
.voiceContainer{
  background-color: rgb(61, 54, 54);
}
.middle-box{
  position: relative;
  width:70%;
  align-content: center;
  background-color: rgb(83, 78, 78);
  margin:auto;
  margin-top: 20px;
}
.headclose{
  padding-bottom:20px;
  
}
.button-close{
  background-color: rgb(83, 78, 78);
  border:none;
  
  position:absolute;
  right:0;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.active{
    background-color: rgb(209, 100, 28);
    border-bottom-color: rgb(208, 255, 0);
}
.inactive{
   border-bottom-color:rgb(48, 44, 44) ;
}
.filterClear{
  background-color: red;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  color:white;
}
.final-filter{
  margin-left: 20px;
}
@media only screen and (max-width: 900px) {
  .middle-box{
  position: relative;
  width:80%;
  height: 95%;
  align-content: center;
  background-color: rgb(83, 78, 78);
  margin:auto;
  margin-top: 20px;
  }
  .grid-item{
  height:70px;
  width:50px;
  padding: 8px;
  background-color: rgb(83, 78, 78);
  }
}
@media only screen and (max-width: 600px) {
  .middle-box{
  position: relative;
  width:80%;
  height: 95%;
  align-content: center;
  background-color: rgb(83, 78, 78);
  margin:auto;
  margin-top: 20px;
  }
  .grid-item{
  height:70px;
  width:50px;
  padding: 8px;
  background-color: rgb(83, 78, 78);
  }
  .filterbox{
  padding-bottom: 80px;
  background-color: rgb(31, 31, 31);;
  margin:5px;
  margin-top:10px;
  }
  
}
</style>
