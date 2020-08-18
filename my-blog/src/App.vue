<template>
  <div id="app">
    <header> 
      <h1> Mirjam Bos </h1>
    </header>

    <!-- Hier komen de blogposts --> 
    <div>
      <blog-posts></blog-posts>
    </div>
    <footer> 
      <p> Dit is tekst voor de footer </p>
    </footer> 

  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue'

export default {
  name: 'App',
  components: {
    'blog-posts': BlogPost,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
