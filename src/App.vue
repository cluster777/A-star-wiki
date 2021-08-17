<template>
  <div class="mainbody">
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
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;

}
body {
  background-color: rgb(83, 78, 78);
  color:whitesmoke
}
Footer{
  height:10%;
}
</style>
