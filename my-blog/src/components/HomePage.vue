<template>
    <div id="home">
        <blog-header></blog-header>
        <blog-posts></blog-posts>
        <footer> 
        <p> Dit is tekst voor de footer </p>
        </footer> 
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'
import BlogHeader from './Header.vue'


export default {
  name: 'Home',
  components: {
    'blog-posts': BlogPost,
    'blog-header': BlogHeader,
  }
}
</script>