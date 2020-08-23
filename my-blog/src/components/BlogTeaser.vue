<template>
    <div class = "teaserInsert">
        <router-link :to="{path: '/blog/' + post.id}"  tag = "div" class = "teaserImage" v-bind:style = "postImgStyle(post)">
        </router-link>
        <div class = "teaserText">
            <div class = "inside">
                <h1> <router-link :to="{path: '/blog/' + post.id}"> {{post.title}} </router-link> </h1>
                <p> <router-link :to ="{path: '/blogs/' + post.category}"> {{post.category}} </router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import {posts} from '../posts'

export default {
    props: ['id'],
    computed: {
        post: function(){ 
            let self = this;
            return posts.filter(function(post){
                console.log(self.id)
                return post.id == self.id
            })[0]
        }
        // blogPosts: function(){
        //     return posts
        // },
        // teaserPosts: function(){
        //     return posts.slice(0, posts.length-2).reverse()
        // }
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
.teaserInsert {
    flex-direction: row;
    display: flex;
    width: 100%;
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