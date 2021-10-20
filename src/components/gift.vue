<template>
  <div class="containerz">
    Gift
    <hr>
    <div v-if="this.state.ready">
      <giftitem :itemName="this.state.gift1[0].name" :value="10" :description="this.state.gift1[0].description" />
      <giftitem :itemName="this.state.gift1[1].name" :value="50" :description="this.state.gift1[1].description" />
      <giftitem :itemName="this.state.gift2[0].name" :value="10" :description="this.state.gift2[0].description" />
      <giftitem :itemName="this.state.gift2[1].name" :value="50" :description="this.state.gift2[1].description" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import giftitem from './GiftItem.vue'

export default {
  setup(props){
    const state = reactive({
      gift1: null,
      gift2: null,
      ready:false
    });
    const getdata= async () =>{
      const response = await import('@/assets/json/' + props.chardata.gift[0] + '.json')
      state.gift1= await response;
      const response2 = await import('@/assets/json/' + props.chardata.gift[1] + '.json')
      state.gift2= await response2;
      console.log(state.gift1)
      state.ready=true
    }
    onMounted(async () => {
      getdata()
      console.log("mounted")
    });
    return{
      state
    }
  },
  name: 'gift',
  props: {
    chardata: Object
  },
  components:{
    giftitem
  },
  
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


</style>
