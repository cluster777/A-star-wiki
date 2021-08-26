<template>
  <div class="container">
    <!-- and image container -->

        <!--rank select-->
    <div v-for="i in 4" :key="i" class="ascension">
        
        <input type=button v-bind="options"
        :value=i-1
        v-on:click="OnAscensionChange(i-1)"/>
    </div>
    <div class=clearfix />
    <div>
        <div class="slidecontainer">
          LV
          <input v-model=sliderVal 
              type=range min=1  step=1
              v-bind="options"
                  :max=sliderMax
              />
          {{this.sliderVal}}
          <div>
              <!--float it to the right-->
              
          </div>

        </div>
    </div>
    <div v-show="true">
      <div class="slidecontainer">
          Trust
          <input v-model=trust
              type=range min=1  max=10 step=1/>
          {{this.trust}}
          <div>
              <!--float it to the right-->
              
          </div>
          <div v-show="false">
            att:{{this.trust_stat[this.trust-1].att}} def:{{this.trust_stat[this.trust-1].def}} HP:{{this.trust_stat[this.trust-1].hp}}
          </div>

        </div>
    </div>
    <div v-show="equip">
        <div class="slidecontainer">
          Equip
          <input v-model=equiplv 
              type=range min=1  max=10 step=1
              @input="OnEquipLVChange"
              />
          {{this.equiplv}}
          <div v-show="false">
              <!--float it to the right-->
              
               att:{{this.equipatt}} def:{{this.equipdef}} HP:{{this.equiphp}} multiplier:{{this.equipmult}}<br>
               {{this.equipDescription}}
          </div>

        </div>
    </div>
    <div class="contentx">
        <!--affected by other selector-->
        attack  :{{totalatt}}<br>
        defense :{{totaldef}}<br>
        HP      :{{totalhp}}<br>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LV',
  data: function() {
    var chardata=require('@/assets/json/' + this.CharacterName + '.json')
    console.log(chardata)
    return {
      base_stat:chardata.base_stat.stat,
      equipment:chardata.equipment,
      equip_stat:require('@/assets/json/'+chardata.rarity+'equip.json'),
      trust_stat:require('@/assets/json/'+'trust.json'),
      ascensionVal: 0,
      trust:1,
      sliderVal: 1,
      sliderMax: 30,
      equiplv:0,
      equipatt:0,
      equipdef:0,
      equiphp:0,
      equipmult:0,
      equip:false
    }
  },
  props: {
    CharacterName:String
  },
  computed:{
    totalatt(){
      var ascension_gap=0
        if(Number(this.ascensionVal)==0){
              ascension_gap=0
        }
        else if(Number(this.ascensionVal)==1){
              ascension_gap=30
        }
        else if(Number(this.ascensionVal)==2){
              ascension_gap=70
        }
        else {
              ascension_gap=120
        }

        return this.base_stat[ascension_gap+Number(this.sliderVal)-1].att+ this.trust_stat[this.trust-1].att+ this.equipatt
      },
    totaldef(){
        var ascension_gap=0
        if(Number(this.ascensionVal)==0){
              ascension_gap=0
        }
        else if(Number(this.ascensionVal)==1){
              ascension_gap=30
        }
        else if(Number(this.ascensionVal)==2){
              ascension_gap=70
        }
        else {
              ascension_gap=120
        }

        return this.base_stat[ascension_gap+Number(this.sliderVal)-1].def+ this.trust_stat[this.trust-1].def+ this.equipdef
      },
    totalhp(){
      var ascension_gap=0
      if(Number(this.ascensionVal)==0){
            ascension_gap=0
        }
        else if(Number(this.ascensionVal)==1){
            ascension_gap=30
        }
        else if(Number(this.ascensionVal)==2){
            ascension_gap=70
        }
        else {
            ascension_gap=120
        }

      return this.base_stat[ascension_gap+Number(this.sliderVal)-1].hp+ this.trust_stat[this.trust-1].hp+ this.equiphp
    }
  },
  methods: {
    OnEquipLVChange(){
      if(this.equiplv<3 && this.equiplv>0){
        this.equipDescription="first"
      }
      else if(this.equiplv>=3 && this.equiplv<6)this.equipDescription="second"
      else if(this.equiplv>=6 && this.equiplv<10)this.equipDescription="third"
      else if(this.equiplv==10)this.equipDescription="fourth"
      if(this.equiplv==0){
        this.equipatt=0;
        this.equipdef=0;
        this.equiphp=0;
        this.equipmult=0;
      }
      else{
        this.equipatt=this.equip_stat[this.equiplv-1].att;
        this.equipdef=this.equip_stat[this.equiplv-1].def;
        this.equiphp=this.equip_stat[this.equiplv-1].hp;
      }

    },
    OnAscensionChange(value){
        if(this.ascensionVal!=0){
          if(value==0){
            this.equiplv=0;
            console.log("un-show equipment UI")
            this.equip=false;
            this.OnEquipLVChange()
          }

        }
        if(this.ascensionVal==0 && value>0){
          this.equiplv=1;
          this.OnEquipLVChange()
          console.log("show equipment UI")
          this.equip=true;
        }
        this.sliderVal=1;
        this.ascensionVal=value;
        console.log(value)
        
        if(value==0){
            this.sliderMax=30
        }
        else if(value==1){
            this.sliderMax=40
        }
        else if(value==2){
            this.sliderMax=50
        }
        else {
            this.sliderMax=80
        }
        
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ascension{
  width:100%;
  height:10%;
  background-color: aqua;
}
.ascension input{
  float:left;
}
.slidecontainer {
  padding-left: 20px;
  padding-top: 5px ;
  padding-bottom:10px;
}
.container{
  background-color: rgb(48, 44, 44);
  
  width: 99%;
}
.contentx{
  padding: 20px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
