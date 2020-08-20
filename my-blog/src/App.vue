<template>
  <div>
    <blog-header></blog-header>
    <navbar></navbar>
    <br>
    <router-view></router-view>
    <blog-footer></blog-footer>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderBlog from './components/Header.vue'
import FooterBlog from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'navbar': NavBar,
    'blog-header': HeaderBlog,
    'blog-footer': FooterBlog,
  }
}
</script>

<style>
*, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@import url('https://fonts.googleapis.com/css2?family=Miss+Fajardose&family=Open+Sans:wght@300&family=Playfair+Display:ital,wght@1,500&display=swap');


h1 {
    color: black;
    font-size: 24px;
    font-weight: 100;
    font-family: "Playfair Display";
    padding: 10px 5px;
}

p {
  padding: 0px 5px;
}

body {
    font-family: 'Open Sans';
    font-size: 14px;
}


</style>
