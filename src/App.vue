<template>
  <Suspense>
    <div class="mainbody">
      <!--header and nav thanks-->
      
      <!-- In this single page, without router-view, views cannot render -->
      
      <router-view  />
      <!--me me me footer-->
      
    </div>
  </Suspense>
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
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: auto;
  overflow-x: hidden;
}
body {
  background-color: rgb(83, 78, 78);
  color:whitesmoke
}
Footer{
  height:10%;
}
</style>
