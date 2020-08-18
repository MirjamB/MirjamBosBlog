<template>
  <div id="app">
    <blog-header></blog-header>
    <navbar></navbar>
    <blog-posts></blog-posts>
    <footer> 
      <p> Dit is tekst voor de footer </p>
    </footer> 

  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue'
import BlogHeader from './components/Header.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    'blog-posts': BlogPost,
    'blog-header': BlogHeader,
    'navbar': NavBar,
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
