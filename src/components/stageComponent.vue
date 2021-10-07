<template>
  <div>
    <!--for item show links to stage-->
    <div class="grid-container">
        <div v-for="field in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :key="field" class="grid-item">
            <div >
            <!--here goes the stages-->

            </div>
        </div>
    </div>
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
