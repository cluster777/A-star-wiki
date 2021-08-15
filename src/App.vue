<template>
  <div>
    <!--header and nav thanks-->
    <Header/>
    <!-- In this single page, without router-view, views cannot render -->
    
    <router-view />
    <!--me me me footer-->
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header

  }
}
</script>

<style>

</style>
