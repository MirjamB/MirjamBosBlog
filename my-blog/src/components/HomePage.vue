<template>
    <div id="home">
        <blog-posts></blog-posts>
        <footer> 
        <p> Dit is tekst voor de footer </p>
        </footer> 
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'

export default {
  name: 'Home',
  components: {
    'blog-posts': BlogPost,
  }
}
</script>