<template>
  <div>
    <div class=sidebar>
        <!--for all event active show component-->
        
        <!--for all standard stage show component-->
    </div>
    <div class=sidebar>
        <!--supply component-->
        <!--for all event non active component-->
        <!--for all supply show component-->
    </div>
    <div class="clearfix"></div>
  </div>

</template>

<script>

export default {
}
</script>

<style>
.sidebar{
  float:right;
  width:40%;
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
