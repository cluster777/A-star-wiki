<template>
  <div class="container">
    <!-- and image container -->

        <!--rank select-->
    <div v-for="i in [0,1,2]" :key="i" class="ascension" v-show="this.faction!='silent hunter'">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + i + '.png')"
        v-on:click="OnAscensionChange(i)"
        :class="{active :this.ascensionVal==i, inactive:this.ascensionVal!=i}" />
    </div>
    <div class="ascension" v-show="this.faction!='silent hunter' && this.rarity>3">
        
        <img type=button v-bind="options"
        :src="require('@/assets/universal/A' + 3 + '.png')"
        v-on:click="OnAscensionChange(3)"
        :class="{active :this.ascensionVal==3, inactive:this.ascensionVal!=3}" />
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
          {{sliderVal}}
          <input type=button value='<' v-on:click="this.sliderVal>1 ? this.sliderVal--:this.sliderVal" />
          <input type=button value='>' v-on:click="this.sliderVal<this.sliderMax ? this.sliderVal++:this.sliderVal" />
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
          {{trust}}
          <input type=button value='<' v-on:click="this.trust>1 ? this.trust--:this.trust" />
          <input type=button value='>' v-on:click="this.trust<10 ? this.trust++:this.trust" />
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
          {{equiplv}}
          <input type=button value='<' v-on:click="this.equiplv>1 ? this.equiplv--:this.equiplv" />
          <input type=button value='>' v-on:click="this.equiplv<10 ? this.equiplv++:this.equiplv" />
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
  props: {
    chardata:Object
  },
  data: function() {
    var sm=30,elv=0,ett=0,edf=0,ehp=0,asc=0,eq=false,eqname=this.chardata.rarity
    if(this.chardata.faction=="silent hunter"){
      sm=80
      elv=1
      ett=30
      edf=10
      ehp=50
      asc=3
      eq=true
      eqname='6S'
      //silent hunter equip is different need fix
    }

    return {
      base_stat:this.chardata.base_stat.stat,
      rarity:Number(this.chardata.rarity),
      faction:this.chardata.faction,
      equipment:this.chardata.equipment,
      equip_stat:require('@/assets/json/'+eqname+'equip.json'),
      trust_stat:require('@/assets/json/'+'trust.json'),
      ascensionVal: asc,
      trust:1,
      sliderVal: 1,
      sliderMax: sm,
      equiplv:elv,
      equipatt:ett,
      equipdef:edf,
      equiphp:ehp,
      //equipmult:0,
      equip:eq
    }
  },
  
  computed:{
    totalatt(){
      var ascension_gap=0
        if(this.faction=='silent hunter') ascension_gap=0
        else if(Number(this.ascensionVal)==0){
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

        return this.base_stat[ascension_gap+Number(this.sliderVal)-1].att+ this.trust_stat[this.trust-1].att+ this.equipatt-65
      },
    totaldef(){
        var ascension_gap=0
        if(this.faction=='silent hunter') ascension_gap=0
        else if(Number(this.ascensionVal)==0){
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

        return this.base_stat[ascension_gap+Number(this.sliderVal)-1].def+ this.trust_stat[this.trust-1].def+ this.equipdef-30
      },
    totalhp(){
      var ascension_gap=0
      if(this.faction=='silent hunter') ascension_gap=0
      else if(Number(this.ascensionVal)==0){
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

      return this.base_stat[ascension_gap+Number(this.sliderVal)-1].hp+ this.trust_stat[this.trust-1].hp+ this.equiphp-300
    }
  },
  methods: {
    OnEquipLVChange(){
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
        if(this.faction=='silent hunter')return
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
  background-color: rgb(48, 44, 44);
}
.ascension img{
  width: 45px;
  height: 30px;
  margin-left:10px;
  float:left;
  border-style: none;
  border-bottom-style: solid;
  background-color: rgb(73, 69, 69);
  border-width: 3px;
}
.slidecontainer {
  padding-left: 20px;
  padding-top: 5px ;
  padding-bottom:10px;
}
.container{
  background-color: rgb(48, 44, 44);
  margin-bottom: 10px;
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
.numberInput{
  width:30px;
}
.active{
    border-bottom-color: rgb(208, 255, 0);
}
.inactive{
   border-bottom-color:rgb(48, 44, 44) ;
}
</style>
