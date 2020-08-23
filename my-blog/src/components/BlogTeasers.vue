<template>
    <div class = "blog-teasers">
        <div  class = 'teaser' v-for="post in teaserPosts" v-bind:key="post">
            <div class = "teaserImage" v-bind:style = "postImgStyle(post)">
            </div>
            <div class = "teaserText">
                <div class = "inside">
                    <h1> {{post.title}} </h1>
                    <p> {{post.category}} </p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {posts} from '../posts'

export default {
    computed: {
        blogPosts: function(){
            return posts
        },
        teaserPosts: function(){
            return posts.slice(0, posts.length-2).reverse()
        }
    },
    methods:{
        postImgStyle: function(post){
            return { 
                   backgroundImage: 'url('+ post.img + ')',
                }
        }
    }


}
</script>

<style>

.blog-teasers {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.teaser {
    width: 50%;
    flex-direction: row;
    display: flex;
    margin-bottom: 10px;
}
.teaserImage {
    max-width: 50%;
    min-width: 50%;
    height: 150px;
    background-size: cover;
}

.teaserText {
    display: flex;
    align-items: center;
    padding: 0 10px;
    
}

.cover{
    object-fit:cover;
    width: 100%;
}


li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 700px) {
    .teaser {
        flex: 100%;
        max-width: 100%;
    }
}
</style>