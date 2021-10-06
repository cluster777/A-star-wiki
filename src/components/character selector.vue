<template>
  <div  class=overlay v-on:click.self="this.$parent.activeChange()">
    <div class="middle-box">
      <div class=headclose>
        <button value=char v-on:click="showcharacterselector()" class="button-close" > X </button>
      </div>
      <div>
        <!--filter goes here-->
        <div class=filterbox >
          <p >rarity</p>
          <div v-for="rare in [3,4,5,6]" :key=rare class="raritySelect">
            
            <img :src="require('@/assets/universal/'+rare+'star.png')"
              :class="{active :this.filter_rarity==rare}"
              v-on:click="rarityChange(rare)"
              />
          </div>
        </div>
        <div class="clearfix" />
        <div class=filterbox>
          <p>element main</p>
          <div v-for="ele in ['Fire','Water','Thunder','Forest']" :key=ele class="elementSelect">
            <img :src="require('@/assets/universal/'+ele+'.png')"
              :class="{active :this.filter_main==ele}"
              v-on:click="eleMainChange(ele)"
              />
          </div>
          <p>element sub</p>
          <div v-for="ele in ['Fire','Water','Thunder','Forest']" :key=ele class="elementSelect">
            <img :src="require('@/assets/universal/'+ele+'.png')"
              :class="{active :this.filter_sub==ele}"
              v-on:click="eleSubChange(ele)"
              />
          </div>
        </div>
        <div class="clearfix" />
        <div class=filterbox>
          <p>faction</p>
          <div v-for="fact in ['Illumina Federation','Lumopolis','Umbraton','True Order','Northland','Rediesel Wrench','Independent','silent hunter']" :key=fact class="factionSelect">
            <img :src="require('@/assets/universal/'+fact+'.png')"
              :class="{active :this.filter_faction==fact}"
              v-on:click="factionChange(fact)"
            />
          </div>
        </div>
        <div class="clearfix" />
        <div class="final-filter">
          Name:<input type=text v-model=name_filter v-on:input=filter() />
        </div>
      <div>
        <input type=button value="Clear Filter" class="filterClear" v-on:click="clearSelect()"/></div>
      </div>
      <div class="grid-container">
        <div v-for="field in CharacterData" :key="field" class="grid-item">
          <!--all char goes here with v-for char-->
          <div >
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
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import CharCard from './character card.vue'

export default {
  name: 'CharSelector',
  data: function() {
    return{
      char_all:require('@/assets/json/charlist.json'),
      CharacterData:require('@/assets/json/charlist.json'),
      name_filter:'',
      filter_main:'',
      filter_sub:'',
      filter_faction:'',
      filter_rarity:''
    }
  },
  components:{
    CharCard
  },
  methods:{
    filter(){
      var dat=this.char_all
      if(this.name_filter!='')dat=dat.filter(char => char.char_name.toLowerCase().includes(this.name_filter))
      if(this.filter_faction!='')dat=dat.filter(char => char.faction==this.filter_faction)
      if(this.filter_sub!='')dat=dat.filter(char => char.element_sub==this.filter_sub)
      if(this.filter_main!='')dat=dat.filter(char => char.element_main==this.filter_main)
      if(this.filter_rarity!='')dat=dat.filter(char => char.char_rarity==this.filter_rarity)
      this.CharacterData=dat
    },
    eleMainChange(ele){
      if(this.filter_main==ele){
        this.filter_main=''
      }
      else this.filter_main=ele
      this.filter()
    },
    eleSubChange(ele){
      if(this.filter_sub==ele){
        this.filter_sub=''
      }
      else this.filter_sub=ele
      this.filter()
    },
    factionChange(ele){
      if(this.filter_faction==ele){
        this.filter_faction=''
      }
      else this.filter_faction=ele
      this.filter()
    },
    rarityChange(ele){
      if(this.filter_rarity==ele){
        this.filter_rarity=''
      }
      else this.filter_rarity=ele
      this.filter()
    },
    clearSelect(){
      this.filter_rarity=''
      this.filter_faction=''
      this.filter_sub=''
      this.filter_main=''
      this.filter()
    },
    goto(name){

      this.$parent.activeChange()
      this.$router.push({ path: `/character/${name}` })
    },
    showcharacterselector(){
      this.$parent.activeChange()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.grid-container{
  margin: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(83, 78, 78);
  padding-bottom: 20px;
}
.raritySelect img{
  margin-top: 5px;
  height:20px;
  float:left;
  border-style: solid;
  border-width: 2px;
  margin-left: 5px;
}
.elementSelect img{
  margin-top: 5px;
  height:20px;
  width:20px;
  float:left;
  border-style: solid;
  border-width: 2px;
  margin-left: 5px;
}
.factionSelect img{
  height:30px;
  width:30px;
  float:left;
  border-style: solid;
  border-width: 2px;
  margin-left: 5px;
}
.filterbox p{
  padding-top: 7px;
  padding-left: 10px;
  float: left;
  margin:0px;
}
.grid-item{
  height:95px;
  width:70px;
  padding: 8px;
  background-color: rgb(83, 78, 78);
}
.filterbox{
  padding-bottom: 35px;
  background-color: rgb(31, 31, 31);;
  margin:5px;
  margin-top:10px;
}
.middle-box{
  position: relative;
  width:70%;
  height: 95%;
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
