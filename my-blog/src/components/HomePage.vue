<template>
    <div id="home">
        <blog-posts></blog-posts>
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'


export default {
  name: 'Home',
  components: {
    'blog-posts': BlogPost,
  },
}
</script>