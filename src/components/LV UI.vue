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
        <div>
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
              type=range min=0  max=10 step=1/>
          {{this.trust}}
          <div>
              <!--float it to the right-->
              
          </div>
          <div>
            att:{{this.trust*6}} def:{{this.trust*3}} HP:{{this.trust*30}}
          </div>

        </div>
    </div>
    <div v-show="equip">
        <div>
          Equip
          <input v-model=equiplv 
              type=range min=1  max=10 step=1
              @input="OnEquipLVChange"
              />
          {{this.equiplv}}
          <div>
              <!--float it to the right-->
              
               att:{{this.equipatt}} def:{{this.equipdef}} HP:{{this.equiphp}} multiplier:{{this.equipmult}}<br>
               {{this.equipDescription}}
          </div>

        </div>
    </div>
    <content>
        <!--affected by other selector-->
        attack  :{{this.sliderVal*10 +this.ascensionVal*200+ this.trust*6+ this.equipatt}}<br>
        defense :{{this.sliderVal*10 +this.ascensionVal*200+ this.trust*3+ this.equipdef}}<br>
        HP      :{{this.sliderVal*10 +this.ascensionVal*200+ this.trust*30+ this.equiphp}}<br>
    </content>

  </div>
</template>

<script>
export default {
  name: 'LV',
  data: function() {
    return {
      ascensionVal: 0,
      trust:0,
      sliderVal: 1,
      sliderMax: 40,
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
        this.equipatt=this.equiplv*10;
        this.equipdef=this.equiplv*10;
        this.equiphp=this.equiplv*10;
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
        this.ascensionVal=value;
        console.log(value)
        this.sliderVal=1;
        if(value==0){
            this.sliderMax=40
        }
        else if(value==1){
            this.sliderMax=50
        }
        else if(value==2){
            this.sliderMax=60
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
  width: 100%; /* Width of the outside container */
}
.container{
  border-style: solid;
  width: 99%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
