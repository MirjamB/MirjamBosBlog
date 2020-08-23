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
          <blog-teasers></blog-teasers>
        </div>
    </div>
</template>

<script>
import BlogPost from './BlogPost.vue'
import OverMij from './OverMijShort.vue'
import BlogTeasers from './BlogTeasers.vue'
import {posts} from '../posts'

export default {
  name: 'Home',
  components: {
    'blog-post': BlogPost,
    'over-mij': OverMij,
    'blog-teasers': BlogTeasers,
  },
  data (){
    return {
      
    }
  },
  computed: {
    length: function(){
            return posts.length
        },
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