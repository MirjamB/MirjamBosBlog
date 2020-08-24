<template>
    <div class='home'>
    <div class='row'>
    <div class="blog-teasers">
          <div class = "teaser" v-for="post in filteredPosts" v-bind:key="post.id">
            <blog-teaser :id= post.id></blog-teaser>
          </div>
    </div>
    </div>
    </div>
</template>

<script>
import {posts} from '../posts'
import blogTeaser from './BlogTeaser'

export default {
    computed: {
        filteredPosts: function(){
            var self = this;

            if(self.category === 'Alles'){
                return posts
            } else {
                return posts.filter(function(post){
                    return post.category === self.category;
                });
            }
        },
        category: function(){
            return this.$route.params.category
        }
    },
    components: {
        'blog-teaser': blogTeaser
    }
}
</script>

<!-- hier het filter maken -->