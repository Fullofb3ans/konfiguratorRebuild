<template>
    <Header />
    <div class="mainContent">
        <RouterView />
    </div>
    <Footer />
</template>
<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>
