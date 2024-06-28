<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
</script>

<template>
  <Header />
  <div class="mainContent">
    <!-- <Home /> -->
    <RouterView></RouterView>
  </div>
  <Footer />
</template>

<style scoped>
.mainContent {
  background-color: #80808012;
  min-height: 100vh;
  padding-bottom: 10px;
}
.card {
  margin: 10px;
}
</style>
