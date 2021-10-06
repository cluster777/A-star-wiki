<template>
  <div>
    <Header />
    <div class="clearfix"></div>
    
    <div class=sidebar>

    </div>
    <div class="clearfix"></div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/Header.vue'

export default {
    components: {
        Footer,
        Header
    },
}
</script>

<style>
.sidebar{
  float:right;
  width:30%;
  height:100vh;
  margin-top:0px;
  margin-right:0px;
  padding:0;
  overflow:scroll;
  overflow-x:hidden;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
@media only screen and (max-width: 900px) {
  .sidebar{
  float:left;
  width:98%;
  height:auto;
  margin-top:0px;
  margin-right:auto;
  margin-left: 5px;
  padding:0px;
  overflow:visible;
  }
}
</style>

