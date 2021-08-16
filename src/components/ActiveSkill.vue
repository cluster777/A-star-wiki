<template>
  
  <div class="container">
      Active Skill
    <content>
        {{ActiveDescription}}
        {{ActiveArea}}
    </content>
    
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
  border-style: solid;
  width: 99%;
}
</style>
