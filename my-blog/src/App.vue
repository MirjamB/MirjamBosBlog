<template>
  <div>
    <blog-header></blog-header>
    <navbar></navbar>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeaderBlog from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'navbar': NavBar,
    'blog-header': HeaderBlog
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


#blog-header {
    background-image: url("./images/HeaderFrontPage.jpg");
    text-align: center;
    padding-top: 75px;
    padding-bottom: 50px;
    height: 275px;
}

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
