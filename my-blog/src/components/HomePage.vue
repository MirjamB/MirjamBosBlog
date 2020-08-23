<template>
    <div class="home">
        <div class = "row">
          <div class = "main">
            <blog-post :short="true" :id="length"></blog-post>
            <blog-post :short="true" :id="length-1"></blog-post>
          </div>
          <div class = "side">
            <over-mij></over-mij>
          </div>
          <div class ="category-label" style = "width: 100%">
                <p class = "category"> Meer posts </p>
          </div>
          <div class="blog-teasers">
          <div class = "teaser" v-for="post in posts" v-bind:key="post">
            <blog-teaser :id="post.id"></blog-teaser>
          </div>
          </div>
        </div>
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'
import OverMij from './OverMijShort.vue'
import BlogTeaser from './BlogTeaser.vue'
import {posts} from '../posts'

export default {
  name: 'Home',
  components: {
    'blog-post': BlogPost,
    'over-mij': OverMij,
    'blog-teaser': BlogTeaser,
  },
  data (){
    return {
      
    }
  },
  computed: {
    length: function(){
      return posts.length
      },
    posts: function(){
      return posts.slice(0,length-2).reverse()
    }
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.main{
    flex: 70%;
    background-color: white;
    padding: 20px;
}

.side{
    flex: 30%;
    background-color: white;
    padding: 20px;
}

.blog-teasers {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width:100%;
}

/* Adjustmentsfor small screens */
@media screen and (max-width: 500px) {
    .row {
        flex-direction: column;
    }

}

 /* Adjustments for wide screens */
@media screen and (min-width: 992px) {
    .row {
        max-width: 992px;
    }
}
</style>