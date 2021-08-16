<template>
  <div>
    <!--header and nav thanks-->
    
    <!-- In this single page, without router-view, views cannot render -->
    
    <router-view />
    <!--me me me footer-->
    
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style>
Header{
  height:10%;

}
Footer{
  height:10%;
}
</style>
